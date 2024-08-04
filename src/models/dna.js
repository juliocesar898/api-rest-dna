const { Schema, model } = require('mongoose');

const dnaSchema = new Schema(
  {
    uid: {
      type: String,
      required: true,
      unique: true,
    },
    dnaCode: {
      type: String,
      required: true,
    },
    isSpecial: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Product = model('dna', dnaSchema);
module.exports = Product;
