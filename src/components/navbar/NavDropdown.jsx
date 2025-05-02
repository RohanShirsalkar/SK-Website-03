import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";

const NavDropdown = ({
  label = "Select an option",
  options = [],
  onChange = () => {},
  placeholder = "Select an option",
  variant = "primary", // primary, secondary, outline
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle option selection
  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange(option);
  };

  // Animation classes
  const dropdownAnimation = isOpen
    ? "opacity-100 translate-y-0 transition-transform duration-200"
    : "opacity-0 -translate-y-2 pointer-events-none transition-transform duration-200";

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Dropdown button */}
      <button
        type="button"
        className={`flex items-center justify-between w-full md:py-2 md:px-2 bg-white hover:bg-gray-200 rounded`}
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="truncate">{placeholder}</span>
        <ChevronDown
          size={16}
          className={`ml-1 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown menu */}
      <div
        className={`absolute z-10 min-w-full md:min-w-[200px] mt-1 bg-white rounded-lg shadow-lg border border-gray-200 ${dropdownAnimation}`}
        role="listbox"
      >
        <ul className="py-1 max-h-60 overflow-auto">
          {options.length > 0 ? (
            options.map((option) => (
              <li
                key={option.value}
                className="px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 cursor-pointer"
                onClick={() => handleSelect(option)}
                role="option"
                aria-selected={selectedOption?.value === option.value}
              >
                <NavLink to={option.path}>{option.label}</NavLink>
              </li>
            ))
          ) : (
            <li className="px-4 py-2.5 text-sm text-gray-500 cursor-default">
              No options available
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default NavDropdown;
