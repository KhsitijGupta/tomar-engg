// import React, { useState } from "react";
// import {
//   MapPin,
//   Phone,
//   Mail,
//   Clock,
//   Send,
//   Linkedin,
//   Facebook,
//   Instagram,
//   Twitter,
//   MessageCircle,
// } from "lucide-react";
// import axios from "axios";
// import logo from "../../assets/logo/logo0.png";

// const ContactFormAndLocation = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     subject: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((p) => ({ ...p, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.fullName || !formData.email || !formData.message) {
//       return alert("Please fill all required fields");
//     }

//     try {
//       setLoading(true);

//       const res = await axios.post("/api/contact/addContactMessage", formData);

//       if (res.data.success) {
//         alert("Message sent successfully!");
//         setFormData({
//           fullName: "",
//           email: "",
//           phone: "",
//           subject: "",
//           message: "",
//         });
//       }
//     } catch (error) {
//       console.error(error);
//       alert("Something went wrong. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section className="w-full py-14 bg-linear-to-br from-gray-50 via-gray-100 to-gray-200">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* HEADER */}
//         <div className="text-center mb-10">
//           <h2 className="text-3xl font-bold text-primary">Contact Us</h2>
//           <div className="mx-auto mt-3 h-1 w-20 bg-red-600 rounded-lg" />
//           <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
//             Discuss your project requirements with our engineering team. We
//             respond quickly and professionally.
//           </p>
//         </div>

//         {/* MAIN GRID */}
//         <div className="grid lg:grid-cols-2 rounded-2xl overflow-hidden shadow-2xl">
//           {/* LEFT PANEL */}
//           <div
//             className="bg-linear-to-br from-[#c43232] via-[#d63f3f] to-[#f34c4c]
//                           text-white md:p-12 p-4 flex flex-col justify-between"
//           >
//             <div>
//               <img
//                 src={logo}
//                 alt="Tomar Engineering Logo"
//                 className="h-24 mb-8 brightness-0 invert"
//               />

//               <div className="space-y-8 text-sm text-white/90">
//                 <div className="flex gap-4">
//                   <MapPin />
//                   <p>
//                     Mandideep, Raisen
//                     <br />
//                     Bhopal, Madhya Pradesh
//                   </p>
//                 </div>

//                 <div className="flex gap-4">
//                   <Clock />
//                   <p>
//                     Mon–Sat: 8:00 AM – 8:00 PM
//                     <br />
//                     Sunday: 9:00 AM – 2:00 PM
//                   </p>
//                 </div>

//                 <div className="flex gap-4">
//                   <Phone />
//                   <p>+91 XXXXXXXXXX</p>
//                 </div>

//                 <div className="flex gap-4">
//                   <Mail />
//                   <p>info@tomarconstruction.com</p>
//                 </div>
//               </div>
//             </div>

//             {/* SOCIAL */}
//             <div className="mt-12">
//               <p className="mb-4 text-sm font-semibold uppercase text-white/80">
//                 Get Us On
//               </p>
//               <div className="flex gap-4">
//                 {[Linkedin, Facebook, Instagram, Twitter, MessageCircle].map(
//                   (Icon, i) => (
//                     <div
//                       key={i}
//                       className="w-11 h-11 flex items-center justify-center rounded-lg
//                                  bg-white/10 hover:bg-white hover:text-[#c43232]
//                                  transition cursor-pointer"
//                     >
//                       <Icon size={20} />
//                     </div>
//                   )
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* RIGHT FORM */}
//           <div className="bg-white p-12 ">
//             <h3 className="text-xl font-semibold mb-8">Send Us a Message</h3>

//             <form onSubmit={handleSubmit} className="space-y-6">
//               <input
//                 name="fullName"
//                 value={formData.fullName}
//                 onChange={handleChange}
//                 placeholder="Full Name *"
//                 className="w-full h-12 border px-4 rounded-md focus:ring-2 focus:ring-[#d84343]"
//               />

//               <div className="grid md:grid-cols-2 gap-4">
//                 <input
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="Email *"
//                   className="w-full h-12 border px-4 rounded-md focus:ring-2 focus:ring-[#d84343]"
//                 />
//                 <input
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   placeholder="Phone"
//                   className="w-full h-12 border px-4 rounded-md focus:ring-2 focus:ring-[#d84343]"
//                 />
//               </div>

//               <input
//                 name="subject"
//                 value={formData.subject}
//                 onChange={handleChange}
//                 placeholder="Subject"
//                 className="w-full h-12 border px-4 rounded-md focus:ring-2 focus:ring-[#d84343]"
//               />

