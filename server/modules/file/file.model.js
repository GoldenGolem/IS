var mongoose = require('mongoose')
var urlSlugs = require('mongoose-url-slugs')
var CommentSchema = require('../comment/comment.model')

var fileSchema = mongoose.Schema({
  created: {
    type: Date,
    default: Date.now
  },
  name: {
    type: String,
    trim: true,
    required: true
  },
  link: {
    type: String,
    trim: true,
    required: true
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'users',
    required: true
  },
  enabled: {
    type: Boolean,
    default: true
  }
})

module.exports = fileSchema
