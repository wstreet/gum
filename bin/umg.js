#!/usr/bin/env node

const actions = require("../actions");
const PKG = require("../package.json");
const { program } = require("commander");

program.version(PKG.version);

program
  .command("list")
  .alias("ls")
  .description("list all users configuration information")
  .action(actions.onList);

program
  .command("use <name>")
  .description("set local git config user from [name] configuration information")
  .action(actions.onUse);

program
  .command("add <name> <email>")
  .description("add [name][email] configuration information")
  .action(actions.onAdd);

program
  .command("remove <name>")
  .alias("rm")
  .description("remove the specified [name] configuration information")
  .action(actions.onRemove);

  program
  .command('show')
  .description('displays the local git user configuration')
  .action(actions.show)

program.parse(process.argv);

if (process.argv.length === 2) {
  program.outputHelp();
}
