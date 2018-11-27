const express = require('express')
const favicon = require('express-favicon');

const app = express()
const port = 3000

function ignoreFavicon(req, res, next) {
    if (req.originalUrl === '/favicon.ico') {
      res.status(204).json({nope: true});
    } else {
      next();
    }
  }

app.use(ignoreFavicon);
// app.use(favicon(__dirname + '/public/assets/images/logo_30_30.png'));
app.use(express.static('public'))
// app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))