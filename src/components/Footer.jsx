import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaXTwitter,
} from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#1e2732] text-white py-16 px-6 relative overflow-hidden font-sans">
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center">
        <h2 className="text-xl md:text-2xl font-semibold mb-6 text-center">
          Sign up to be sent a copy of Dartford Living to your inbox every month
        </h2>

        <div className="w-full max-w-3xl bg-white rounded-lg p-1 sm:p-1.5 flex items-center mb-3">
          <div className="pl-2 sm:pl-3 pr-1 sm:pr-2 text-gray-400">
            <MdOutlineEmail className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 py-2 sm:py-3 px-2 text-sm sm:text-base text-gray-700 outline-none bg-transparent min-w-0"
          />
          <button className="bg-[#facc15] hover:bg-yellow-500 text-[#1e2732] font-semibold py-2 sm:py-3 px-4 sm:px-8 rounded-md transition duration-200 whitespace-nowrap text-sm sm:text-base">
            Subscribe
          </button>
        </div>

        <p className="text-[#94a3b8] text-sm mb-10 text-center">
          Join 7,000+ subscribers. Unsubscribe anytime.
        </p>

        <div className="flex space-x-4 mb-16">
          <a
            href="#"
            className="bg-white text-[#1e2732] p-2.5 rounded-full hover:bg-gray-200 transition"
          >
            <FaFacebookF size={18} />
          </a>
          <a
            href="#"
            className="bg-white text-[#e1306c] p-2.5 rounded-full hover:bg-gray-200 transition"
          >
            <FaInstagram size={18} />
          </a>
          <a
            href="#"
            className="bg-white text-black p-2.5 rounded-full hover:bg-gray-200 transition"
          >
            <FaXTwitter size={18} />
          </a>
          <a
            href="#"
            className="bg-white text-[#0077b5] p-2.5 rounded-full hover:bg-gray-200 transition"
          >
            <FaLinkedinIn size={18} />
          </a>
          <a
            href="#"
            className="bg-white text-[#bd081c] p-2.5 rounded-full hover:bg-gray-200 transition"
          >
            <FaPinterestP size={18} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 w-full">
          <div className="md:col-span-2 text-center md:text-left md:pr-8">
            <p className="text-[#cbd5e1] leading-relaxed ">
              We are all volunteers who produce the magazine around our full
              time jobs. Serving the Dartford community since 2010 with local
              news, events, and business connections.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start space-y-2 text-[#cbd5e1] md:ml-auto md:col-span-1">
            <a href="#" className="hover:text-white transition">
              Contact us
            </a>
            <a href="#" className="hover:text-white transition">
              FAQs
            </a>
            <a href="#" className="hover:text-white transition">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
          </div>

          <div className="flex flex-col items-center md:items-start space-y-2 text-[#cbd5e1] md:ml-auto md:col-span-1">
            <a href="#" className="hover:text-white transition">
              News
            </a>
            <a href="#" className="hover:text-white transition">
              Read Magazine
            </a>
            <a href="#" className="hover:text-white transition">
              Business Directory
            </a>
            <a href="#" className="hover:text-white transition">
              Networking Events
            </a>
          </div>

          <div className="flex flex-col items-center md:items-start space-y-2 text-[#cbd5e1] md:ml-auto md:col-span-1">
            <a href="#" className="hover:text-white transition">
              About us
            </a>
            <a href="#" className="hover:text-white transition">
              Advertise
            </a>
            <a href="#" className="hover:text-white transition">
              Newsletter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
