const mongoose = require("mongoose");


const CourseSchema = new mongoose.Schema(
    {
        courseName: {
        type: String,
        required: true,
      },
      courseDetails: {
        type:String, 
        required : true
      }
      
    },
    {
      timestamps: true,
    }
  );
  //add read property
  
  module.exports = mongoose.model("Course", CourseSchema);