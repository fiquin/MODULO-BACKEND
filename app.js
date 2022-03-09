const express = require('express');
const { default: mongoose } = require('mongoose');

const apiRoutes = require('./routes/api');

const app = express();
mongoose.connect('mongodb+srv://diplomatura:software@cluster0.xvb0v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
mongoose.Promise = global.Promise;

app.use(express.json());
app.use('/api', apiRoutes);

app.use((err, req, res, next) => {
    return res.status(500).send({ error: err.message });
});


app.listen(4000, () => {
    console.log('API escuchando en el puerto 4000...');
});