#!/usr/bin/env node

import { program } from "commander";
import { select, intro, outro } from "@clack/prompts";
import { createSecret } from "./secret";

program.option("-s, --secret");

program.parse();
const options = program.opts();

console.clear();
intro("Welcome to magitools");
if (options["secret"]) {
  outro(createSecret());
} else {
  select({
    message: "what would you like to do?",
    options: [{ label: "Generate a secrete", value: "secret" }],
  }).then((value) => {
    switch (value) {
      case "secret":
        outro(createSecret());
        break;
      default:
        break;
    }
  });
  /*   prompts({
    type: "select",
    name: "action",
    message: "what would you like to do?",
    choices: [
      {
        title: "Secret",
        description: "Generate a 256 bit secret (useful for magiedit)",
        value: "secret",
      },
    ],
  }).then((value) => {
    switch (value.action) {
      case "secret":
        console.log(createSecret());
        break;
      default:
        break;
    }
  }); */
}
