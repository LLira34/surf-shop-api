/**
 * Modelo para review
 *
 * @author llira
 * @version 1.0
 * @since 02/05/2021
 */
const { Schema, model } = require('mongoose');

const ReviewSchema = new Schema({
  body: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

module.exports = model('Review', ReviewSchema);
