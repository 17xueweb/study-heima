const path = require('path');

const fpath = '/a/b/c/index.html'

const fullName = path.basename(fpath);
console.log(fullName); // index.html

//去掉.html 扩展名
const nameWithoutExt = path.basename(fpath, '.html');
console.log(nameWithoutExt); // index