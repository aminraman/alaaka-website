import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp, FaFacebookF, FaInstagram, FaTwitter, FaCalendar, FaHeart } from "react-icons/fa";
import {motion} from "framer-motion"
export default function ContactSection() {
  return (
    <section className="py-20 bg-gray-50 text-gray-900" id="contact">
      <motion.div className="max-w-5xl mx-auto px-6 text-center">
        {/* Title */}
        <motion.h1 className="text-4xl font-bold text-green-800 mb-6">Contact & Volunteer</motion.h1>
        <motion.p className="text-gray-700 mb-10 max-w-2xl mx-auto">
          We’d love to hear from you — whether you want to volunteer, support the community, or learn more about our programs at{" "}
          <span className="font-semibold">Newark Central Masjid</span>.
        </motion.p>

        {/* Contact Info Grid */}
        <motion.div className="grid md:grid-cols-3 gap-10 justify-center">
          {/* Email */}
          <motion.div className="bg-green-50 rounded-2xl shadow-md p-8 hover:shadow-lg transition">
            <FaEnvelope className="text-green-700 text-4xl mx-auto mb-4" />
            <motion.h3 className="text-xl font-semibold text-green-800 mb-2">Email Us</motion.h3>
            <a
              href="mailto:info@alaakaassociation.org"
              className="text-yellow-600 hover:underline"
            >
              info@alaakaassociation.org
            </a>
          </motion.div>

          {/* Phone */}
          <motion.div className="bg-green-50 rounded-2xl shadow-md p-8 hover:shadow-lg transition">
            <FaPhone className="text-green-700 text-4xl mx-auto mb-4" />
            <motion.h3 className="text-xl font-semibold text-green-800 mb-2">Call Us</motion.h3>
            <a href="tel:+19735551234" className="block text-yellow-600 hover:underline">
              +1 (973) 555-1234
            </a>
            <a
              href="https://wa.me/19735551234"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-green-600 hover:underline mt-1"
            >
              Chat on WhatsApp
            </a>
          </motion.div>

          {/* Location */}
          <motion.div className="bg-green-50 rounded-2xl shadow-md p-8 hover:shadow-lg transition">
            <FaMapMarkerAlt className="text-green-700 text-4xl mx-auto mb-4" />
            <motion.h3 className="text-xl font-semibold text-green-800 mb-2">Visit Us</motion.h3>
            <motion.p className="text-gray-700">
              151 12th avenue <br />Newark NJ 07107
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Volunteer / Donate Button */}
        <motion.div className="mt-16">
          <a
            href="https://forms.gle/GmXCUTWLdBoEBAJU7" // 🔗 Replace with your real Google Form URL
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-yellow-400 text-black font-semibold px-8 py-3 rounded-full shadow-md hover:bg-yellow-500 transition"
          >
            <FaHeart className="text-lg" />
            Volunteer
          </a>
        </motion.div>

        {/* Social Media */}
        <motion.div className="mt-16">
          <motion.h3 className="text-2xl font-semibold text-green-800 mb-6">Connect With Us</motion.h3>
          <motion.div className="flex justify-center space-x-6">
            <a
              href="https://facebook.com/groups/1740587122890273/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-700 text-white p-3 rounded-full hover:bg-green-800 transition"
            >
              <FaFacebookF className="text-lg" />
            </a>
            <a
              href="https://www.instagram.com/alaakaassociation?igsh=OHpoN2llY2xsdTgy"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-700 text-white p-3 rounded-full hover:bg-green-800 transition"
            >
              <FaInstagram className="text-lg" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-700 text-white p-3 rounded-full hover:bg-green-800 transition"
            >
              <FaTwitter className="text-lg" />
            </a>
            <a
              href="https://wa.me/19735551234"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-700 text-white p-3 rounded-full hover:bg-green-800 transition"
            >
              <FaWhatsapp className="text-lg" />
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
