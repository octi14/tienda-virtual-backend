const express = require("express")
const router = express.Router()
const shop = require("../controller/shop.controller");

// /api/blog: GET, POST, DELETE
// /api/blog/:id: GET, PUT, DELETE
// /api/blog/published: GET

// Create a new blog
router.post("/", shop.create);

// Retrieve all blog
router.get("/", shop.findAll);

// Retrieve all published blog
router.get("/published", shop.findAllPublished);

// Retrieve a single blog with id
router.get("/:id", shop.findOne);

// Update a Tutorial with id
router.put("/:id", shop.update);

// Delete a Tutorial with id
router.delete("/:id", shop.delete);

// Create a new Tutorial
router.delete("/", shop.deleteAll);

module.exports = router