const { spawnSync } = require("child_process");
const path = require("path");

const app = path.join(__dirname, "app");

function run(command, args, cwd) {
    const result = spawnSync(command, args, {
        cwd,
        stdio: "inherit"
    });

    if (result.error) throw result.error;

    if (result.status !== 0) {
        process.exit(result.status || 1);
    }
}

console.log("Installation des dépendances...");
run("npm", ["install", "--prefix", "app", "--ignore-scripts", "--no-audit", "--no-fund"], __dirname);

console.log("Compilation du bot...");
run("npm", ["run", "build", "--prefix", "app"], __dirname);

console.log("Enregistrement des commandes Discord...");
run(process.execPath, ["create-cmds.js"], app);

console.log("Démarrage du bot...");
require(path.join(app, "dist", "index.js"));
