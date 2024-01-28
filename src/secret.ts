import { randomBytes } from "node:crypto";
import kleur from "kleur";

export function createSecret() {
  const key = randomBytes(32).toString("hex");
  return kleur.green("Secret generated: ") + key;
}
