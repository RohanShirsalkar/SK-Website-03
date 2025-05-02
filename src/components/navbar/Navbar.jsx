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
          <div className="flex items-center space-x-4">
            <img src="/logoNew_croped.png" alt="" className="w-20" />
            <h1 className="text-2xl font-semibold">
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
                  value: "renewable-logistics",
                  label: "Renewable Logistics",
                  path: "/renewable-logistics",
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
          <div className="px-4 pt-2 pb-3">
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
              <NavDropdown />
            </div>
            <div className="mb-2">
              <NavDropdown />
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
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
