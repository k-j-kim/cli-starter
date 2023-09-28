import { exec, execAsync } from "./utils.mjs";

async function test(argv) {
  console.log("argv:", argv);
  exec("echo hello");
  exec("echo waiting 2 seconds...");
  await execAsync("sleep 2");
  exec("echo goodbye");
}

export { test };
