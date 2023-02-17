const express = require("express");
const router = express.Router();
const studentsCtrl = require("../../controller/api/student");

router.post('/', studentsCtrl.createStudent);
router.get('/', studentsCtrl.listStudent);
router.delete('/:id',studentsCtrl.deleteStudent )

module.exports = router; 