var express = require("express");
var router = express.Router();
var note = require("../models/Notes");

router.post("/", async function (req, res, next) {
  console.log(req.body);
  const title = req.body.title;
  const content = req.body.content;
  let date = new Date();

  date =
    date.getFullYear() +
    "-" +
    (date.getMonth() + 1) +
    "-" +
    date.getDate() +
    " " +
    date.getHours() +
    ":" +
    date.getMinutes() +
    ":" +
    date.getSeconds();

  console.log(date);

  let result = await note.addNote(title, content, date);
});

module.exports = router;
