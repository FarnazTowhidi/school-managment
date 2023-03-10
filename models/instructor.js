const Instructors = [
  {id:1, 
   firstname: "Danielle",
   lastname:"Allen",
   description: "Danielle Susan Allen is the James Bryant Conant University Professor at Harvard University. She is also the Director of the Edmond & Lily Safra Center for Ethics. Prior to joining the faculty at Harvard in 2015, Allen was UPS Foundation Professor at the Institute for Advanced Study in Princeton, New Jersey.",
   image: "https://general-farnaztowhidi.s3.ca-central-1.amazonaws.com/danielle-allen.jpeg"
  },
  {id:2,
   firstname: "William P. ",
   lastname:"Alford",
   description: "William P. Alford is a United States legal scholar. He is currently Henry L. Stimson Professor of Law and Vice Dean for the Graduate Program and International Legal Studies at Harvard Law School. He is Director of East Asian Legal Studies at Harvard Law, and is regarded as an expert in the field of Chinese law.",
   image: "https://general-farnaztowhidi.s3.ca-central-1.amazonaws.com/alford-william.jpeg"
  },
  {id:3,
    firstname: "Anne",
    lastname:"Bayefsky",
    description: "Anne Bayefsky is a lawyer, scholar and activist who currently directs the Touro College Institute on Human Rights and the Holocaust. She is a Fox News opinion writer, and an author and editor on several websites.",
    image: "https://general-farnaztowhidi.s3.ca-central-1.amazonaws.com/anne-bayefsky.jpeg"
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
  };