const path = require("path");
const spawnSync = require('child_process').spawnSync;
const os = require('os');

let javaMemoryInMbytes = "256";

function spawnTfSync(...args) {

    if (args.length === 1 && /^\d+$/.test(args[0])) {
        javaMemoryInMbytes = args[0];
        console.log("Xmx set to "+args[0] +"M");
        return;
    }

    const result = isWindows() ?
        spawnTfWinSync(args) :
        spawnTfUnixSync(args);

    const out = result.stdout.toString();
    if (out !== "") console.log(out);

    const error = result.stderr.toString();
    if (error !== "") console.log(error);

    return result;
}

function isWindows() {
    return os.platform() === 'win32';
}

function spawnTfWinSync(args) {
    setXmx();
    const tfPath = path.resolve(__dirname, 'tf.cmd');
    return spawnSync(process.env.comspec, ["/c", tfPath, ...args]);
}

function spawnTfUnixSync(args) {
    setXmx();
    const tfPath = path.resolve(__dirname, 'tf');
    return spawnSync(tfPath, [...args]);
}

function setXmx() {
    process.env["JAVA_MEM"] = javaMemoryInMbytes;
}


module.exports = spawnTfSync;