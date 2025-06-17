import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";
import NavDropdown from "./NavDropdown";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="border-b shadow border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <NavLink to="/">
              <img
                src="/logoNew_croped.png" // Make sure this path is correct
                alt="Logo"
                className="w-20 cursor-pointer"
              />
            </NavLink>
            <h1 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-red-500 drop-shadow">
              SK Road Lines & Transport
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "py-2 px-3 text-blue-500 font-semibold"
                  : "py-2 px-3 hover:bg-gray-200 rounded-md"
              }
            >
              Home
            </NavLink>

            <NavDropdown
              placeholder="Who We Are"
              options={[
                {
                  value: "about-us",
                  label: "About Us",
                  path: "/about-us",
                },
                {
                  value: "corporate-compliance",
                  label: "Corporate Compliance",
                  path: "/corporate-compliance",
                },
                {
                  value: "q&ehs",
                  label: "Q&EHS",
                  path: "/q&ehs",
                },
              ]}
            />
            <NavDropdown
              placeholder="Our Solutions"
              options={[
                {
                  value: "renewable-logistics",
                  label: "Renewable Logistics",
                  path: "/renewable-logistics",
                },
                {
                  value: "general-transportation",
                  label: "General Transportation",
                  path: "/general-transportation",
                },
                {
                  value: "employee-training",
                  label: "Employability Skill Training",
                  path: "/employee-training",
                },
              ]}
            />

            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                isActive
                  ? "py-2 px-3 text-blue-500 font-semibold"
                  : "py-2 px-3 hover:bg-gray-200 rounded-md"
              }
            >
              Gallery
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "py-2 px-3 text-blue-500 font-semibold"
                  : "py-2 px-3 hover:bg-gray-200 rounded-md"
              }
            >
              Contact
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md hover:bg-gray-200 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-4 pt-2 pb-3 flex flex-col">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "  text-blue-500 font-semibold"
                  : "  hover:bg-gray-200 rounded-md"
              }
            >
              Home
            </NavLink>

            <div className="mb-2 mt-2">
              <NavDropdown
                placeholder="Who We Are"
                options={[
                  {
                    value: "about-us",
                    label: "About Us",
                    path: "/about-us",
                  },
                  {
                    value: "corporate-compliance",
                    label: "Corporate Compliance",
                    path: "/corporate-compliance",
                  },
                  {
                    value: "q&ehs",
                    label: "Q&EHS",
                    path: "/q&ehs",
                  },
                ]}
              />
            </div>
            <div className="mb-2">
              <NavDropdown
                placeholder="Our Solutions"
                options={[
                  {
                    value: "renewable-logistics",
                    label: "Renewable Logistics",
                    path: "/renewable-logistics",
                  },
                  {
                    value: "general-transportation",
                    label: "General Transportation",
                    path: "/general-transportation",
                  },
                  {
                    value: "employee-training",
                    label: "Employability Skill Training",
                    path: "/employee-training",
                  },
                ]}
              />
            </div>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "  text-blue-500 font-semibold"
                  : "  hover:bg-gray-200 rounded-md"
              }
            >
              Contact
            </NavLink>
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                isActive
                  ? "  text-blue-500 font-semibold mt-2"
                  : "  hover:bg-gray-200 rounded-md mt-2"
              }
            >
              Gallery
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
