/*
 * @Author: your name
 * @Date: 2021-05-07 13:59:17
 * @LastEditTime: 2021-06-02 13:53:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \auto_test\aaa.js
 */
// console.log(process.cwd());
// console.log(process.platform);

// const fs = require('fs')
// fs.createReadStream('message.txt').pipe(process.stdout)

// process.stdin.pipe(process.stdout)

// process.stdin.on('readable', () => {
//   let chunk = process.stdin.read()
//   if (chunk) {
//     process.stdout.write('我是：' + chunk)
//   }
// })
// console.log(JSON.stringify(module))

// console.log(process.version);
// const { Readable } = require('stream')
// const fs = require('fs')
// const rs = fs.createReadStream('test.txt')
// const ws = fs.createWriteStream('test1.txt')
// let flag = ws.write('1')
// console.log(flag);
// flag = ws.write('发f懂非sd')
// console.log(flag); 
// flag = ws.write('3')
// console.log(flag);
// rs.pipe(ws)

// ws.end()
// ws.on('close', () => {
//   console.log('关闭了');
// })

// let source = ['1','2','3', 'ddd', '地方都是']

// class MyReadable extends Readable {
//   constructor(source) {
//     super()
//     this.source = source
//   }
//   _read() {
//     let data = this.source.shift() || null
//     this.push(data)
//   }
// }

// const myRead = new MyReadable(source)
// myRead.on('readable', () => {
//   let data = null
//   while ((data = myRead.read()) !== null) {
//     console.log(data.toString())
//   }
// })

// myRead.on('data', (data) => {
//   console.log(data.toString())
// })


// setTimeout(() => {
//   console.log(3)
//   Promise.resolve().then(() => {console.log('p1')})
//   process.nextTick(() => {console.log('t1');})
// }, 0);
// new Promise(resolve => {
//   resolve(2)
// }).then(r => console.log(r))

// process.nextTick(() => {
//   console.log(1)
// })
// setTimeout(() => {
//   console.log(4)
//   new Promise(resolve => {
//     resolve('p2')
//   }).then(r => console.log(r))
//   process.nextTick(() => {console.log('t2');})
// }, 0);

setTimeout(() => {
  console.log(1); 
}, 0);

setImmediate(() => {
  console.log(2);
})