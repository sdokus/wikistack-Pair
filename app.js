const express = require('express');
//const res = ('express/lib/response')
const layout = require('./views/layout')
const app = express();
const PORT = 1337;

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send(layout())
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})