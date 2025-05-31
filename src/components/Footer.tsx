
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-[#007A3D] mb-4">EcoShop</h3>
            <p className="text-gray-600 text-sm leading-relaxed max-w-md">
              AI-powered recommendations for an eco-conscious world. 
              Making sustainable shopping accessible to everyone.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Platform</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="/store" className="hover:text-[#007A3D] transition-colors">Green Store</Link></li>
              <li><Link to="/grading" className="hover:text-[#007A3D] transition-colors">Product Grading</Link></li>
              <li><Link to="/solution" className="hover:text-[#007A3D] transition-colors">AI Technology</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="/about" className="hover:text-[#007A3D] transition-colors">About Us</Link></li>
              <li><a href="mailto:hello@ecoshop.ai" className="hover:text-[#007A3D] transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-[#007A3D] transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
          © 2024 EcoShop. Building the future of sustainable commerce.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
