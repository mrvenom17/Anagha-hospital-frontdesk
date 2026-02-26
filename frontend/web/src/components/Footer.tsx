import { Heart, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = {
  Product: ["Features", "Pricing", "Security", "Integrations"],
  Company: ["About Us", "Careers", "Blog", "Press"],
  Support: ["Help Center", "Contact", "API Docs", "Status"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <a href="#" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-hero flex items-center justify-center shadow-soft">
                <Heart className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl text-foreground">ANAGHA Health Connect™️</span>
            </a>
            <p className="text-muted-foreground leading-relaxed max-w-sm">
              A proprietary digital healthcare software of Anagha Pharmacare Private Limited.
            </p>
            <p className="text-muted-foreground text-sm italic">
              A product of Anagha Pharmacare Private Limited
            </p>
            <div className="space-y-3">
              <a href="mailto:rahul@anaghahealthconnect.com" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="w-5 h-5" />
                <span>rahul@anaghahealthconnect.com</span>
              </a>
              <a href="tel:+919039939555" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="w-5 h-5" />
                <span>+91-9039939555</span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5" />
                <span>Gwalior, India</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-foreground mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => {
                  const routeMap: Record<string, string> = {
                    "Features": "/features",
                    "Pricing": "/pricing",
                    "Security": "/security",
                    "Integrations": "/integrations",
                    "Help Center": "/help",
                    "Contact": "/contact",
                    "API Docs": "/api-docs",
                    "Status": "/status",
                    "Careers": "/careers",
                    "About Us": "/about",
                    "Blog": "/blog",
                    "Press": "/press",
                    "Privacy Policy": "/privacy",
                    "Terms of Service": "/terms",
                    "Cookie Policy": "/cookies"
                  };
                  const href = routeMap[link] || "#";
                  const isRoute = routeMap[link] !== undefined;
                  
                  return (
                    <li key={link}>
                      {isRoute ? (
                        <Link
                          to={href}
                          className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                        >
                          {link}
                        </Link>
                      ) : (
                        <a
                          href={href}
                          className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                        >
                          {link}
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-muted-foreground text-sm text-center sm:text-left">
            <p>©️ 2026 ANAGHA Health Connect™️.</p>
            <p>A proprietary digital healthcare software of Anagha Pharmacare Private Limited.</p>
            <p>All rights reserved.</p>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Privacy
            </Link>
            <Link to="/terms" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Terms
            </Link>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
