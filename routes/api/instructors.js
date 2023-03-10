const express = require("express");
const router = express.Router();
const instructorCtrl = require("../../controller/api/instructors");

router.get('/', instructorCtrl.getAllInstructors);
router.post('/', instructorCtrl.createInstructors);


module.exports = router; 