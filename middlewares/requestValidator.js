const ObjectId = require('mongoose').Types.ObjectId;

const idValidator = (req, res, next) => {
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).send({ error: "Invalid ID Format"});
    };

    next();
};

const priceValidator = (req, res, next) => {
    if (req.body.price <= 0){
        return res.status(400).send({ error: "Price must be higher than 0"});
    };

    next();
};

const propertyValidator = (req, res, next) => {
    const errors = [];
    for (let property in req.body) {
        if (!( property === 'name' || property === 'price' || property === 'description' || property === 'imageUrl' )){
           errors.push(property);
        };
    };
    
    if ( errors.length > 0) {
        return res.status(400).send({ error: `Property '${errors}' are not supported` });
      };

    next();
};


module.exports = {idValidator, priceValidator, propertyValidator};
