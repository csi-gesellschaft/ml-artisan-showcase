
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { NavItem } from '@/types';
import { Menu, X } from 'lucide-react';

const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" }
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container-custom flex items-center justify-between py-4 px-4 md:px-8">
        <a href="#" className="text-2xl font-display font-bold text-portfolio-800">
          <span className="gradient-text">ML</span>Portfolio
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-portfolio-600 hover:text-portfolio-800 font-medium transition-colors"
            >
              {item.label}
            </a>
          ))}
          <Button variant="default" className="bg-portfolio-700 hover:bg-portfolio-800">
            Resume
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-white/95 backdrop-blur-sm py-4 px-4 shadow-md animate-fade-in">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-portfolio-600 hover:text-portfolio-800 font-medium py-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button variant="default" className="bg-portfolio-700 hover:bg-portfolio-800 w-full">
              Resume
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
