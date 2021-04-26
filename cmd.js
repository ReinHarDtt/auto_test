/*
 * @Author: your name
 * @Date: 2021-05-06 15:38:01
 * @LastEditTime: 2021-05-06 15:39:37
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \auto_test\cmd.js
 */
const exec = require("child_process").exec;
module.exports = (cmd) => {
 return new Promise((resolve, reject) => {
  exec(cmd, function (error, stdout, stderr) {
   if (error) {
    console.log(error);
    reject(stderr);
   } else {
    resolve(stdout);
   }
  });
 });
};