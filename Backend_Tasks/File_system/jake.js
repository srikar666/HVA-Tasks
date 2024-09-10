const fs = require('fs').promises;

async function readFile(name) {
  try {
    const data = await fs.readFile(name, 'utf8');
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

module.exports = readFile;

async function appendFile(name, text) {
  try {
    await fs.appendFile(name, text);
    console.log("Appended to message.txt successfully.");
  } catch (err) {
    console.error("Error to append file:", err);
  }
}

module.exports = appendFile;

async function createFile(name, note) {
  try {
    await fs.writeFile(name, note);
    console.log("File written successfully.");
  } catch (err) {
    console.error(err);
  }
}

module.exports = createFile;

async function deleteFile(name) {
  try {
    await fs.unlink(name);
    console.log('File has been deleted successfully.');
  } catch (err) {
    console.error('Error deleting file:', err);
  }
}

module.exports = deleteFile;

const create = require("./Create");
const read = require("./Read");
const append = require("./Append");
const del = require("./Delete");
const name = "creta2024.txt";
const note = "abcdef";
const note1 = "ghijk";

async function exec() {
  await create(name, note);
  await read(name);
  await append(name, note1);
  await read(name);
}

exec();
