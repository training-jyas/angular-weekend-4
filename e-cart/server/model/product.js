var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 1,
      trim: true
    },
    description: {
      type: String,
      required: true,
      minlength: 1,
      trim: true
    },
    image: {
      type: String,
      required: true,
      minlength: 1,
      trim: true
    },
    price: {
        type: Number,
        required: true
    },
    isAvailable: {
        type: Boolean,
        default: true
    },
    isAdded: {
        type: Boolean,
        default: false
    }
});

var Product = mongoose.model('Product', ProductSchema);

module.exports = {
    Product
};
