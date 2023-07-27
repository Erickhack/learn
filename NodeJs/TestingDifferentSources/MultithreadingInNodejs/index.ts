import fs from "fs";
import path from "path";

const __dirname = ".";

fs.readFile(path.join(__dirname, "./package.json"), (err, content) => {
  if (err) {
    return null;
  }

  console.log(content.toString());
});
