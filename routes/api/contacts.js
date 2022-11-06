const express = require("express");
const router = express.Router();
const {
  getAll,
  getContactById,
  add,
  removeById,
  updateById,
  updateStatusContact,
} = require("../../controllers/contacts");

const ctrlWrapper = require("../../middelewares/ctrlWrapper");
const validation = require("../../middelewares/validation");
const {
  contactSchemaValidation,
  updateFavoriteSchema,
} = require("../../schemas/contact");

router.get("/", ctrlWrapper(getAll));

router.get("/:id", ctrlWrapper(getContactById));
router.post("/", validation(contactSchemaValidation), ctrlWrapper(add));

router.delete("/:id", ctrlWrapper(removeById));

router.put(
  "/:id",
  validation(contactSchemaValidation),
  ctrlWrapper(updateById)
);

router.patch(
  "/:id/favorite",
  validation(updateFavoriteSchema),
  ctrlWrapper(updateStatusContact)
);

module.exports = router;
