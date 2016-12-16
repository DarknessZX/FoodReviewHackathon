'use strict';

var Post = require('./post.model');

module.exports = {
  // deleteUser: function(req, res){
  //   User.findOne({username: req.params.username})
  //     .exec(function(err, data){
  //       if (data){
  //         data.remove(function(err){
  //           if (err){
  //             res.json({status: false, message:'delete failed!!!'});
  //           }else{
  //             res.json({status: true, message:'delete succeed!!!'});
  //           }
  //         })
  //       }else{
  //         res.json({status: false, message:'delete failed!!!'});
  //       }
  //     })
  // },
  // edit: function(req,res){
  //   if(req.body){
  //     User.findOne({username: req.body.username}).exec(function(err, data){
  //       if (data){
  //         data.age = req.body.age;
  //         data.role = req.body.role;
  //         data.name = req.body.name;
  //       }
  //       data.save(function(err, newData){
  //         if (err){
  //           res.json({status: false, message: 'Update failed!!!'});
  //         }
  //         else{
  //           res.json({status: true, message: 'Update succeed!!!'});
  //         }
  //       });
  //     });
  //   }
  //   else {
  //     res.json({status: false, message: 'Update fail!!!'})
  //   }
  // },
  create: function(req, res) {
    if (req.body) {
      var post = {
        title: req.body.title,
        location: req.body.location,
        content: req.body.content,
        images: req.body.images,
        recipes: req.body.recipes,
        user: req.user._id
      }
      Post.create(post, function(err, data){
        if(err) {
          console.error(err);
          res.json({code : 0, message: err});
        }
        res.json({code : 1, result: data._id});
      });
    }
  },

  getAll : function(req, res){
    Post.find().exec(function(err, data){
      if(err) {
        console.error(err);
        res.json({code : 0, message: err});
      }
      res.json({code : 1, result: data});
    });
  },

  getposts : function(req, res) {
    if (req.params.postId) {
      logger.log('debug', 'START - find post by post Id %s', req.params.postid);
      Post.find({_id: req.params.postId}).exec(function(err,data) {
        if (!err) {
          res.json({code : 1, result: data});
        } else {
          res.json({code : 0, message: err});
        }
      });
    }
  },

  edit : function(req, res) {
    if (req.body) {
      Post.findOne({_id: req.body._id}).exec(function(err,data) {
          if (data) {
            data.title = req.body.title;
            data.location = req.body.location;
            data.images = req.body.images;
            data.content = req.body.images;
            data.recipes = req.body.recipes;
            data.user = req.body.user;
          }
          data.save(function(err,data) {
            
            res.json({})
          })
      });
    }
  }
}
