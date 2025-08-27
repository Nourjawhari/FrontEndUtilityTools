const fs = require("fs");
const path = require("path");

async function append_error_file(err) {
    const error_message = `[${new Date().toISOString()}] ${err.stack || err}\n`;

    const log_file = path.join(__dirname, "../../logs/error.log");
    fs.mkdirSync(path.dirname(log_file),  { recursive: true });
    fs.appendFileSync(log_file, error_message, "utf8");
}

module.exports = {append_error_file}