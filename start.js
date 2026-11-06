
const { execFileSync } = require("node:child_process");
const path = require("node:path");

const appDir = path.join(__dirname, "app");

console.log("Installation terminée, démarrage des commandes Discord...");

execFileSync(process.execPath, ["create-cmds.js"], {
    cwd: appDir,
    stdio: "inherit"
});

console.log("Démarrage du bot Vinted...");

require(path.join(appDir, "dist", "index.js"));
