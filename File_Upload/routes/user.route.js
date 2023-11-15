const express = require("express");
const { getUsers, saveUsers, upload } = require("../controllers/user.controller");
const router = express.Router();


router.get("/", getUsers)
router.post("/", upload.single("image"), saveUsers, );

module.exports = router;