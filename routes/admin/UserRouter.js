const express = require("express");
const UserController = require("../../controllers/admin/UserController");
const multer = require("multer");

const UserRouter = express.Router();

UserRouter.post("/adminapi/user/login", UserController.login);

const upload = multer({ dest: "public/avatar_uploads/" });
UserRouter.post(
  "/adminapi/user/upload",
  upload.single("file"),
  UserController.upload
);

module.exports = UserRouter;
