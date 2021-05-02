/**
 * Modelo para user
 *
 * @author llira
 * @version 1.0
 * @since 02/05/2021
 */
const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  email: String,
  image: String,
  posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
});

module.exports = model('User', UserSchema);
