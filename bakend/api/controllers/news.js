
const newModel = require('../models/news');	
const fs = require('fs');
const mongoose = require("mongoose");				

module.exports = {
	getById: function(req, res, next) {
		console.log(req.body);
		newModel.findById(req.params.newId, function(err, newInfo){
			if (err) {
				next(err);
			} else {
				res.json({status:"success", message: "newINFORMAT found!!!", data:{news: newInfo}});
			}
		});
	},

	getAll: function(req, res, next) {
		let newList = [];

		newModel.find({}, function(err, news){
			if (err){
				next(err);
			} else{
				for (let newINFORMAT of news) {
					newList.push({id: newINFORMAT._id, 
						              title: newINFORMAT.title, 
                                      description: newINFORMAT.description,
									  image:newINFORMAT.image,
									  date:newINFORMAT.date
									 });
				}
				res.json({status:"success", message: "newINFORMAT list found!!!", data:{news: newList}});
							
			}

		});
	},

	updateById: function(req, res, next) {
		newModel.findByIdAndUpdate(req.params.newId,{
			                title:req.body.title,
							description:req.body.description,
							date:req.body.date,
							image:req.body.image}, function(err, newInfo){

			if(err)
				next(err);
			else {
				res.json({status:"success", message: "newINFORMAT updated successfully!!!", data:null});
			}
		});
	},

	deleteById: function(req, res, next) {
		newModel.findByIdAndRemove(req.params.newId, function(err, newInfo){
			if(err)
				next(err);
			else {
				res.json({status:"success", message: "newINFORMAT deleted successfully!!!", data:null});
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
		const newINFORMAT = new newModel({
		  _id: new mongoose.Types.ObjectId(),
		  title: req.body.title,
		  description:req.body.description,
		  date:req.body.date,
		  image: req.file.path + ".jpg"
		});
		newINFORMAT
		  .save()
		  .then(result => {
			console.log(result);
			res.status(201).json({
			  message: "news added successfully"
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