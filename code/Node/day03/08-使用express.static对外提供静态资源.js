const express = require('express');
const app = express();

// 在这里，调用 express.static() 方法，快速对外提供静态资源
app.use('/files', express.static('./file'));
app.use(express.static('./clock'))

app.listen(80, (req, res) => {
    console.log('express server running at http://127.0.0.1');
});