import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => (
  <footer className="bg-gray-900 text-white py-10">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Branding */}
      <div>
        <h3 className="text-xl font-bold mb-4">Splash App</h3>
        <p className="text-gray-400 mb-4">Your one-stop platform for all your needs.</p>
        <p className="text-gray-400">© 2024 Splash App. All rights reserved.</p>
      </div>
      {/* Links */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Useful Links</h4>
        <ul>
          <li><a href="/about" className="text-gray-400 hover:text-white">About Us</a></li>
          <li><a href="/services" className="text-gray-400 hover:text-white">Services</a></li>
          <li><a href="/contact" className="text-gray-400 hover:text-white">Contact Us</a></li>
        </ul>
      </div>
      {/* Social */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
        <div className="flex space-x-4">
          <a href="https://facebook.com"><FaFacebook size={24} /></a>
          <a href="https://twitter.com"><FaTwitter size={24} /></a>
          <a href="https://instagram.com"><FaInstagram size={24} /></a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
