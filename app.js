const express = require('express');
const { default: mongoose } = require('mongoose');

const apiRoutes = require('./routes/api');
const {idValidator, priceValidator, propertyValidator} = require('./middlewares/requestValidator');


const app = express();
mongoose.connect('mongodb+srv://diplomatura:software@cluster0.xvb0v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
mongoose.Promise = global.Promise;

app.use(express.json());

// used middleware
app.use('/api', propertyValidator);
app.use('/api', priceValidator);
app.use('/api/products/:id', idValidator);


// error handling middleware
app.use(function(err, req, res, next){
    res.status(500).send({ error: err.message });
});

// used routes
app.use('/api', apiRoutes);

app.listen(4000, () => {
    console.log('API escuchando en el puerto 4000...');
});