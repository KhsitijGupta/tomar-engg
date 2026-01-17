// const mongoose = require("mongoose");

// const projectSchema = new mongoose.Schema(
//   {
//     projectName: {
//       type: String,
//       required: true,
//       trim: true,
//     },

//     date: {
//       type: Date,
//       required: true,
//     },

//     description: {
//       type: String,
//       required: true,
//       trim: true,
//     },

//     image: {
//       type: String, // image URL or filename
//       required: true,
//     },
//   },
//   {
//     timestamps: true, // createdAt, updatedAt
//   }
// );

// module.exports = mongoose.model("Project", projectSchema);


const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    projectName: {
      type: String,
      required: true,
      trim: true,
    },

    date: {
      type: Date,
      required: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    image: {
      type: String, // image URL or filename
      required: true,
    },

    location: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true, // createdAt, updatedAt
  }
);

module.exports = mongoose.model("Project", projectSchema);
