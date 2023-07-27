"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var path_1 = require("path");
var __dirname = ".";
fs_1.default.readFile(path_1.default.join(__dirname, "./package.json"), function (err, content) {
    if (err) {
        return null;
    }
    console.log(content.toString());
});
