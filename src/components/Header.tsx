import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Menu, X, ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import logoImage from '@/assets/saute-logo.png';

const Header = () => {
  const navigate = useNavigate();
  const { itemCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'Our Products', href: '#products' },
    { name: 'Our Story', href: '#story' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src={logoImage} alt="Saute Logo" className="w-8 h-8 md:w-10 md:h-10" />
          <span className="font-playfair text-xl md:text-2xl font-bold text-primary">Saute</span>
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

        {/* Search and Cart */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="relative">
            {isSearchOpen && (
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="absolute right-0 top-0 w-64 px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                onBlur={() => setIsSearchOpen(false)}
                autoFocus
              />
            )}
            <button 
              className="p-2 rounded-lg hover:bg-muted transition-colors duration-300"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              aria-label="Search"
            >
              <Search className="w-5 h-5 text-foreground hover:text-primary transition-colors duration-300" />
            </button>
          </div>

          {/* Cart */}
          <button 
            className="p-2 rounded-lg hover:bg-muted transition-colors duration-300 relative"
            onClick={() => navigate('/cart')}
            aria-label="Shopping Cart"
          >
            <ShoppingCart className="w-5 h-5 text-foreground hover:text-primary transition-colors duration-300" />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-background text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                {itemCount}
              </span>
            )}
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