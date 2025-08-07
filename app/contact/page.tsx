"use client";

import { useState } from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been received.`);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-10 text-center text-blue-700">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <form
          onSubmit={handleSubmit}
          className="space-y-8 bg-white p-10 rounded-2xl shadow-xl border border-gray-300"
          noValidate
        >
          <div>
            <label htmlFor="name" className="block mb-3 font-semibold text-gray-800">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-5 py-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-300 text-lg"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-3 font-semibold text-gray-800">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-5 py-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-300 text-lg"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block mb-3 font-semibold text-gray-800">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-5 py-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-300 text-lg"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-3 font-semibold text-gray-800">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-5 py-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-300 resize-none text-lg"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-800 transition text-lg w-full"
          >
            Send Message
          </button>
        </form>

        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Contact Info</h2>
            <p><strong>Address:</strong> 123 Main St, Austin, TX 78701</p>
            <p><strong>Phone:</strong> (512) 555-1234</p>
            <p><strong>Email:</strong> info@abcplumber.com</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Follow Us</h2>
            <div className="flex space-x-6 text-blue-600">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-blue-800 transition"
              >
                <Facebook size={32} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="hover:text-blue-800 transition"
              >
                <Twitter size={32} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-blue-800 transition"
              >
                <Instagram size={32} />
              </a>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.1234567890123!2d-97.7430605848261!3d30.26715318168038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b59cae61c52d%3A0x12d3b0fbaa09efc1!2sAustin%2C%20TX!5e0!3m2!1sen!2sus!4v1688723991234!5m2!1sen!2sus"
              width="100%"
              height="250"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="ABC Plumber Location"
              className="border-0"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}
