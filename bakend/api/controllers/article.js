
const articleModel = require('../models/article');	
const fs = require('fs');
const mongoose = require("mongoose");				

module.exports = {
	getById: function(req, res, next) {
		console.log(req.body);
		articleModel.findById(req.params.articleId, function(err, articleInfo){
			if (err) {
				next(err);
			} else {
				res.json({status:"success", message: "article found!!!", data:{articles: articleInfo}});
			}
		});
	},

	getAll: function(req, res, next) {
		let articleList = [];

		articleModel.find({}, function(err, articles){
			if (err){
				next(err);
			} else{
				for (let article of articles) {
					articleList.push({id: article._id, 
						              name: article.name, 
                                      price: article.price,
                                      image:article.image
									 });
				}
				res.json({status:"success", message: "article list found!!!", data:{articles: articleList}});
							
			}

		});
	},

	updateById: function(req, res, next) {
		articleModel.findByIdAndUpdate(req.params.articleId,{name:req.body.name,price:req.body.price,image:req.body.image}, function(err, articleInfo){

			if(err)
				next(err);
			else {
				res.json({status:"success", message: "article updated successfully!!!", data:null});
			}
		});
	},

	deleteById: function(req, res, next) {
		articleModel.findByIdAndRemove(req.params.articleId, function(err, articleInfo){
			if(err)
				next(err);
			else {
				res.json({status:"success", message: "article deleted successfully!!!", data:null});
			}
		});
	},

	//create and upload image
	create: function(req, res, next) {
		//use the fs object's rename method to re-name the file
		fs.rename(req.file.path, req.file.path + ".jpg", function(err) {
		  if (err) {
			console.log(err);
			return;
		  }
	  console.log("The file has been re-named to: " + req.file.path + ".jpg");
		});
		const article = new articleModel({
		  _id: new mongoose.Types.ObjectId(),
		  name: req.body.name,
		  price:req.body.price,
		  image: req.file.path + ".jpg"
		});
		article
		  .save()
		  .then(result => {
			console.log(result);
			res.status(201).json({
			  message: "articles club successfully"
			  // createdPlayer: {
			  //     name: result.name,
			  //     _id: result._id,
			  //     // request: {
			  //     //     type: 'GET',
			  //     //     url: "http://localhost:5000/api/players/" + result._id
			  //     // }
			  // }
			});
		  })
		  .catch(err => {
			console.log(err);
			res.status(500).json({
			  error: err
			});
		  });
 //end create		  


}}				