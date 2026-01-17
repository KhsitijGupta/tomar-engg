// const Project = require("../model/Project");
// const fs = require("fs");
// const path = require("path");
// // Ensure uploads folder exists
// const uploadDir = path.join("uploads", "projects");

// if (!fs.existsSync(uploadDir)) {
//   fs.mkdirSync(uploadDir, { recursive: true });
// }
// /**
//  * @desc   Create new project (with image)
//  * @route  POST /api/projects
//  */
// module.exports.createProject = async (req, res) => {
//   try {
//     const { projectName, date, description } = req.body;

//     if (!projectName || !date || !description || !req.file) {
//       return res.status(400).json({
//         success: false,
//         message: "All fields including image are required",
//       });
//     }

//     const project = await Project.create({
//       projectName,
//       date,
//       description,
//       image: `/uploads/projects/${req.file.filename}`,
//     });

//     res.status(201).json({
//       success: true,
//       message: "Project created successfully",
//       data: project,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// /**
//  * @desc   Update project (optional image)
//  * @route  PUT /api/projects/:id
//  */
// module.exports.updateProject = async (req, res) => {
//   try {
//     const updateData = { ...req.body };

//     if (req.file) {
//       updateData.image = `/uploads/projects/${req.file.filename}`;
//     }

//     const project = await Project.findByIdAndUpdate(req.params.id, updateData, {
//       new: true,
//       runValidators: true,
//     });

//     if (!project) {
//       return res.status(404).json({
//         success: false,
//         message: "Project not found",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       message: "Project updated successfully",
//       data: project,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// /**
//  * @desc   Get all projects
//  * @route  GET /api/projects
//  */
// module.exports.getAllProjects = async (req, res) => {
//   try {
//     const projects = await Project.find().sort({ createdAt: -1 });

//     res.status(200).json({
//       success: true,
//       count: projects.length,
//       data: projects,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "Failed to fetch projects",
//       error: error.message,
//     });
//   }
// };

// /**
//  * @desc   Get single project
//  * @route  GET /api/projects/:id
//  */
// module.exports.getProjectById = async (req, res) => {
//   try {
//     const project = await Project.findById(req.params.id);

//     if (!project) {
//       return res.status(404).json({
//         success: false,
//         message: "Project not found",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       data: project,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "Failed to fetch project",
//       error: error.message,
//     });
//   }
// };

// /**
//  * @desc   Delete project
//  * @route  DELETE /api/projects/:id
//  */
// module.exports.deleteProject = async (req, res) => {
//   try {
//     const project = await Project.findByIdAndDelete(req.params.id);

//     if (!project) {
//       return res.status(404).json({
//         success: false,
//         message: "Project not found",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       message: "Project deleted successfully",
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "Failed to delete project",
//       error: error.message,
//     });
//   }
// };



// const sharp = require("sharp");
// const fs = require("fs");
// const path = require("path");
// const Project = require("../model/Project");

// // Ensure uploads folder exists
// const uploadDir = path.join("uploads", "projects");

// if (!fs.existsSync(uploadDir)) {
//   fs.mkdirSync(uploadDir, { recursive: true });
// }

// /**
//  * CREATE PROJECT (with image)
//  */
// module.exports.createProject = async (req, res) => {
//   try {
//     const { projectName, date, description } = req.body;
//     console.log(req);
//     if (!projectName || !date || !description || !req.file) {
//       return res.status(400).json({
//         success: false,
//         message: "All fields including image are required",
//       });
//     }

//     const filename = `${Date.now()}.webp`;
//     const filepath = path.join(uploadDir, filename);

//     // 🔹 Sharp optimization
//     await sharp(req.file.buffer)
//       .resize(1000) // max width
//       .webp({ quality: 80 })
//       .toFile(filepath);

//     const project = await Project.create({
//       projectName,
//       date,
//       description,
//       image: `/uploads/projects/${filename}`,
//     });

//     res.status(201).json({
//       success: true,
//       message: "Project created successfully",
//       data: project,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({
//       success: false,
//       message: "Project creation failed",
//     });
//   }
// };

// /**
//  * UPDATE PROJECT (optional image)
//  */
// module.exports.updateProject = async (req, res) => {
//   try {
//     const project = await Project.findById(req.params.id);
//     if (!project) {
//       return res.status(404).json({
//         success: false,
//         message: "Project not found",
//       });
//     }

//     const updateData = { ...req.body };

//     if (req.file) {
//       // delete old image
//       const oldPath = path.join(process.cwd(), project.image.replace("/", ""));
//       if (fs.existsSync(oldPath)) {
//         fs.unlinkSync(oldPath);
//       }

//       const filename = `${Date.now()}.webp`;
//       const filepath = path.join(uploadDir, filename);

