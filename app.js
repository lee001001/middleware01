const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const timestamp = require('time-stamp')
const PORT = 3000

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  const reqMethod = req.method
  const reqUrl = req.url
  console.log(`${timestamp('YYYY-MM-DD HH:mm:ss')} ${reqMethod}  from ${reqUrl}`)
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  const reqMethod = req.method
  const reqUrl = req.url
  console.log(`${timestamp('YYYY-MM-DD HH:mm:ss')} ${reqMethod}  from ${reqUrl}`)
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  const reqMethod = req.method
  const reqUrl = req.url
  console.log(`${timestamp('YYYY-MM-DD HH:mm:ss')} ${reqMethod}  from ${reqUrl}`)
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  const reqMethod = req.method
  const reqUrl = req.url
  console.log(`${timestamp('YYYY-MM-DD HH:mm:ss')} ${reqMethod}  from ${reqUrl}`)
  res.send('新增一筆  Todo')
})

// 設定 port 3000
app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})
