const express = require("express");
const router = express.Router();
const {
  blogList,
  blogDetail,
  blogCreate,
  blogUpdate,
  blogDelete,
} = require("../controllers/blogController");

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});

// const validateToken = require("../middleware/validateJwtToken");
// router.use(validateToken);

// Get contacts
router.get("/", blogList);

// Get a contact
router.get("/:id", blogDetail);

// Create new contact
router.post("/", blogCreate);

// Update contact
router.put("/:id", blogUpdate);

router.delete("/:id", blogDelete);

module.exports = router;
