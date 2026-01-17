// const express = require("express");
// const router = express.Router();

// const {
//   createProject,
//   getAllProjects,
//   getProjectById,
//   updateProject,
//   deleteProject,
// } = require("../controller/ProjectController");
// const upload = require("../middleware/Upload");

// // Routes
// router.post("/createProject", upload.single("image"), createProject);
// router.get("/getAllProjects", getAllProjects);
// router.get("/getProjectById/:id", getProjectById);
// router.put("/updateProject/:id", updateProject);
// router.delete("/deleteProject/:id", deleteProject);

// module.exports = router;
const express = require("express");
const router = express.Router();
const upload = require("../middleware/Upload.js");

const {
  createProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject,
} = require("../controller/ProjectController");

router.post("/createProject", upload.single("image"), createProject);
router.get("/getAllProjects", getAllProjects);
router.get("/getProjectById/:id", getProjectById);
router.put("/updateProject/:id", upload.single("image"), updateProject);
router.delete("/deleteProject/:id", deleteProject);

module.exports = router;
