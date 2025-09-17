import { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';
import logoImage from '@/assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'Our Products', href: '#products' },
    { name: 'Recipes', href: '#recipes' },
    { name: 'Our Story', href: '#story' },
    { name: 'Reviews', href: '#reviews' },
  ];

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src={logoImage} alt="Brunch & Co Logo" className="w-8 h-8 md:w-10 md:h-10" />
          <span className="font-playfair text-xl md:text-2xl font-bold text-primary">Brunch & Co</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-montserrat text-foreground hover:text-primary transition-colors duration-300 relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Search Icon */}
        <div className="flex items-center space-x-4">
          <button 
            className="p-2 rounded-lg hover:bg-muted transition-colors duration-300"
            aria-label="Search"
          >
            <Search className="w-5 h-5 text-foreground hover:text-primary transition-colors duration-300" />
          </button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background/98 backdrop-blur-sm border-b border-border">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block font-montserrat text-foreground hover:text-primary transition-colors duration-300 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;