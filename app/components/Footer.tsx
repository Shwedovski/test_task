import Link from "next/link";
import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        <div>
          <h3 className="text-white text-lg font-semibold mb-4">About ABC Plumber</h3>
          <p className="text-sm">
            ABC Plumber is a trusted residential plumbing service based in Austin, TX.{" "}
            We provide fast, reliable, and affordable plumbing solutions.
          </p>
        </div>

        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/services" className="hover:text-white">Services</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-sm">1234 Plumbing St.<br />Austin, TX 78701</p>
          <p className="text-sm mt-2">Phone: (512) 555-1234</p>
          <p className="text-sm">Email: info@abcplumber.com</p>
          <div className="flex space-x-6 mt-4 text-blue-500">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-blue-400 transition"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-blue-400 transition"
            >
              <Twitter size={24} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-blue-400 transition"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Our Location</h3>
          <iframe
            className="w-full h-40 rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.947445727903!2d-97.74306008444079!3d30.267153981778372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b5994ee2aeab%3A0x48c0c6f1a07a632a!2sAustin%2C%20TX!5e0!3m2!1sen!2sus!4v1691458597536!5m2!1sen!2sus"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Austin, TX Location"
          ></iframe>
        </div>
      </div>
      <div className="text-center text-gray-500 text-sm mt-10">
        &copy; {new Date().getFullYear()} ABC Plumber. All rights reserved.
      </div>
    </footer>
  );
}
