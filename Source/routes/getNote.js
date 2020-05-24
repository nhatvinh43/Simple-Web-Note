var express = require("express");
var router = express.Router();
var note = require("../models/Notes");
var mmt = require("moment");

router.get("/", async function (req, res, next) {
  var result = await note.getAll();

  console.log(result);
  for (var i = 0; i < result.length; i++) {
    result[i].noteDate = mmt(result[i].noteDate).format("YYYY-MM-DD hh:mm:ss");
  }
  res.send(result);
});

module.exports = router;
