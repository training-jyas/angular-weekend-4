const { ObjectID } =  require('mongodb');
const _ = require('lodash');

const {
  Product
} = require('../model/product');

module.exports = (app) => {
  // get
  app.get('/product', (req, res) => {
    Product.find()
      .then((docs) => {
        res.send(docs);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  });

  // create
  app.post('/product', (req, res) => {
    const data = req.body;

    if (!data.name || !data.price || !data.image) {
      res.status(403).send({
        err: 'name or price or image is missing'
      });
    }

    // create a model instance
    const product = new Product(req.body);

    // call mongo api
    product.save()
      .then((doc) => {
        res.send(doc);
      })
      .catch((err) => {
        res.status(500).send(err);
      })
  });

  // update
  app.patch('/product/:id', (req, res) => {
    const id = req.params.id;

    if (!ObjectID.isValid(id)) {
      res.status(403).send({
        err: 'pass a valid id'
      });
    }

    const body = req.body;
    const data = _.pick(body, ['name', 'description', 'price', 'image', 'isAvailable', 'isAdded']);

    // call mongodb
    Product.findByIdAndUpdate(id, data, {
        new: true
      })
      .then((doc) => {
        res.send(doc);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  });

  // delete
  app.delete('/product/:id', (req, res) => {
    const id = req.params.id;

    if (!ObjectID.isValid(id)) {
      res.status(403).send({
        err: 'pass a valid id'
      });
    }

    // call mongodb
    Product.findByIdAndRemove(id)
      .then((doc) => {
        res.send(doc);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  });
}