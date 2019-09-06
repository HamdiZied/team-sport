const mongoose = require('mongoose');

//Define a schema
const Schema = mongoose.Schema;

const ClubSchema = new Schema({
	name: {
		type: String,
		// trim: true,		
		required: true,
	},
	image: {
		type: String,
		// trim: true,
		required: true
	}
});

module.exports = mongoose.model('club', ClubSchema)