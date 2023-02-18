
const Instructors = require ("../../models/result")

async function getAllInstructors(req,res) {
  console.log ("test")
  try {

    const data =  await Instructors.getAll()
    res.status(200).json(data)
  }
  catch (err)
  {
    res.status(500).json(err)
  }

} 

module.exports = {getAllInstructors}