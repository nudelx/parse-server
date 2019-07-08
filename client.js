var Parse = require('parse/node')
Parse.serverURL = 'http://localhost:1337/parse'
// Parse.liveQueryServerURL = 'ws://127.0.0.1'
// console.log(Parse)
Parse.initialize('ALEX_APP', 'ALEX_MASTER')
// Parse.LiveQuery.on('open', () => {
//   console.log('socket connection established')
// })

// Parse.LiveQuery.on('close', () => {
//   console.log('socket connection closed')
// })

let query = new Parse.Query('test_collection')
const name = process.argv.slice(2).pop() || 'Alex'
console.log(process.argv.slice(2))
console.log('listen to  => ', name)
query.equalTo('name', name)
const d = {}
const test = data => {
  d[data.id] = data
  console.log('==================')
  console.log('this is data ', d)
  console.log(data.get('name'))
  console.log('DATA: ', d)
  console.log('==================')
}
query
  .subscribe()
  .then(subscription => {
    subscription.on('create', d => {
      console.log('Created !!!!', d)
      test(d)
    })
  })
  .catch(err => console.error(err))
