import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Walgawo S.S.S.</h3>
            <p className="text-gray-400">Excellence in Education. A tradition of success.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/academics" className="hover:text-blue-400 transition-colors">Academics</Link></li>
              <li><Link to="/admissions" className="hover:text-blue-400 transition-colors">Admissions</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center"><MapPin size={18} className="mr-3 text-blue-400" /> Walgawo, East Africa</li>
              <li className="flex items-center"><Mail size={18} className="mr-3 text-blue-400" /> info@walgawo.edu</li>
              <li className="flex items-center"><Phone size={18} className="mr-3 text-blue-400" /> +254 123 456 789</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Walgawo Senior Secondary School. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
