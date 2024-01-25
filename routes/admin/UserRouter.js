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

UserRouter.post(
  "/adminapi/user/add",
  upload.single("file"),
  UserController.add
);

UserRouter.delete("/adminapi/user/list/:id", UserController.delete);

UserRouter.put(
  "/adminapi/user/list/:id",
  upload.single("file"),
  UserController.put
);

UserRouter.get("/adminapi/user/list", UserController.getList);

module.exports = UserRouter;
