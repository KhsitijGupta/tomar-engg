import React, { useEffect, useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import axios from "axios";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const API_BASE = "/api/project";

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState({
    projectName: "",
    date: "",
    description: "",
    location: "",
    image: null,
  });
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  /* ================= FETCH PROJECTS ================= */
  const fetchProjects = async () => {
    try {
      const res = await axios.get(`${API_BASE}/getAllProjects`);
      setProjects(res.data.data);
    } catch (error) {
      console.error("Failed to fetch projects", error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  /* ================= HANDLE INPUT ================= */
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") setFormData({ ...formData, image: files[0] });
    else setFormData({ ...formData, [name]: value });
  };

  /* ================= CREATE / UPDATE ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = new FormData();
      data.append("projectName", formData.projectName);
      data.append("date", formData.date);
      data.append("description", formData.description);
      data.append("location", formData.location); // ✅ Add location
      if (formData.image) data.append("image", formData.image);

      if (editId) {
        await axios.put(`${API_BASE}/updateProject/${editId}`, data);
        Swal.fire({
          icon: "success",
          title: "Updated!",
          text: "Project has been updated successfully.",
          timer: 2000,
          showConfirmButton: false,
        });
      } else {
        await axios.post(`${API_BASE}/createProject`, data);
        Swal.fire({
          icon: "success",
          title: "Created!",
          text: "Project has been created successfully.",
          timer: 2000,
          showConfirmButton: false,
        });
      }

      resetForm();
      fetchProjects();
      setModalOpen(false);
    } catch (error) {
      console.error("Error saving project", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to save project.",
      });
    } finally {
      setLoading(false);
    }
  };

  /* ================= EDIT ================= */
  const handleEdit = (project) => {
    setEditId(project._id);
    setFormData({
      projectName: project.projectName,
      date: project.date.split("T")[0],
      description: project.description,
      location: project.location, // ✅ Populate location
      image: null,
    });
    setModalOpen(true);
  };

  /* ================= DELETE ================= */
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`${API_BASE}/deleteProject/${id}`);
          fetchProjects();
          Swal.fire("Deleted!", "Project has been deleted.", "success");
        } catch (error) {
          Swal.fire("Error!", "Failed to delete project.", "error");
        }
      }
    });
  };

  /* ================= RESET ================= */
  const resetForm = () => {
    setEditId(null);
    setFormData({
      projectName: "",
      date: "",
      description: "",
      location: "", // ✅ Reset location
      image: null,
    });
  };

  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3 sm:gap-0">
        <h2 className="text-2xl font-bold">Projects</h2>
        <button
          onClick={() => setModalOpen(true)}
          className="bg-red-500 text-white font-semibold px-4 py-2 rounded shadow hover:bg-red-600 transition w-full sm:w-auto"
        >
          + Add Project
        </button>
      </div>

      {/* ================= PROJECT LIST ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project._id}
            className="relative rounded-lg shadow-md overflow-hidden hover:shadow-xl transition bg-white"
          >
            <img
              src={project.image}
              alt={project.projectName}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{project.projectName}</h3>
              <p className="text-sm text-gray-500">
                {new Date(project.date).toDateString()}
              </p>
              <p className="text-sm mt-1 font-medium">Location: {project.location}</p>
              <p className="text-sm mt-2">{project.description}</p>

              {/* Edit/Delete icons at bottom-right */}
              <div className="absolute bottom-3 right-3 flex gap-3">
                <button
                  onClick={() => handleEdit(project)}
                  className="text-blue-600 hover:text-blue-800"
                  title="Edit Project"
                >
                  <FiEdit size={20} />
                </button>
                <button
                  onClick={() => handleDelete(project._id)}
                  className="text-red-600 hover:text-red-800"
                  title="Delete Project"
                >
                  <FiTrash2 size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ================= MODAL FORM ================= */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30 p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full sm:max-w-md md:max-w-lg p-6 sm:p-8 relative animate-fadeIn">
            <button
              onClick={() => {
                setModalOpen(false);
                resetForm();
              }}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl font-bold"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-6 text-center">
              {editId ? "Edit Project" : "Create Project"}
            </h2>

            <form
              onSubmit={handleSubmit}
              encType="multipart/form-data"
              className="space-y-4"
            >
              <input
                type="text"
                name="projectName"
                placeholder="Project Name"
                value={formData.projectName}
                onChange={handleChange}
                required
                className="p-3 rounded-lg w-full shadow-sm focus:ring-2 focus:ring-blue-400 outline-none"
              />
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="p-3 rounded-lg w-full shadow-sm focus:ring-2 focus:ring-blue-400 outline-none"
              />
              <input
                type="text"
                name="location" // ✅ Add location input
                placeholder="Location"
                value={formData.location}
                onChange={handleChange}
                required
                className="p-3 rounded-lg w-full shadow-sm focus:ring-2 focus:ring-blue-400 outline-none"
              />
              <textarea
                name="description"
                placeholder="Project Description"
                value={formData.description}
                onChange={handleChange}
                required
                className="p-3 rounded-lg w-full shadow-sm focus:ring-2 focus:ring-blue-400 outline-none"
                rows="5"
              />
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleChange}
                className="mb-4"
              />

              <div className="flex flex-col sm:flex-row justify-end gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setModalOpen(false);
                    resetForm();
                  }}
                  className="bg-gray-500 text-white px-5 py-2 rounded-lg hover:bg-gray-600 transition w-full sm:w-auto"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition w-full sm:w-auto"
                >
                  {loading ? "Saving..." : editId ? "Update" : "Create"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
