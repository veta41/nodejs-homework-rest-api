const express = require("express");
const {
  register,
  login,
  logout,
  getCurrent,
  updateUserSubscription,
  updateAvatar,
} = require("../../controllers/users");
const auth = require("../../middelewares/auth");
const ctrlWrapper = require("../../middelewares/ctrlWrapper");
const validation = require("../../middelewares/validation");
const upload = require("../../middelewares/upload");
const resize = require("../../middelewares/resize");

const { joiRegisterSchema, joiLoginSchema } = require("../../models/user");
const { joiUpdateSubscription } = require("../../models/user");
const router = express.Router();

router.post("/signup", validation(joiRegisterSchema), ctrlWrapper(register));

router.post("/login", validation(joiLoginSchema), ctrlWrapper(login));

router.get("/logout", auth, ctrlWrapper(logout));

router.get("/current", auth, ctrlWrapper(getCurrent));

router.patch(
  "/subscription",
  auth,
  validation(joiUpdateSubscription),
  ctrlWrapper(updateUserSubscription)
);

router.patch(
  "/avatars",
  auth,
  upload.single("avatar"),
  resize,
  ctrlWrapper(updateAvatar)
);

module.exports = router;
