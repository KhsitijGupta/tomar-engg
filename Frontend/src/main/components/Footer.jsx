import logo from "../../assets/logo/logo0.png";
import { Link, useNavigate } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="mx-4 sm:mx-[10%] py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <img
            onClick={() => navigate("/")}
            className="w-35 cursor-pointer bg-white p-1 rounded-xl"
            src={logo}
            alt="logo"
          />
          <p className="text-sm leading-relaxed mt-3">
            Delivering high-quality steel structures and industrial sheds with
            precision engineering, durable materials, and on-time execution.
          </p>


          {/* Social Media */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-secondary transition">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-secondary transition">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-secondary transition">
              <Linkedin size={20} />
            </a>
            <a href="#" className="hover:text-secondary transition">
              <Twitter size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-secondary mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-secondary">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about-us" className="hover:text-secondary">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/products-services" className="hover:text-secondary">
                Products & Services
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-secondary">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-secondary">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-secondary mb-4">
            Our Services
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Pre-Engineered Steel Buildings (PEB)</li>
            <li>Industrial & Commercial Steel Sheds</li>
            <li>Structural Steel Fabrication & Installation</li>
            <li>Warehouse & Factory Structures</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-secondary mb-4">
            Contact Us
          </h3>
          <ul className="space-y-2 text-sm">
            <li>📍 Mandideep, Madhya Pradesh</li>
            <li>📞 +91 9XXXXXXXXX</li>
            <li>✉️ info@tomarengineering.com</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700"></div>

      {/* Bottom Bar */}
      <div className="mx-4 sm:mx-[10%] py-5 flex flex-col md:flex-row justify-between items-center text-sm gap-3">
        <p>
          Developed and Managed by <a className="text-blue-400 underline" href="https://binarylogix.in/">Binarylogix Technologies LLP</a> © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
