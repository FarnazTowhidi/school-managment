const Student = require("../../models/student");

//Create student
async function createStudent(req, res) {
    try {
      const message = await Student.create(req.body);
      res.status(200).json(message);
    } catch (error) {
      
      res.status(500).json(error);
    }
  }

async function listStudent(req, res) {
  try {   
    const students = await Student.find({})
    res.status(200).json(students)
  } catch (err) {
    res.status(500).json(err)
  }
}

module.exports = {
  createStudent,
  listStudent
};
  

