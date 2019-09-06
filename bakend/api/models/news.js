const mongoose = require("mongoose");


//Define a schema
const Schema = mongoose.Schema;

const newsSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  image:{
    type:String,
    required:true
  }
});



module.exports = mongoose.model("new", newsSchema);