//               <textarea
//                 name="message"
//                 rows="5"
//                 value={formData.message}
//                 onChange={handleChange}
//                 placeholder="Your Message *"
//                 className="w-full border px-4 py-3 rounded-md focus:ring-2 focus:ring-[#d84343]"
//               />

//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full h-12 bg-linear-to-r from-[#c43232] to-[#d84343]
//                            text-white font-semibold rounded-lg
//                            hover:from-black hover:to-red-600 transition
//                            flex items-center justify-center gap-2"
//               >
//                 {loading ? "Sending..." : "Send Message"}
//                 <Send size={18} />
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactFormAndLocation;
import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Linkedin,
  Facebook,
  Instagram,
  Twitter,
  MessageCircle,
} from "lucide-react";
import axios from "axios";
import logo from "../../assets/logo/logo0.png";

const ContactFormAndLocation = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) {
      return alert("Please fill all required fields");
    }

    try {
      setLoading(true);
      const res = await axios.post("/api/contact/addContactMessage", formData);
      if (res.data.success) {
        alert("Message sent successfully!");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full py-14 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Contact Us
          </h2>
          <div className="mx-auto mt-3 h-1 w-20 bg-red-600 rounded-lg" />
          <p className="mt-5 text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Discuss your project requirements with our engineering team. We
            respond quickly and professionally.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2  rounded-2xl overflow-hidden shadow-2xl">
          {/* LEFT PANEL */}
          <div
            className="bg-gradient-to-br from-[#c43232] via-[#d63f3f] to-[#f34c4c]
                          text-white p-8 md:p-12 flex flex-col justify-between"
          >
            <div>
              <img
                src={logo}
                alt="Tomar Engineering Logo"
                className="h-20 md:h-24 mb-6 md:mb-8 brightness-0 invert mx-auto lg:mx-0"
              />

              <div className="space-y-6 md:space-y-8 text-sm md:text-base text-white/90">
                <div className="flex gap-4 items-start md:items-center">
                  <MapPin size={20} />
                  <p>
                    Mandideep, Raisen
                    <br />
                    Bhopal, Madhya Pradesh
                  </p>
                </div>

                <div className="flex gap-4 items-start md:items-center">
                  <Clock size={20} />
                  <p>
                    Mon–Sat: 8:00 AM – 8:00 PM
                    <br />
                    Sunday: 9:00 AM – 2:00 PM
                  </p>
                </div>

                <div className="flex gap-4 items-center">
                  <Phone size={20} />
                  <p>+91 XXXXXXXXXX</p>
                </div>

                <div className="flex gap-4 items-center">
                  <Mail size={20} />
                  <p>info@tomarconstruction.com</p>
                </div>
              </div>
            </div>

            {/* SOCIAL */}
            <div className="mt-8 md:mt-12">
              <p className="mb-3 md:mb-4 text-sm font-semibold uppercase text-white/80 text-center lg:text-left">
                Get Us On
              </p>
              <div className="flex justify-center lg:justify-start gap-3 md:gap-4">
                {[Linkedin, Facebook, Instagram, Twitter, MessageCircle].map(
                  (Icon, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 md:w-11 md:h-11 flex items-center justify-center rounded-lg
                                 bg-white/10 hover:bg-white hover:text-[#c43232]
                                 transition cursor-pointer"
                    >
                      <Icon size={18} />
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white p-6 md:p-12">
            <h3 className="text-xl md:text-2xl font-semibold mb-6 md:mb-8 text-center md:text-left">
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <input
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name *"
                className="w-full h-10 md:h-12 border px-3 md:px-4 rounded-md focus:ring-2 focus:ring-[#d84343]"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email *"
                  className="w-full h-10 md:h-12 border px-3 md:px-4 rounded-md focus:ring-2 focus:ring-[#d84343]"
                />
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  className="w-full h-10 md:h-12 border px-3 md:px-4 rounded-md focus:ring-2 focus:ring-[#d84343]"
                />
              </div>

              <input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full h-10 md:h-12 border px-3 md:px-4 rounded-md focus:ring-2 focus:ring-[#d84343]"
              />

              <textarea
                name="message"
                rows="4 md:rows-5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message *"
                className="w-full border px-3 md:px-4 py-2 md:py-3 rounded-md focus:ring-2 focus:ring-[#d84343]"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full h-10 md:h-12 bg-gradient-to-r from-[#c43232] to-[#d84343]
                           text-white font-semibold rounded-lg
                           hover:from-black hover:to-red-600 transition
                           flex items-center justify-center gap-2"
              >
                {loading ? "Sending..." : "Send Message"}
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormAndLocation;
