const express = require('express');
const path = require('path');
const PORT = 3030;
const app = express();


const publicPath = path.resolve(__dirname, './public');


app.set('view engine', 'ejs')
app.set('views', './views')

app.use( express.static(publicPath) );

app.get('/', (req, res) => {
    res.render('index')
})


app.get('/detalleMenu', (req, res) => {
    res.render('detalleMenu')
})



app.listen(PORT, () => {
    console.log('http://localhost:3030/detalleMenu');
})