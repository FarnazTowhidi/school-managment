const Instructors = [
  {id:1, 
   firstname: "Arash",
   lastname:"Habibi",
   DOB: "123456"
  },
  {id:2,
   firstname: "Mazdak",
   lastname:"Zamani",
   DOB: "123456"
  },
]

function getAll () {
  return Instructors
}

function getOne (id) {
  getOne =  Instructors.find ((id)=> {Instructor.id==id })
}

function deleteOne (id) {
  Instructors.find((id)=>Instructors.id != id)
}

function create (instructor) {
  instructor.id="12"
  Instructors.push (instructor)
  
}

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
  update
};