import { useState } from "react";

const CTAForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    jobTitle: "",
    company: "",
    areaOfInterest: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle the form submission, such as sending the data to an API
    console.log("Form submitted:", formData);
    // Reset form after submission if needed
    // setFormData({ fullName: '', email: '', jobTitle: '', company: '', areaOfInterest: '' });
  };

  return (
    <div className="bg-transparent py-16 px-4">
      <div className="max-w-6xl mx-auto bg-white border border-gray-200 p-6 md:p-12 shadow-lg rounded-lg">
        <div className="flex flex-col sm:flex-row gap-8 items-center">
          {/* Image Section - Now on left */}
          <div className="w-full md:w-1/2">
            <img
              src="start-the-conversation.webp"
              alt="Business professional"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Form Section - Now on right */}
          <div className="w-full md:w-1/2 text-gray-800">
            <h2 className="text-3xl font-bold mb-4 text-blue-800">
              Start the Conversation
            </h2>
            <p className="mb-8 text-gray-600">
              Fill out the form below, and our team will get back to you
              promptly to discuss your logistics needs.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                {/* Full Name */}
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full px-4 py-3 rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                  required
                />

                {/* Email */}
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                  required
                />

                {/* Job Title and Company - Side by Side */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    placeholder="Job Title"
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                  />

                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company"
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                  />
                </div>

                {/* Area of Interest Dropdown */}
                <select
                  name="areaOfInterest"
                  value={formData.areaOfInterest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition appearance-none bg-white"
                >
                  <option value="">Select The Area Of Interest</option>
                  <option value="logistics">Logistics</option>
                  <option value="shipping">Shipping</option>
                  <option value="warehousing">Warehousing</option>
                  <option value="supply_chain">Supply Chain Management</option>
                  <option value="customs">Customs Clearance</option>
                </select>

                {/* Submit Button */}
                <div className="mt-6">
                  <button
                    type="submit"
                    className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-3 px-8 rounded transition-colors duration-300"
                  >
                    CONTACT US
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTAForm;
