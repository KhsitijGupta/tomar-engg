import { useEffect, useState } from "react";
import axios from "axios";
import { Trash2, Upload, Plus, X } from "lucide-react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

const BannerManager = () => {
  const [banners, setBanners] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showUploadForm, setShowUploadForm] = useState(false);

  /* ================= FETCH BANNERS ================= */
  const fetchBanners = async () => {
    try {
      const { data } = await axios.get("/api/banner/getImages");
      const sorted = (data.images || []).sort((a, b) => a.order - b.order);
      setBanners(sorted);
    } catch (error) {
      console.error("Fetch failed:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBanners();
  }, []);

  /* ================= FILE CHANGE ================= */
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  /* ================= UPLOAD ================= */
  const handleUpload = async () => {
    if (!selectedFile) return alert("Please select image");

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const { data } = await axios.post("/api/banner/uploadImage", formData);
      setBanners((prev) => [...prev, data.banner]);
      setShowUploadForm(false);
      setSelectedFile(null);
      setPreviewUrl(null);
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };

  /* ================= DELETE ================= */
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this banner?")) return;

    try {
      await axios.delete(`/api/banner/deleteBanner/${id}`);
      setBanners((prev) => prev.filter((b) => b._id !== id));
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  /* ================= DRAG & DROP ================= */
  const handleDragEnd = async (result) => {
    if (!result.destination) return;

    const items = Array.from(banners);
    const [moved] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, moved);

    const reordered = items.map((b, i) => ({
      ...b,
      order: i,
    }));

    setBanners(reordered);

    try {
      await axios.post("/api/banner/reorder", {
        banners: reordered.map((b) => ({
          _id: b._id,
          order: b.order,
        })),
      });
    } catch (error) {
      console.error("Reorder save failed:", error);
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Banner <span className="text-amber-500">Manager</span>
        </h2>

        <button
          onClick={() => setShowUploadForm(true)}
          className="flex items-center gap-2 px-4 py-2 bg-white text-amber-500 border border-amber-500 rounded-lg font-semibold hover:bg-gradient-to-br hover:from-[#ff5954] hover:via-[#a73c3c] hover:to-[#31155a] hover:text-white hover:border-none"
        >
          <Plus size={16} />
          Add Banner
        </button>
      </div>

      {/* Upload Modal */}
      {showUploadForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-md relative">
            <button
              onClick={() => setShowUploadForm(false)}
              className="absolute top-4 right-4 text-amber-500"
            >
              <X size={20} />
            </button>

            <h2 className="text-xl font-bold mb-4 border-b pb-2">
              Upload Banner
            </h2>

            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-lg file:border-0
              file:bg-amber-50 file:text-amber-600
              hover:file:bg-amber-100"
            />

            {previewUrl && (
              <img
                src={previewUrl}
                alt="Preview"
                className="mt-4 w-full rounded-lg shadow"
              />
            )}

            <button
              onClick={handleUpload}
              className="mt-4 w-full px-4 py-2 rounded-lg bg-gradient-to-br from-[#ff5954] via-[#a73c3c] to-[#31155a] text-white font-semibold flex items-center justify-center gap-2"
            >
              <Upload size={16} />
              Upload
            </button>
          </div>
        </div>
      )}

      {/* Grid + Drag */}
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="banners" direction="horizontal">
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6"
            >
              {loading ? (
                <p className="col-span-full text-center text-gray-500">
                  Loading banners...
                </p>
              ) : banners.length === 0 ? (
                <p className="col-span-full text-center text-gray-500">
                  No banners found
                </p>
              ) : (
                banners.map((banner, index) => (
                  <Draggable
                    key={banner._id}
                    draggableId={banner._id}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="relative rounded-xl overflow-hidden shadow-lg group hover:scale-105 transition"
                      >
                        <img
                          src={banner.imageUrl}
                          alt="Banner"
                          className="w-full h-52 object-contain bg-red-100"
                        />

                        <button
                          onClick={() => handleDelete(banner._id)}
                          className="absolute top-2 right-2 bg-red-600 text-white p-1 rounded"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    )}
                  </Draggable>
                ))
              )}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default BannerManager;
