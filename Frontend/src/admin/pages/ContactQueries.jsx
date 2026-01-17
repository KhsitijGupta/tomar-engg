import { useEffect, useState } from "react";
import axios from "axios";
import { Trash2, Mail, Phone, Eye } from "lucide-react";

const ContactQueries = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMessage, setSelectedMessage] = useState(null);

  /* ================= FETCH ================= */
  const fetchContacts = async () => {
    try {
      const { data } = await axios.get("/api/contact/getContactMessages");
      setMessages(data.messages || []);
    } catch (error) {
      console.error(error);
      alert("Failed to fetch contact queries");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  /* ================= DELETE ================= */
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this message permanently?")) return;

    try {
      await axios.delete(`/api/contact/deleteContactMessage/${id}`);
      setMessages((prev) => prev.filter((m) => m._id !== id));
    } catch (error) {
      console.error(error);
      alert("Delete failed");
    }
  };

  return (
    <div className="">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900">
          Contact <span className="text-red-500">Queries</span>
        </h2>
        <p className="text-gray-500 mt-1">
          Messages submitted through contact form
        </p>
      </div>

      {/* Loading */}
      {loading && (
        <div className="text-center py-20 text-gray-500">
          Loading contact messages...
        </div>
      )}

      {/* Empty */}
      {!loading && messages.length === 0 && (
        <div className="text-center py-20 text-gray-500">
          No contact queries available
        </div>
      )}

      {/* Table Card */}
      {!loading && messages.length > 0 && (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-red-500 text-white">
              <tr>
                <th className="px-2 py-4 text-left ">S.No.</th>
                <th className="px-6 py-4 text-left">User</th>
                <th className="px-6 py-4 text-left">Contact</th>
                <th className="px-6 py-4 text-left">Subject</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {messages.map((m, idx) => (
                <tr
                  key={m._id}
                  className="border-t hover:bg-gray-50 transition"
                >
                  {/* User */}
                  <td className="px-2 py-4">{idx + 1}</td>
                  <td className="px-6 py-4">
                    <p className="font-semibold text-gray-900">{m.fullName}</p>
                    <p className="text-xs text-gray-500">{m.email}</p>
                  </td>

                  {/* Contact */}
                  <td className="px-6 py-4 space-y-1">
                    {/* <div className="flex items-center gap-2 text-gray-600">
                      <Mail size={14} />
                      {m.email}
                    </div> */}
                    <div className="flex items-center gap-2 text-gray-600">
                      <Phone size={14} />
                      {m.phone || "-"}
                    </div>
                  </td>

                  {/* Subject */}
                  <td className="px-6 py-4">{m.subject || "—"}</td>

                  {/* Date */}
                  <td className="px-6 py-4 text-gray-500">
                    {new Date(m.createdAt).toLocaleDateString()}
                  </td>

                  {/* Actions */}
                  <td className="px-6 py-4 text-center space-x-3">
                    <button
                      onClick={() => setSelectedMessage(m)}
                      className="inline-flex items-center gap-1 text-blue-600 hover:underline"
                    >
                      <Eye size={16} />
                      View
                    </button>

                    <button
                      onClick={() => handleDelete(m._id)}
                      className="inline-flex items-center gap-1 text-red-600 hover:text-red-800"
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* VIEW MESSAGE MODAL */}
      {selectedMessage && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white max-w-xl w-full rounded-2xl shadow-xl p-6 relative">
            <h3 className="text-xl font-bold mb-1 text-gray-900">
              {selectedMessage.subject || "Contact Message"}
            </h3>

            <p className="text-sm text-gray-500 mb-4">
              From {selectedMessage.fullName} • {selectedMessage.email}
            </p>

            <div className="bg-gray-50 p-4 rounded-lg text-gray-800 whitespace-pre-line">
              {selectedMessage.message}
            </div>

            <div className="mt-6 text-right">
              <button
                onClick={() => setSelectedMessage(null)}
                className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-black"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactQueries;
