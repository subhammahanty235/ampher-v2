import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/lovable-uploads/c54e0046-a56a-4d72-a434-bd9f07250710.png" 
                alt="Ampher Logo" 
                className="h-12 brightness-0 invert"
              />
            </div>
            <p className="text-gray-400">
              Transforming businesses through technology and innovation.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-primary">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-primary">About</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary">Services</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-primary">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Custom Development</li>
              <li className="text-gray-400">IT Consulting</li>
              <li className="text-gray-400">Digital Transformation</li>
              <li className="text-gray-400">Team Augmentation</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Ampher. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;