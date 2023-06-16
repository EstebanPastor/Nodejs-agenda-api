const express = require("express");
const router = express.Router();
const {
  getContacts,
  createContact,
  getOneContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactController.js");
const validateToken = require("../middlewares/validateTokenHandler.js");

router.route("/").get(getContacts).post(createContact);

router.use(validateToken);
router
  .route("/:id")
  .get(getOneContact)
  .put(updateContact)
  .delete(deleteContact);

module.exports = router;
