const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  imageUrl: { 
    type:String,
    required:true,
  },
  description: {
    type: String,
    required: true,
  },
  
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  available: {
    type: Boolean,
    required: true,
  },
  date_added: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Product = mongoose.model('Product', productSchema);