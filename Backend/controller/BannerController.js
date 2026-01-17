const sharp = require("sharp");
const fs = require("fs");
const path = require("path");
const Banner = require("../model/Banner");

// Ensure uploads folder exists
const uploadDir = path.join("uploads", "banner");

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res
        .status(400)
        .json({ success: false, message: "Banner required" });
    }

    const { order } = req.body;

    const filename = `${Date.now()}.webp`;
    const filepath = path.join(uploadDir, filename);

    // Sharp processing
    await sharp(req.file.buffer)
      .resize(1200) // max width 1200px
      .webp({ quality: 80 }) // compress
      .toFile(filepath);

    const banner = new Banner({
      imageUrl: `/uploads/banner/${filename}`,
      order: order || 0,
    });
    await banner.save();

    res.status(201).json({
      success: true,
      message: "Banner uploaded & optimized",
      banner,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Upload failed" });
  }
};
// GET - Fetch Images (order wise)
const getImages = async (req, res) => {
  try {
    const images = await Banner.find().sort({ order: 1 });
    res.status(200).json({ success: true, images });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch images" });
  }
};

const deleteBanner = async (req, res) => {
  try {
    const { id } = req.params;

    const banner = await Banner.findById(id);
    if (!banner) {
      return res.status(404).json({
        success: false,
        message: "Banner not found",
      });
    }

    // Extract file path from imageUrl
    const imagePath = path.join(
      process.cwd(),
      banner.imageUrl.replace("/", "")
    );

    // Delete image from uploads folder
    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }

    // Delete banner from DB
    await Banner.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Banner deleted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to delete banner",
    });
  }
};
const reorderBanners = async (req, res) => {
  try {
    const { banners } = req.body;

    if (!Array.isArray(banners)) {
      return res.status(400).json({
        success: false,
        message: "Invalid banner data",
      });
    }

    const bulkOps = banners.map((b) => ({
      updateOne: {
        filter: { _id: b._id },
        update: { $set: { order: b.order } },
      },
    }));

    await Banner.bulkWrite(bulkOps);

    res.status(200).json({
      success: true,
      message: "Banner order updated successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to reorder banners",
    });
  }
};

module.exports = { uploadImage, getImages, deleteBanner, reorderBanners };
