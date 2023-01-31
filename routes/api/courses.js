// const express = require("express");
// const router = express.Router();
// const courseCtrl = require("../../controsfller/api/course");

// router.post('/', courseCtrl.createCourse);

// module.exports = router; 


const express = require("express");
const router = express.Router();
const studentsCtrl = require("../../contrsfdfoller/api/student");

router.post('/', studentsCtrl.createStudent);
router.get('/', studentsCtrl.listStudent);

module.exports = router; 