const mongoose = require('mongoose');

//Define a schema
const Schema = mongoose.Schema;

const articleSchema = new Schema({
	name: {
		type: String,
		trim: true,		
		required: true,
    },
    price: {
		type: Number,
		trim: true,
		required: true
    },
    image: {
		type: String,
		required:true
    },
  
});

module.exports = mongoose.model('article', articleSchema)