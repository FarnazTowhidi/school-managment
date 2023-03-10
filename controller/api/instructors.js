
const Instructors = require ("../../models/instructor")

async function getAllInstructors(req,res) {
  try {
    let data =  await Instructors.getAll()
    res.status(200).json(data)
  }
  catch (err)
  {
    res.status(500).json(err)
  }
} 

async function createInstructors (req, res) {
    
  try {
    console.log (req.body)
    const data = await Instructors.create (req.body)
    res.status(200).json(data)
  }
  catch (err) {
    res.status(500).json(err)
  }
  
}

module.exports = {getAllInstructors, createInstructors}