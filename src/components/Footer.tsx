import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-sage text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <img
              src="/lovable-uploads/f83e62d5-5d36-4622-b703-672379c11d36.png"
              alt="Petal & Pin Logo"
              className="h-16 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Crafting perfection, stitch by stitch. Expert alterations and bespoke textiles in the heart of Windhoek.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-playfair font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/alterations" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-sm"
                >
                  Professional Alterations
                </Link>
              </li>
              <li>
                <Link 
                  to="/custom-textiles" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-sm"
                >
                  Custom Textiles
                </Link>
              </li>
              <li>
                <Link 
                  to="/portfolio" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-sm"
                >
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-playfair font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/about" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-playfair font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="mt-0.5 text-primary-foreground/80" />
                <span className="text-primary-foreground/80 text-sm">
                  Windhoek, Namibia
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-primary-foreground/80" />
                <span className="text-primary-foreground/80 text-sm">
                  +264 XX XXX XXXX
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-primary-foreground/80" />
                <span className="text-primary-foreground/80 text-sm">
                  info@petalandpin.com
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock size={16} className="mt-0.5 text-primary-foreground/80" />
                <div className="text-primary-foreground/80 text-sm">
                  <div>Mon-Fri: 8:00-17:00</div>
                  <div>Sat: 9:00-13:00</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2025 Petal & Pin. All rights reserved. Crafted with care in Windhoek, Namibia.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;