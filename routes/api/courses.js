const express = require("express");
const router = express.Router();
const courseCtrl = require("../../controller/api/course");

router.post('/', courseCtrl.createCourse);
router.get('/', courseCtrl.listCourses);

module.exports = router; 

