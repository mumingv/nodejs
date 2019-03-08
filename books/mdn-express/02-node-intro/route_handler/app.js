const express = require('express');
const app = express();
const wiki = require('./wiki.js');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/wiki', wiki);

app.listen(3000, () => {
  console.log('示例应用正在监听 3000 端口!');
});

