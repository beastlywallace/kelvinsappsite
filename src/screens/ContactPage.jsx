import React, { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Using Formspree endpoint that forwards to akonakpevwe@gmail.com
      const response = await fetch("https://formspree.io/f/xpwyozqo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus(""), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-red-500 mb-8">
            HAVE ANY QUESTIONS? GET IN TOUCH WITH US!
          </h1>
          <p className="text-xl mb-12">
            Contact our ever-active team today for bookings, sponsorship, and
            inquiries.
          </p>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-900 p-8 rounded-lg">
              <MapPin size={48} className="text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Location</h3>
              <p className="text-gray-300">Lagos, Nigeria</p>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg">
              <Phone size={48} className="text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p className="text-gray-300">+234 706 115 5026</p>
              <p className="text-gray-300">+234 703 647 3012</p>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg">
              <Mail size={48} className="text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-300">kelvinsappbookings@gmail.com</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900 p-8 rounded-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
            
            {status === "success" && (
              <div className="mb-6 p-4 bg-green-600 text-white rounded-lg">
                ✓ Message sent successfully! We'll get back to you soon.
              </div>
            )}
            
            {status === "error" && (
              <div className="mb-6 p-4 bg-red-600 text-white rounded-lg">
                ✗ Failed to send message. Please try again later.
              </div>
            )}

            <div className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-red-500 focus:outline-none"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-red-500 focus:outline-none"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Your Message"
                required
                className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-red-500 focus:outline-none"
              />
              <button
                onClick={handleSubmit}
                className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}