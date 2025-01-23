const express = require("express");
const { authenticate, authorize } = require("../middleware/auth");
const { createBlog, assignEditor } = require("../controllers/blogController");

const router = express.Router();

router.post("/", authenticate, authorize(["Admin"]), createBlog);
router.put("/assign", authenticate, authorize(["Admin"]), assignEditor);

module.exports = router;
