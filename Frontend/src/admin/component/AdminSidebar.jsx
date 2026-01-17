import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo/logo0.png";

import {
  ChevronDown,
  Home,
  LogOut,
  Menu,
  X,
  SquareUser,
  ChevronRight,
  Image,
  MessageCircle,
} from "lucide-react";

import Dashboard from "../pages/Dashboard";
import Users from "../pages/Users";
import BannerManager from "../pages/BannerManager";
import AdminProject from "../pages/AdminProject";
import ContactQueries from "../pages/ContactQueries";

export function AdminSidebar() {
  const navigate = useNavigate();

  const [collapsed, setCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState({ Dashboard: false });
  const [activeView, setActiveView] = useState("Dashboard");

  // Check admin session on mount
  useEffect(() => {
    const adminUser = sessionStorage.getItem("token");
    if (!adminUser) {
      navigate("/tomarEngg/panel/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    navigate("/");
  };

  // Responsive sidebar logic
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(true);
      }
      if (window.innerWidth < 768) {
        setCollapsed(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Load last active tab from sessionStorage
  useEffect(() => {
    const savedView = sessionStorage.getItem("activeView");
    if (savedView) {
      setActiveView(savedView);
    } else {
      setActiveView("Dashboard");
    }
  }, []);

  // Save active tab to storage with debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      sessionStorage.setItem("activeView", activeView);
    }, 500);
    return () => clearTimeout(timer);
  }, [activeView]);

  const toggleMenu = (title) => {
    setOpenMenus((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Navigation items
  const navItems = [
    {
      label: "Dashboard",
      icon: Home,
      type: "single",
      submenu: [],
    },
    {
      label: "Home Banner",
      icon: Image,
      type: "single",
      submenu: [],
    },
     {
      label: "Project",
      icon: Image,
      type: "single",
      submenu: [],
    },
    {
      label: "Contact Queries",
      icon: MessageCircle,
      type: "single",
      submenu: [],
    },
  ];

  // Styles for active and hover states using CSS variables
  const activeStyle = {
    backgroundColor: "var(--primary)",
    color: "white",
  };

  const hoverStyle = {
    color: "var(--primary)",
  };

  return (
    <div
      className="flex h-screen bg-gray-50"
      style={{
        "--primary": "#ec3c3c",
        "--secondary": "#dbb243",
        "--third": "#4d196c",
      }}
    >
      {/* Mobile Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/30 bg-opacity-50 lg:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 flex h-full flex-col bg-white border-r border-gray-200 shadow-lg transition-all duration-300 lg:relative lg:translate-x-0 ${
          collapsed ? "w-16" : "w-64"
        } ${
          mobileMenuOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex h-20 items-center justify-between border-b border-gray-200 px-4">
          <div className="flex items-center justify-center gap-3">
            {!collapsed && (
              <div
                className="flex flex-col cursor-pointer"
                onClick={() => navigate("/")}
              >
                <img
                  src={logo}
                  alt="Logo"
                  className="h-14 w-100 rounded-lg object-contain"
                />
                <span className="text-sm text-center text-gray-400 font-medium">
                  Admin Management
                </span>
              </div>
            )}
          </div>
          {/* Mobile close button */}
          <button
            onClick={closeMobileMenu}
            className="lg:hidden p-1 rounded-md text-gray-400 hover:text-gray-600"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Sidebar Navigation */}
        <div className="flex-1 overflow-y-auto py-2">
          <div className="px-3">
            {!collapsed && (
              <div className="mb-2 px-4 py-2 text-xs font-semibold uppercase text-gray-500">
                Navigation
              </div>
            )}
            <nav className="space-y-1">
              {navItems.map(({ label, icon: Icon, submenu, type }) => (
                <div key={label}>
                  <button
                    onClick={() => {
                      if (type === "single") {
                        setActiveView(label);
                        closeMobileMenu();
                      } else if (type === "dropdown") {
                        toggleMenu(label);
                      }
                    }}
                    className={`flex w-full items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                      activeView === label
                        ? "border-r-4"
                        : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                    }`}
                    style={activeView === label ? activeStyle : undefined}
                  >
                    <Icon
                      className={`h-5 w-5 ${
                        collapsed ? "mx-auto" : "mr-3"
                      } shrink-0`}
                      style={
                        activeView === label ? { color: "white" } : undefined
                      }
                    />
                    {!collapsed && (
                      <>
                        <span className="flex-1 truncate text-left">
                          {label}
                        </span>
                        {label !== "Dashboard" && submenu.length > 0 && (
                          <ChevronDown
                            className={`h-4 w-4 transition-transform shrink-0 ${
                              openMenus[label] ? "rotate-180" : ""
                            }`}
                            style={
                              activeView === label
                                ? { color: "white" }
                                : undefined
                            }
                          />
                        )}
                      </>
                    )}
                  </button>

                  {!collapsed && submenu.length > 0 && openMenus[label] && (
                    <div className="mt-1 space-y-1 pl-10">
                      {submenu.map((title) => (
                        <button
                          key={title}
                          onClick={() => {
                            setActiveView(title);
                            closeMobileMenu();
                          }}
                          className={`block text-left w-full rounded-md py-2 pl-3 pr-4 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors ${
                            activeView === title ? "font-semibold" : ""
                          }`}
                          style={activeView === title ? activeStyle : undefined}
                        >
                          {title}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>

        {/* Desktop Toggle Collapse Button */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="absolute -right-3 top-20 hidden lg:flex h-6 w-6 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-600 hover:bg-gray-50 shadow-sm transition-colors"
          style={{ color: "var(--primary)" }}
        >
          <ChevronRight
            className={`h-4 w-4 transition-transform ${
              collapsed ? "" : "rotate-180"
            }`}
          />
        </button>
      </aside>

      {/* Main Content with Navbar */}
      <div className={`flex flex-col flex-1 transition-all duration-300 `}>
        {/* Top Navbar */}
        <header className="flex h-16 items-center justify-between border-b border-gray-200 bg-white px-4 sm:px-6 shadow-sm">
          <div className="flex items-center gap-3 min-w-0">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 lg:hidden p-1 rounded-md hover:bg-gray-100"
              style={{ color: "var(--primary)" }}
            >
              <Menu className="h-6 w-6" />
            </button>
            <h1 className="text-lg font-semibold text-gray-900 truncate">
              Admin Dashboard
            </h1>
          </div>
          <button
            onClick={handleLogout}
            className="hover:cursor-pointer flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
            style={{ color: "var(--primary)" }}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Log out
          </button>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 p-2 sm:p-4 bg-gray-50 overflow-y-auto">
          {activeView === "Dashboard" && (
            <Dashboard setActiveView={setActiveView} />
          )}
          {activeView === "Customers" && <Users />}
          {activeView === "Project" && <AdminProject />}
          {activeView === "Home Banner" && <BannerManager />}
          {activeView === "Contact Queries" && <ContactQueries />}
        </main>
      </div>
    </div>
  );
}
