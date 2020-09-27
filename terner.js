const express   = require('express');
const bodyParser= require('body-parser');
const path =require('path');
const http = require('http');

const app=express();

app.use(express.static('public'));


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

// terner_ols.jpg
// app.get('/terner_ols.jpg', function(request, response) {
//   res.sendFile(path.join(__dirname, './terner_ols.jpg'));
// })

const port = '4700';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));
