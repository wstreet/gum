const fs = require("fs");
const ini = require("ini");
const chalk = require("chalk");

const { USER, GUM_CONFIG } = require("./constants");

async function readFile(file, format = "ini") {
  return new Promise((resolve) => {
    if (!fs.existsSync(file)) {
      resolve({});
    } else {
      try {
        let content = {};
        if (format === "ini") {
          content = ini.parse(fs.readFileSync(file, "utf-8"));
        }
        if (format === "json") {
          content = JSON.parse(fs.readFileSync(file, "utf-8"));
        }
        resolve(content);
      } catch (error) {
        exit(error);
      }
    }
  });
}

async function writeFile(path, content, format = "ini") {
  return new Promise((resolve) => {
    try {
      if (format === "ini") {
        fs.writeFileSync(path, ini.stringify(content));
      }
      if (format === "json") {
        fs.writeFileSync(path, JSON.stringify(content));
      }
      resolve();
    } catch (error) {
      exit(error);
    }
  });
}

function padding(message = "", before = 1, after = 1) {
  return (
    new Array(before).fill(" ").join("") +
    message +
    new Array(after).fill(" ").join("")
  );
}
function printSuccess(message) {
  console.log(chalk.bgGreenBright(padding("SUCCESS")) + " " + message);
}

function printError(error) {
  console.error(chalk.bgRed(padding("ERROR")) + " " + chalk.red(error));
}
function printMessages(messages) {
  for (const message of messages) {
    console.log(message);
  }
}

function isLowerCaseEqual(str1, str2) {
  if (str1 && str2) {
    return str1.toLowerCase() === str2.toLowerCase();
  } else {
    return !str1 && !str2;
  }
}

function geneDashLine(message, length) {
  const finalMessage = new Array(Math.max(2, length - message.length + 2)).join(
    "-"
  );
  return padding(chalk.dim(finalMessage));
}

async function getCurrentUser() {
  const config = await readFile(`${process.cwd()}/.git/config`);
  return config[USER];
}
async function getUsers() {
  const { users } = await readFile(GUM_CONFIG, "json");
  return users || {};
}

async function isUserNotFound(name, printErr = true) {
  const users = await getUsers(); 
  if (!Object.keys(users).includes(name)) {
    printErr && printError(`The user '${name}' is not found.`);
    return true;
  }
  return false;
}

function exit(error) {
  error && printError(error);
  process.exit(1);
}

function getCurrentDir() {
  return process.cwd();
}
module.exports = {
  exit,
  geneDashLine,
  printError,
  printSuccess,
  printMessages,
  isLowerCaseEqual,
  readFile,
  writeFile,
  getUsers,
  getCurrentUser,
  isUserNotFound,
  getCurrentDir,
};
