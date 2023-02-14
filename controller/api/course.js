const Course = require ("../../models/course")

async function createCourse (req,res) {
    console.log (req.body)
    try {     
        const course = Course.create(req.body)
        res.status(200).json(course)
    }
    catch (error) {
        res.status(500).json(error);
    }
}

async function listCourses (req,res) {
    try {
        const data = await Course.find({})
        res.status(200).json(data)
    }
    catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {
    createCourse, 
    listCourses
}