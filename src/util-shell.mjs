import shell from "shelljs";
import { color } from "./util-color.mjs";

function execAsync(cmd, opts = {}) {
  return new Promise(function (resolve, reject) {
    shell.exec(cmd, opts, (code, stdout, stderr) => {
      if (code !== 0) return reject(new Error(stderr));
      return resolve(stdout);
    });
  });
}

function exec(cmd, opts = {}) {
  console.log(color("running command", color.bgCyan), color(cmd, color.fgGreen));
  return shell.exec(cmd, opts);
}

export { exec, execAsync };
