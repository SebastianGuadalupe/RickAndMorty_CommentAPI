const express = require("express");
const router = express.Router();
const characterCommentController = require("./controller/characterCommentController");

router.get("/character/:id/comments", characterCommentController.index);
router.post("/character/:id/comments", characterCommentController.store);

module.exports = router;
