import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
          <div className="hidden md:flex space-x-4">
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
            <div className="relative group">
              {/* Dropdown Button */}
              <button
                className="py-2 px-3 flex items-center gap-1 hover:bg-gray-200 rounded-md focus:outline-none"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                onBlur={() => setTimeout(() => setIsDropdownOpen(false), 150)}
              >
                Who We Are
                <i
                  className={`fas fa-chevron-down text-sm transition-transform duration-200 ${
                    isDropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                ></i>
              </button>

              {isDropdownOpen && (
                <div className="absolute z-50 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-md flex flex-col text-left">
                  <NavLink
                    to="/corporate-compliance"
                    className={({ isActive }) =>
                      isActive
                        ? "px-4 py-2 text-blue-500 font-semibold bg-gray-100"
                        : "px-4 py-2 hover:bg-gray-100"
                    }
                  >
                    Corporate Compliance
                  </NavLink>
                  <NavLink
                    to="/q&ehs"
                    className={({ isActive }) =>
                      isActive
                        ? "px-4 py-2 text-blue-500 font-semibold bg-gray-100"
                        : "px-4 py-2 hover:bg-gray-100"
                    }
                  >
                    Q&EHS
                  </NavLink>
                </div>
              )}
            </div>
            {/* <NavLink
              to="/about-us"
              className={({ isActive }) =>
                isActive
                  ? "py-2 px-3 text-blue-500 font-semibold"
                  : "py-2 px-3 hover:bg-gray-200 rounded-md"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/corporate-compliance"
              className={({ isActive }) =>
                isActive
                  ? "py-2 px-3 text-blue-500 font-semibold"
                  : "py-2 px-3 hover:bg-gray-200 rounded-md"
              }
            >
              Corporate Compliance
            </NavLink>
            <NavLink
              to="/q&ehs"
              className={({ isActive }) =>
                isActive
                  ? "py-2 px-3 text-blue-500 font-semibold"
                  : "py-2 px-3 hover:bg-gray-200 rounded-md"
              }
            >
              Q&EHS
            </NavLink> */}

            <NavLink
              to="/our-services"
              className={({ isActive }) =>
                isActive
                  ? "py-2 px-3 text-blue-500 font-semibold"
                  : "py-2 px-3 hover:bg-gray-200 rounded-md"
              }
            >
              Our Services
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
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#"
              className="block px-3 py-2 hover:bg-gray-200 rounded-md"
            >
              Home
            </a>
            <a
              href="#"
              className="block px-3 py-2 hover:bg-gray-200 rounded-md"
            >
              About
            </a>

            <a
              href="#"
              className="block px-3 py-2 hover:bg-gray-200 rounded-md"
            >
              Contact
            </a>
            <a
              href="#"
              className="block px-3 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-center mt-4"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

{
  /* <div className="relative">
              <button
                className="py-2 px-3 hover:bg-gray-200 rounded-md flex items-center"
                onClick={toggleDropdown}
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white z-20 border border-gray-200">
                  <NavLink
                    to="/services/service1"
                    className={({ isActive }) =>
                      isActive
                        ? "block px-4 py-2 text-blue-500 text-white"
                        : "block px-4 py-2 hover:bg-gray-200"
                    }
                  >
                    Service 1
                  </NavLink>
                  <NavLink
                    to="/services/service2"
                    className={({ isActive }) =>
                      isActive
                        ? "block px-4 py-2 bg-blue-500 text-white"
                        : "block px-4 py-2 hover:bg-gray-200"
                    }
                  >
                    Service 2
                  </NavLink>
                  <NavLink
                    to="/services/service3"
                    className={({ isActive }) =>
                      isActive
                        ? "block px-4 py-2 bg-blue-500 text-white"
                        : "block px-4 py-2 hover:bg-gray-200"
                    }
                  >
                    Service 3
                  </NavLink>
                </div>
              )}
            </div> 
}

{
  /* <button
              className="flex justify-between items-center w-full px-3 py-2 hover:bg-gray-200 rounded-md"
              onClick={toggleDropdown}
            >
              Services
              <ChevronDown className="h-4 w-4" />
            </button>

            {isDropdownOpen && (
              <div className="pl-4">
                <a
                  href="#"
                  className="block px-3 py-2 hover:bg-gray-200 rounded-md"
                >
                  Service 1
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 hover:bg-gray-200 rounded-md"
                >
                  Service 2
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 hover:bg-gray-200 rounded-md"
                >
                  Service 3
                </a>
              </div>
            )} */
}
