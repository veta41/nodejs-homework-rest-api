const express = require("express");
const getCurrent = require("../../controllers/getCurrent");
const ctrlWrapper = require("../../middelewares/ctrlWrapper");
const validation = require("../../middelewares/validation");
const auth = require("../../middelewares/auth");

const { joiUpdateSubscription } = require("../../models/user");
const updateUserSubscription = require("../../controllers/updateUserSubscription");
const router = express.Router();

router.get("/current", auth, ctrlWrapper(getCurrent));

router.patch(
  "/subscription",
  auth,
  validation(joiUpdateSubscription),
  ctrlWrapper(updateUserSubscription)
);

module.exports = router;
