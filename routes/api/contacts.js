const express = require("express");
const router = express.Router();
const {
  getAll,
  getContactById,
  add,
  removeById,
  updateById,
} = require("../../controllers/contacts");
const ctrlWrapper = require("../../middelewares/ctrlWrapper");
const validation = require("../../middelewares/validation");
const conactSchema = require("../../schemas/contact");

const validateMiddleware = validation(conactSchema);

router.get("/", ctrlWrapper(getAll));

router.get("/:id", ctrlWrapper(getContactById));
router.post("/", validateMiddleware, ctrlWrapper(add));

router.delete("/:id", ctrlWrapper(removeById));

router.put("/:id", validateMiddleware, ctrlWrapper(updateById));

module.exports = router;
