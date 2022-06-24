const fs = require("fs");

// 出现路径拼接错误问题，是因为提供了 ./或 ../ 开头的相对路径
// 如果要解决这个问题，可以直接提供一个完整的文件存放路径就行

// fs.readFile('./files/1.txt', 'utf8', function(err, dataStr) {
//     if (err) {
//         return console.log('文件读取失败' + err);
//     }
//     console.log('文件读取成功！' + dataStr);

// });

// 移植性非常差，不利于维护
// fs.readFile('Users/learn/web/study_heima_web/code/node/day01/05-演示路径的问题.js', 'utf8', function(err, dataStr) {
//     if (err) {
//         return console.log('文件读取失败' + err);
//     }
//     console.log('文件读取成功！' + dataStr);

// });

//__dirname 表示当前文件所处的目录
// console.log(__dirname);

fs.readFile(__dirname + '/files/1.txt', 'utf8', function(err, dataStr) {
    if (err) {
        return console.log('文件读取失败' + err);
    }
    console.log('文件读取成功！' + dataStr);

});