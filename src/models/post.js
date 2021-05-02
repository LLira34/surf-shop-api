/**
 * Modelo para post
 *
 * @author llira
 * @version 1.0
 * @since 02/05/2021
 */
const { Schema, model } = require('mongoose');

const PostSchema = new Schema({
  title: String,
  price: String,
  description: String,
  images: [String],
  location: String,
  lat: Number,
  lng: Number,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  reviews: {
    type: Schema.Types.ObjectId,
    ref: 'Review',
  },
});

module.exports = model('Post', PostSchema);
