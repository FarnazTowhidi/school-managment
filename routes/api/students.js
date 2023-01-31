const express = require("express");
const router = express.Router();
const studentsCtrl = require("../../controller/api/student");

router.post('/', studentsCtrl.createStudent);
router.get('/', studentsCtrl.listStudent);

module.exports = router; 