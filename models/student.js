const mongoose = require("mongoose");


const StudentSchema = new mongoose.Schema(
    {
      firstname: {
        type: String,
        required: true,
      },
      familyname: {
        type: String,
        required: true,
      },
      datebirth: {
        type: Date,
        required: true,
      }
    },
    {
      timestamps: true,
    }
  );
  //add read property
  
  module.exports = mongoose.model("Student", StudentSchema);