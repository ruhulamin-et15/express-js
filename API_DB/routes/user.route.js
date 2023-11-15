const express = require("express");
const router = express.Router();

const {getAllUsers, getOneUser, createUser, updateUser, deleteUser} = require("../controllers/user.controller");

router.get("/" , getAllUsers );
router.get("/:id" , getOneUser );
router.post("/" , createUser );
router.patch("/" , updateUser );
router.delete("/" , deleteUser );

module.exports = router;