const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

 
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, PATCH, DELETE'
    )
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    res.setHeader('Access-Control-Allow-Credentials', true)
    next()
})
  
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/api', bodyParser.json(), require('./api'))

app.get('/', function(req, res) {
  //res.sendFile(path.join(__dirname, 'index.html'));
  res.send({ status: true })
});

app.listen(process.env.PORT || 3000, function(){
  console.log('Your node js server is running', process.env.PORT);
});