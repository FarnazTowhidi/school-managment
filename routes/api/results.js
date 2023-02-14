const express = require("express");
const router = express.Router();
const resultCtrl = require("../../controller/api/result");

router.post('/', resultCtrl.createResult);


module.exports = router; 