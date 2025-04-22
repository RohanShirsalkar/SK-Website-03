import { Linkedin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      {/* Main Footer Content */}
      <div className="px-4 py-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* Download Brochure Section */}
        <div className="flex flex-col">
          <h3 className="text-lg font-medium mb-4">Download Brochure</h3>
          <div className="flex flex-col">
            <input
              type="email"
              placeholder="Your Email Address"
              className="px-4 py-3 bg-white text-gray-800 rounded mb-2 "
            />
            <button className="bg-blue-400 hover:bg-blue-500 text-white py-3 font-medium transition-colors duration-300">
              DOWNLOAD
            </button>
          </div>
        </div>

        {/* Head Office Section */}
        <div className="flex flex-col">
          <h3 className="text-lg font-medium mb-4">Head Office</h3>
          <div className="flex items-start mb-4">
            <div className="text-gray-400 mr-2 mt-1">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="text-sm">
              Veerabhadreshwara Nagar, Opp. APMC, Vijayapura Road, Basavan
              Bagewadi,
              <br />
              Vijayapura - 586 203 India.
            </p>
          </div>

          <div className="flex items-center mb-4">
            <div className="text-gray-400 mr-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </div>
            <p className="text-sm">+91 8073978410</p>
          </div>

          <div className="flex items-center">
            <div className="text-gray-400 mr-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <a
              href="mailto:enquiry@ntcgroup.in"
              className="text-sm hover:text-blue-400 transition-colors"
            >
              SKRoadlines060@gmail.com
            </a>
          </div>
        </div>

        {/* Corporate Office Section */}
        <div className="flex flex-col">
          <h3 className="text-lg font-medium mb-4">Corporate Office</h3>
          <div className="flex items-start mb-4">
            <div className="text-gray-400 mr-2 mt-1">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="text-sm">
              Veerabhadreshwara Nagar, Opp. APMC, Vijayapura Road,
              <br />
              Basavan Bagewadi, Vijayapura - 586 203, India.
            </p>
          </div>

          <div className="flex items-center mb-4">
            <div className="text-gray-400 mr-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </div>
            <p className="text-sm">+91 8073978410</p>
          </div>

          <div className="flex items-center">
            <div className="text-gray-400 mr-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <a
              href="mailto:enquiry@ntcgroup.in"
              className="text-sm hover:text-blue-400 transition-colors"
            >
              SKRoadlines060@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer with Copyright and Links */}
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400 mb-4 md:mb-0">
            Copyright © 2025 NTC. All Rights Reserved KP Webtech.
          </div>

          <div className="flex flex-col md:flex-row items-center">
            <div className="flex space-x-4 mb-4 md:mb-0 md:mr-8">
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Terms & Conditions
              </a>
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
            </div>

            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
