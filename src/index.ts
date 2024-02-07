#!/usr/bin/env node

import { program } from "commander";
import { select, intro, outro } from "@clack/prompts";
import { createSecret } from "./secret";
import { createReleaseName } from "./release";
import { exit } from "node:process";

program.option("-s, --secret");
program.option("-r, --release");

program.parse();
const options = program.opts();

console.clear();
intro("Welcome to magitools");
if (options["secret"]) {
  outro(createSecret());
  exit(0);
}
if (options["release"]) {
  outro(await createReleaseName());
  exit(0);
}
const values = await select({
  message: "what would you like to do?",
  options: [
    { label: "Generate a secret", value: "secret" },
    { label: "Generate a release name", value: "release" },
  ],
});

switch (values) {
  case "secret":
    outro(createSecret());
    break;
  case "release":
    outro(await createReleaseName());
  default:
    break;
}
