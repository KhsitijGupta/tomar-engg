const express = require("express");
const router = express.Router();

const upload = require("../middleware/Upload.js");
const {
  uploadImage,
  getImages,
  deleteBanner,
  reorderBanners,
} = require("../controller/BannerController.js");

// Upload image
router.post("/uploadImage", upload.single("image"), uploadImage);

// Get images (order wise)
router.get("/getImages", getImages);
router.post("/reorder", reorderBanners);

router.delete("/deleteBanner/:id", deleteBanner);

module.exports = router;
