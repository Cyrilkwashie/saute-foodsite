import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Plus, Minus, ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Import product images
import chocolateCupcake from '@/assets/product-chocolate-cupcake.jpg';
import fluffyPancakes from '@/assets/product-fluffy-pancakes.jpg';
import redVelvetCake from '@/assets/product-red-velvet-cake.jpg';
import berryWaffles from '@/assets/product-berry-waffles.jpg';
import artisanDonuts from '@/assets/product-artisan-donuts.jpg';

const products = [
  {
    id: 1,
    name: 'Chocolate Cupcakes',
    image: chocolateCupcake,
    price: 12.99,
    description: 'Rich chocolate cupcakes with velvety frosting and premium cocoa. Made with the finest Belgian chocolate and topped with our signature buttercream frosting. Perfect for any celebration or indulgent treat.',
    ingredients: ['Premium Belgian Chocolate', 'Organic Flour', 'Farm-fresh Eggs', 'Real Vanilla Extract', 'Cream Cheese Frosting'],
    servings: '12 cupcakes'
  },
  {
    id: 2,
    name: 'Fluffy Pancakes',
    image: fluffyPancakes,
    price: 8.99,
    description: 'Stack of golden, fluffy pancakes with syrup. Light, airy pancakes made with our secret recipe for the perfect breakfast experience. Served with pure maple syrup and a pat of butter.',
    ingredients: ['Organic Flour', 'Fresh Buttermilk', 'Farm Eggs', 'Pure Maple Syrup', 'Vanilla Extract'],
    servings: '4-6 pancakes'
  },
  {
    id: 3,
    name: 'Red Velvet Cake',
    image: redVelvetCake,
    price: 24.99,
    description: 'Classic red velvet cake with cream cheese frosting. Moist, tender layers of red velvet cake with our signature cream cheese frosting. A timeless dessert that never goes out of style.',
    ingredients: ['Premium Red Velvet Mix', 'Cream Cheese', 'Organic Cocoa', 'Buttermilk', 'Vanilla Bean'],
    servings: '8-10 slices'
  },
  {
    id: 4,
    name: 'Berry Waffles',
    image: berryWaffles,
    price: 10.99,
    description: 'Crispy waffles topped with fresh berries and whipped cream. Golden waffles with a perfect crispy exterior and fluffy interior, topped with seasonal berries and freshly whipped cream.',
    ingredients: ['Belgian Waffle Mix', 'Fresh Mixed Berries', 'Heavy Cream', 'Pure Honey', 'Organic Butter'],
    servings: '2 large waffles'
  },
  {
    id: 5,
    name: 'Artisan Donuts',
    image: artisanDonuts,
    price: 6.99,
    description: 'Handcrafted donuts with premium glazes and toppings. Each donut is carefully crafted by hand with unique flavors and artistic glazes. A gourmet take on the classic treat.',
    ingredients: ['Artisan Flour', 'Organic Yeast', 'Premium Glazes', 'Natural Flavors', 'Decorative Toppings'],
    servings: '6 donuts'
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);

  const product = products.find(p => p.id === parseInt(id || '0'));

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Product Not Found</h1>
          <Button onClick={() => navigate('/')} variant="outline">
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast({
      title: "Added to Cart",
      description: `${quantity} x ${product.name} added to your cart`,
    });
  };

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="pt-20">
        <div className="container mx-auto px-4 py-12">
          {/* Back Button */}
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="mb-8 hover:text-primary"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="aspect-square overflow-hidden rounded-2xl">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <h1 className="heading-section text-foreground mb-4">
                  {product.name}
                </h1>
                <p className="text-3xl font-bold text-primary mb-6">
                  ${product.price}
                </p>
                <p className="text-luxury text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Ingredients */}
              <div>
                <h3 className="font-playfair text-xl font-semibold text-foreground mb-3">
                  Ingredients
                </h3>
                <ul className="space-y-2">
                  {product.ingredients.map((ingredient, index) => (
                    <li key={index} className="text-muted-foreground flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Servings */}
              <div>
                <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">
                  Servings
                </h3>
                <p className="text-muted-foreground">{product.servings}</p>
              </div>

              {/* Quantity Selector */}
              <div>
                <h3 className="font-playfair text-xl font-semibold text-foreground mb-3">
                  Quantity
                </h3>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center border border-border rounded-lg">
                    <button
                      onClick={decrementQuantity}
                      className="p-2 hover:bg-muted transition-colors duration-300"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4 py-2 font-semibold">{quantity}</span>
                    <button
                      onClick={incrementQuantity}
                      className="p-2 hover:bg-muted transition-colors duration-300"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-muted-foreground">
                    Total: ${(product.price * quantity).toFixed(2)}
                  </p>
                </div>
              </div>

              {/* Add to Cart Button */}
              <Button
                onClick={handleAddToCart}
                className="btn-gold w-full text-lg py-6"
                size="lg"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;