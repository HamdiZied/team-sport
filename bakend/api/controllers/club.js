const clubModel = require('../models/club');
const fs = require('fs');
const mongoose = require("mongoose");					

module.exports = {
	getById: function(req, res, next) {
		console.log(req.body);
		clubModel.findById(req.params.clubId, function(err, clubInfo){
			if (err) {
				next(err);
			} else {
				res.json({status:"success", message: "club found!!!", data:{clubs: clubInfo}});
			}
		});
	},

	getAll: function(req, res, next) {
		let clubsList = [];

		clubModel.find({}, function(err, clubs){
			if (err){
				next(err);
			} else{
				for (let club of clubs) {
					clubsList.push({id: club._id, name: club.name, image: club.image});
				}
				res.json({status:"success", message: "clubs list found!!!", data:{clubs: clubsList}});
							
			}

		});
	},

	updateById: function(req, res, next) {
		clubModel.findByIdAndUpdate(req.params.clubId,{name:req.body.name,image:req.body.image}, function(err, clubInfo){

			if(err)
			
				next(err);
			else {
				res.json({status:"success", message: "club updated successfully!!!", data:null});
			}
		})
	},
	// updateById:function(req,res,next){
	// 	clubModel.findOneAndUpdate(
	// 	{id: req.params.clubId, 
	// 	 'name': new (req.body.name) ,
	// 	 'image': new (req.body.image)},
	// 	{ $inc: { 'name': 1,
	//              'image':1 } },
	// 	{ new: true },
	// 	function(err, clubInfo){
	// 	  if (err) { return next(err); }
	// 	  res.json(clubInfo);
	// 	})
	// }
	// ,

	deleteById: function(req, res, next) {
		clubModel.findByIdAndRemove(req.params.clubId, function(err, clubInfo){
			if(err)
				next(err);
			else {
				res.json({status:"success", message: "club deleted successfully!!!", data:null});
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
		const club = new clubModel({
		  _id: new mongoose.Types.ObjectId(),
		  name: req.body.name,
		  image: req.file.path + ".jpg"
		});
		club
		  .save()
		  .then(result => {
			console.log(result);
			res.status(201).json({
			  message: "Created club successfully"
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

}
};					