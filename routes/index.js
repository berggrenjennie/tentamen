const express = require('express')
const router = express.Router()

const listing = require('./listing.js')

// router.get("/listings", listing.get);
// router.get("/listings/:_id", listing.getById);
router.get("/listings/:city", listing.getPostByCity);
router.post("/listings", listing.post);
router.put("/listings/:_id", listing.put);
router.delete("/listings/:_id", listing.deleteing);

module.exports = router
