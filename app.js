var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/None', function (req, res) {
  res.status(551).send('None')
})

app.get('/Initializing', function (req, res) {
  res.status(552).send('Initializing')
})

app.get('/StartingServices', function (req, res) {
  res.status(553).send('StartingServices')
})

app.get('/StartingRecordedPresentationHost', function (req, res) {
  res.status(554).send('StartingRecordedPresentationHost')
})

app.get('/StartingRecorderHost', function (req, res) {
  res.status(555).send('StartingRecorderHost')
})

app.get('/Ready', function (req, res) {
  res.status(556).send('Ready')
})

app.get('/ShuttingDown', function (req, res) {
  res.status(557).send('ShuttingDown')
})

app.get('/Unknown', function (req, res) {
res.status(560).send('Unknown')
})

app.get('/Idle', function (req, res) {
res.status(561).send('Idle')
})

app.get('/Busy', function (req, res) {
res.status(562).send('Busy')
})

app.get('/RecordStart', function (req, res) {
res.status(563).send('RecordStart')
})

app.get('/Recording', function (req, res) {
res.status(564).send('Recording')
})

app.get('/RecordEnd', function (req, res) {
res.status(565).send('RecordEnd')
})

app.get('/Pausing', function (req, res) {
res.status(566).send('Pausing')
})

app.get('/Paused', function (req, res) {
res.status(567).send('Paused')
})

app.get('/Resuming', function (req, res) {
res.status(568).send('Resuming')
})

app.get('/OpeningSession', function (req, res) {
res.status(569).send('OpeningSession')
})

app.get('/ConfiguringDevices', function (req, res) {
res.status(570).send('ConfiguringDevices')
})

app.get('/i/:num', function (req, res) {
res.status(eval(req.params.num)).send(req.params.num)
})

app.listen(process.env.PORT || 5000, function () {
  console.log('Example app listening on port 80!')
})
