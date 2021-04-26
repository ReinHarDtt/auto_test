/*
 * @Author: your name
 * @Date: 2021-05-06 15:38:41
 * @LastEditTime: 2021-05-06 15:38:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \auto_test\file.js
 */
const fs = require("fs");
module.exports = (message) => {
 return new Promise((resolve, reject) => {
  fs.appendFile("message.txt", `${message}\n`, (err) => {
   err ? reject() : resolve();
  });
 });
};