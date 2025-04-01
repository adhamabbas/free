const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, 'name required'],
    },
    des: {
      type: String,
      required: true
    },
    ingredens: {
      type: String,
      required: true
    },
    image: {
      type: String
    },
    steps: [
      {
        step1: [
          {
          desc:{
            type: String,
            required: true
          },
          pic: {
            type: String
          },
        }
        ],
        step2: [
          {
          desc2:{
            type: String,
            required: true
          },
          pic2: {
            type: String
          },
        }
        ],
        step3: [
          {
          desc3:{
            type: String,
            required: true
          },
          pic3: {
            type: String
          },
        }
        ],
      },
    ],

  },
  { timestamps: true }
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
