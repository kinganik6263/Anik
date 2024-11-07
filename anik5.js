console.clear();
const {
  spawn
} = require("child_process");
const express = require("express");
const app = express();
const chalk = require("chalk");
const logger = require("./Nayanc.js");
const path = require("path");
const PORT = process.env.PORT || 8080 || 9000 || 5555 || 5050 || 5000 || 3003 || 2000 || 1029 || 1010;
app.get('/', function (_0xd6a0d1, _0x4e7463) {
  _0x4e7463.sendFile(path.join(__dirname, "/website/Nayan.html"));
});
console.clear();
function startBot(_0x4d1790) {
  if (_0x4d1790) {
    logger(_0x4d1790, "starting");
  } else {
    '';
  }
  console.log(chalk.blue("⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯\n             DEPLOYING MAIN SYSTEM 🎭\n⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯\n"));
  logger.loader("deploying app on port " + chalk.blueBright(PORT));
  app.listen(logger.loader("app deployed on port " + chalk.blueBright(PORT)));
  const _0x1b5e82 = spawn("node", ["--trace-warnings", "--async-stack-traces", "Nayanb.js"], {
    'cwd': __dirname,
    'stdio': "inherit",
    'shell': true
  });
  _0x1b5e82.on("close", _0xbd7a9f => {
    if (_0xbd7a9f != 0 || global.countRestart && global.countRestart < 5) {
      startBot();
      global.countRestart += 1;
      return;
    } else {
      return;
    }
  });
  _0x1b5e82.on("error", function (_0x54704f) {
    logger("an error occurred : " + JSON.stringify(_0x54704f), "error");
  });
}
;
startBot();
