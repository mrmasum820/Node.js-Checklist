const path = require("node:path");

console.log(__filename);
console.log(__dirname);

// path.basename
console.log(path.basename(__filename));
console.log(path.basename(__dirname));

// path.extname
console.log(path.extname(__filename));
console.log(path.extname(__dirname));

// path.parse
console.log(path.parse(__filename));
console.log(path.format(path.parse(__filename)));

// path.isAbsolute -> ture / false
console.log(path.isAbsolute(__filename));
console.log(path.isAbsolute("./data.json"));

// path.join
console.log(path.join("folder1", "folder2", "index.html"));
console.log(path.join("/folder1", "folder2", "index.html"));
console.log(path.join("/folder1", "//folder2", "index.html"));
console.log(path.join("/folder1", "//folder2", "../index.html"));
console.log(path.join(__dirname, "data.json"));

// path.resolve
console.log(path.resolve("folder1", "folder2", "index.html"));
console.log(path.resolve("/folder1", "folder2", "index.html"));
console.log(path.resolve("/folder1", "//folder2", "index.html"));
console.log(path.resolve("/folder1", "//folder2", "../index.html"));
console.log(path.resolve(__dirname, "data.json"));
