var express = require('express'),
    app = express(),
    port = process.env.PORT || 8080,
    bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use('/node_modules', express.static(__dirname + '/..' + '/node_modules'))
app.use('/js', express.static(__dirname + '/js'))
app.use('/css', express.static(__dirname + '/css'))
app.use('/images', express.static(__dirname + '/images'))
app.use('/components', express.static(__dirname + '/js/components'))

app.route('/*').get((req, res) => res.sendFile(`${__dirname}/index.html`))
app.listen(8080)