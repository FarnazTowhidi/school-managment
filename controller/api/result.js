const Course = require ("../../models/result")

async function createResult (req,res) {
    console.log (req.body)
    try {     
        const course = Course.create(req.body)
        res.status(200).json(course)
    }
    catch (error) {
        res.status(500).json(error);
    }
}


module.exports = {
    createResult
}