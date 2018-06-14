
const express = require('express')
const app = express()

app.use(express.static('build'))
app.get('/api/demo', (req, res) => res.send([1, 2, 3, 4]))
app.get('*', (req, res) => res.sendFile('./build/index.html', {root: '.'}))

app.listen(8080, () => console.log('Example app listening on port 8080!'))
