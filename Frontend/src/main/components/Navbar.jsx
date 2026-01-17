import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/logo/logo0.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const navLinkBase =
    "relative py-1 font-semibold tracking-wide transition-colors";

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-md border-b border-gray-200 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.img
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/")}
          className="w-46 md:w-56 cursor-pointer "
          src={logo}
          alt="logo"
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {[
            { path: "/", label: "HOME" },
            { path: "/about-us", label: "ABOUT US" },
            { path: "/products-services", label: "PRODUCTS & SERVICES" },
            { path: "/projects", label: "PROJECTS" },
          ].map(({ path, label }) => (
            <NavLink key={path} to={path} end>
              {({ isActive }) => (
                <li className="cursor-pointer">
                  <span
                    className={`${navLinkBase} ${
                      isActive ? "text-secondary" : "text-gray-800"
                    }`}
                  >
                    {label}

                    {/* Animated underline */}
                    <motion.span
                      layoutId="underline"
                      className={`absolute left-1/2 -bottom-1 h-0.5 bg-secondary ${
                        isActive ? "w-3/5" : "w-0"
                      }`}
                      style={{ translateX: "-50%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </span>
                </li>
              )}
            </NavLink>
          ))}

          {/* CTA */}
          <NavLink to="/contact">
            {({ isActive }) => (
              <motion.li
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-lg text-white font-semibold shadow-md transition-all ${
                  isActive ? "bg-black" : "bg-secondary hover:bg-black"
                }`}
              >
                CONTACT
              </motion.li>
            )}
          </NavLink>
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden relative w-8 h-8"
          onClick={() => setShowMenu(!showMenu)}
        >
          <motion.span
            animate={showMenu ? { rotate: 45, y: 4 } : {}}
            className="absolute w-6 h-0.5 bg-black left-1"
          />
          <motion.span
            animate={showMenu ? { opacity: 0 } : { opacity: 1 }}
            className="absolute w-6 h-0.5 bg-black top-3 left-1"
          />
          <motion.span
            animate={showMenu ? { rotate: -45, y: -2 } : {}}
            className="absolute w-6 h-0.5 bg-black top-6 left-1"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden bg-white border-t border-gray-200 shadow-lg overflow-hidden"
          >
            <ul className="flex flex-col items-center gap-6 py-6 font-semibold">
              {[
                { path: "/", label: "HOME" },
                { path: "/about-us", label: "ABOUT US" },
                { path: "/products-services", label: "PRODUCTS & SERVICES" },
                { path: "/projects", label: "PROJECTS" },
                { path: "/contact", label: "CONTACT" },
              ].map(({ path, label }) => (
                <NavLink
                  key={path}
                  to={path}
                  end
                  onClick={() => setShowMenu(false)}
                >
                  {({ isActive }) => (
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      className={`px-6 py-2 rounded-lg transition ${
                        isActive
                          ? "bg-secondary text-white"
                          : "text-gray-700 hover:text-secondary"
                      }`}
                    >
                      {label}
                    </motion.span>
                  )}
                </NavLink>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
