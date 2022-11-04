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
const contactValidationSchema = require("../../schemas/contact");

router.get("/", ctrlWrapper(getAll));

router.get("/:id", ctrlWrapper(getContactById));
router.post("/", validation(contactValidationSchema), ctrlWrapper(add));

router.delete("/:id", ctrlWrapper(removeById));

router.put(
  "/:id",
  validation(contactValidationSchema),
  ctrlWrapper(updateById)
);

module.exports = router;
