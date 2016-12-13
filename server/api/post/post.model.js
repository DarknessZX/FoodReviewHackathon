'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var post = new Schema({
  title: {
    require: true,
    type: String
  },
  location : {
    lat : {
      type : String,
      require: true
    },
    lon : {
      type : String,
      require: true
    },
    name : {
      type : String
    }
  },
  images : {
    type: [],
    require: true
  },
  content : {
    type: String,
    require: true
  },
  comment : {
    type : []
  },
  recipes : {
    type : String
  },
  user : {
    type : String,
    require
  }
}, {
    timestamps: true
});


module.exports = mongoose.model('Post', post);
