/*
 * @Author: your name
 * @Date: 2021-05-06 15:40:10
 * @LastEditTime: 2021-05-06 15:44:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \auto_test\index.js
 */
const cmd = require("./cmd");
const file = require("./file");
let day = 10;

const random = (lower, upper) => {
 return Math.floor(Math.random() * (upper - lower + 1)) + lower;
};
const commit = async () => {
  console.log('ssssss');
 const today = new Date();
 today.setTime(
  today.getTime() - 0 * 24 * 60 * 60 * 1000 - day * 24 * 60 * 60 * 1000
 );
 let commitTime = `${today.getFullYear()}.${
  today.getMonth() + 1
 }.${today.getDate()}`;
 if (today.getFullYear() > 2021) {
  return;
 }
 let commitNumber = random(1, 10);
 let dayNumber = random(1, 3);
 while (commitNumber) {
  await file(commitTime);
  await cmd("git status");
  await cmd("git add .");
  await cmd(`git commit -m "${commitTime}" --no-edit --date="${commitTime}"`);
  commitNumber--;
 }
 if (day >= 10) {
  day -= dayNumber;
  commit();
 } else {
  // await cmd('git push origin master');
 }
};
commit();