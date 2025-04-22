import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <nav className="">
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
            <a href="#" className="py-2 px-3 hover:bg-gray-200 rounded-md">
              Home
            </a>
            <a href="#" className="py-2 px-3 hover:bg-gray-200 rounded-md">
              About
            </a>
            <div className="relative">
              <button
                className="py-2 px-3 hover:bg-gray-200 rounded-md flex items-center"
                onClick={toggleDropdown}
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                    Service 1
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                    Service 2
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                    Service 3
                  </a>
                </div>
              )}
            </div>
            <a href="#" className="py-2 px-3 hover:bg-gray-200 rounded-md">
              Contact
            </a>
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
            <button
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
            )}
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
