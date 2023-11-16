#!/usr/bin/env node

const actions = require("./actions");
const PKG = require("./package.json");
const { program } = require("commander");

program.version(PKG.version);

program.command("ls").description("List all the users").action(actions.onList);

program
  .command("use <name>")
  .description("Change current registry")
  .action(actions.onUse);

program
  .command("add <name> <email>")
  .description("Add custom user")
  .action(actions.onAdd);

program.command("rm <name>").description("Remove user").action(actions.onRemove);

program.parse(process.argv);

if (process.argv.length === 2) {
  program.outputHelp();
}
