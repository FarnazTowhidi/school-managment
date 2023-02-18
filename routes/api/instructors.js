const express = require("express");
const router = express.Router();
const instructorCtrl = require("../../controller/api/instructors");

router.get('/', instructorCtrl.getAllInstructors);


module.exports = router; 