//       await sharp(req.file.buffer)
//         .resize(1000)
//         .webp({ quality: 80 })
//         .toFile(filepath);

//       updateData.image = `/uploads/projects/${filename}`;
//     }

//     const updatedProject = await Project.findByIdAndUpdate(
//       req.params.id,
//       updateData,
//       { new: true, runValidators: true },
//     );

//     res.status(200).json({
//       success: true,
//       message: "Project updated successfully",
//       data: updatedProject,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({
//       success: false,
//       message: "Project update failed",
//     });
//   }
// };

// /**
//  * GET ALL PROJECTS
//  */
// module.exports.getAllProjects = async (req, res) => {
//   try {
//     const projects = await Project.find().sort({ createdAt: -1 });
//     res.status(200).json({ success: true, data: projects });
//   } catch (error) {
//     res.status(500).json({ success: false, message: "Fetch failed" });
//   }
// };

// /**
//  * GET SINGLE PROJECT
//  */
// module.exports.getProjectById = async (req, res) => {
//   try {
//     const project = await Project.findById(req.params.id);
//     if (!project) {
//       return res
//         .status(404)
//         .json({ success: false, message: "Project not found" });
//     }
//     res.status(200).json({ success: true, data: project });
//   } catch (error) {
//     res.status(500).json({ success: false, message: "Fetch failed" });
//   }
// };

// /**
//  * DELETE PROJECT
//  */
// module.exports.deleteProject = async (req, res) => {
//   try {
//     const project = await Project.findById(req.params.id);
//     if (!project) {
//       return res
//         .status(404)
//         .json({ success: false, message: "Project not found" });
//     }

//     const imagePath = path.join(process.cwd(), project.image.replace("/", ""));
//     if (fs.existsSync(imagePath)) {
//       fs.unlinkSync(imagePath);
//     }

//     await project.deleteOne();

//     res.status(200).json({
//       success: true,
//       message: "Project deleted successfully",
//     });
//   } catch (error) {
//     res.status(500).json({ success: false, message: "Delete failed" });
//   }
// };


const sharp = require("sharp");
const fs = require("fs");
const path = require("path");
const Project = require("../model/Project");

// Ensure uploads folder exists
const uploadDir = path.join("uploads", "projects");

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

/**
 * CREATE PROJECT (with image)
 */
module.exports.createProject = async (req, res) => {
  try {
    const { projectName, date, description, location } = req.body;

    if (!projectName || !date || !description || !location || !req.file) {
      return res.status(400).json({
        success: false,
        message: "All fields including image and location are required",
      });
    }

    const filename = `${Date.now()}.webp`;
    const filepath = path.join(uploadDir, filename);

    // 🔹 Sharp optimization
    await sharp(req.file.buffer)
      .resize(1000) // max width
      .webp({ quality: 80 })
      .toFile(filepath);

    const project = await Project.create({
      projectName,
      date,
      description,
      location,
      image: `/uploads/projects/${filename}`,
    });

    res.status(201).json({
      success: true,
      message: "Project created successfully",
      data: project,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Project creation failed",
    });
  }
};

/**
 * UPDATE PROJECT (optional image)
 */
module.exports.updateProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    const updateData = { ...req.body }; // this can include projectName, date, description, location

    if (req.file) {
      // delete old image
      const oldPath = path.join(process.cwd(), project.image.replace("/", ""));
      if (fs.existsSync(oldPath)) {
        fs.unlinkSync(oldPath);
      }

      const filename = `${Date.now()}.webp`;
      const filepath = path.join(uploadDir, filename);

      await sharp(req.file.buffer)
        .resize(1000)
        .webp({ quality: 80 })
        .toFile(filepath);

      updateData.image = `/uploads/projects/${filename}`;
    }

    const updatedProject = await Project.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );

    res.status(200).json({
      success: true,
      message: "Project updated successfully",
      data: updatedProject,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Project update failed",
    });
  }
};

/**
 * GET ALL PROJECTS
 */
module.exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: projects });
  } catch (error) {
    res.status(500).json({ success: false, message: "Fetch failed" });
  }
};

/**
 * GET SINGLE PROJECT
 */
module.exports.getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res
        .status(404)
        .json({ success: false, message: "Project not found" });
    }
    res.status(200).json({ success: true, data: project });
  } catch (error) {
    res.status(500).json({ success: false, message: "Fetch failed" });
  }
};

/**
 * DELETE PROJECT
 */
module.exports.deleteProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res
        .status(404)
        .json({ success: false, message: "Project not found" });
    }

    const imagePath = path.join(process.cwd(), project.image.replace("/", ""));
    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }

    await project.deleteOne();

    res.status(200).json({
      success: true,
      message: "Project deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Delete failed" });
  }
};
