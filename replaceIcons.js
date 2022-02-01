const fs = require("fs");
const path = require("path");

const dataFile = path.resolve("./dist/data.js");

const data = fs.readFileSync(dataFile, "utf8");
fs.writeFileSync(dataFile, data.replace(/.svg/g, ".js"));
