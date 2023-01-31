const Course = require ("../../models/course")

async function createCourse (req,res) {
    console.log ("controller")
    try {
        
        const course = Course.create(req.body)
        res.status(200).json(message)
    }
    catch (error) {
        res.status(500).json(error);
    }
}

module.exports = {
    createCourse
}