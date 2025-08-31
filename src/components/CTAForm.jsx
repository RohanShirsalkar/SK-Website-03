import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const CTAForm = () => {
  const formRef = useRef(); // <-- for EmailJS to reference the form

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

    emailjs
      .sendForm(
        "service_0syo2ar",      // replace with your service ID
        "template_318dmgg",     // replace with your template ID
        formRef.current,
        "cI9xakBiecKYk1ZMl"       // replace with your public key
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
          alert("Thanks! We'll get back to you shortly.");
          // Optionally reset form
          setFormData({
            fullName: "",
            email: "",
            jobTitle: "",
            company: "",
            areaOfInterest: "",
          });
        },
        (error) => {
          console.error("Email send failed:", error.text);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="bg-transparent py-16 px-4">
      <div className="max-w-6xl mx-auto bg-white border border-gray-200 p-6 md:p-12 shadow-lg rounded-lg">
        <div className="flex flex-col sm:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2">
            <img
              src="start-the-conversation.webp"
              alt="Business professional"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="w-full md:w-1/2 text-gray-800">
            <h2 className="text-3xl font-bold mb-4 text-blue-800">
              Start the Conversation
            </h2>
            <p className="mb-8 text-gray-600">
              Fill out the form below, and our team will get back to you
              promptly to discuss your logistics needs.
            </p>

            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="space-y-4">
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  className="w-full px-4 py-3 rounded border border-gray-300"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="w-full px-4 py-3 rounded border border-gray-300"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    placeholder="Job Title"
                    className="w-full px-4 py-3 rounded border border-gray-300"
                  />
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company"
                    className="w-full px-4 py-3 rounded border border-gray-300"
                  />
                </div>

                <select
                  name="areaOfInterest"
                  value={formData.areaOfInterest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded border border-gray-300 bg-white"
                >
                  <option value="">Select The Area Of Interest</option>
                  <option value="logistics">Logistics</option>
                  <option value="shipping">Shipping</option>
                  <option value="warehousing">Warehousing</option>
                  <option value="supply_chain">Supply Chain Management</option>
                  <option value="customs">Customs Clearance</option>
                </select>

                <div className="mt-6">
                  <button
                    type="submit"
                    className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-3 px-8 rounded"
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