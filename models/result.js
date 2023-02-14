const mongoose = require("mongoose");

const ResultSchema = new mongoose.Schema(
    {
        course_id: {
        type: String,
      },
        student_id: {
        type:String
      }, 
      score : {
        score_id:String
      }
    },
    {
      timestamps: true,
    }
  );
  
  module.exports = mongoose.model("Result", ResultSchema);