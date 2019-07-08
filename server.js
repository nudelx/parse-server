var express = require('express')
var ParseServer = require('parse-server').ParseServer

var app = express()
var api = new ParseServer({
  databaseURI: 'mongodb://localhost/test_db',
  // cloud: './client.js',
  appId: 'ALEX_APP',
  // fileKey: 'myFileKey',
  clientKey: '',
  masterKey: 'ALEX_MASTER',
  liveQuery: {
    classNames: ['test_collection']
  }
})

// Serve the Parse API at /parse URL prefix
app.use('/parse', api)

// app.use(bodyParser.json())

// app.use(bodyParser.text())

var port = 1337
// app.listen(port, function() {
//   console.log('parse-server-example running on port ' + port + '.')
// })

let httpServer = require('http').createServer(app)
httpServer.listen(port, () => console.log('LISTENING '))
var parseLiveQueryServer = ParseServer.createLiveQueryServer(httpServer)
