import { useNavigate } from 'react-router-dom';
import chocolateCupcake from '@/assets/product-chocolate-cupcake.jpg';
import fluffyPancakes from '@/assets/product-fluffy-pancakes.jpg';
import redVelvetCake from '@/assets/product-red-velvet-cake.jpg';
import berryWaffles from '@/assets/product-berry-waffles.jpg';
import artisanDonuts from '@/assets/product-artisan-donuts.jpg';

const ProductsSection = () => {
  const navigate = useNavigate();
  const products = [
    {
      id: 1,
      name: 'Chocolate Cupcakes',
      image: chocolateCupcake,
      price: 12.99,
      description: 'Rich chocolate cupcakes with velvety frosting'
    },
    {
      id: 2,
      name: 'Fluffy Pancakes',
      image: fluffyPancakes,
      price: 8.99,
      description: 'Stack of golden, fluffy pancakes with syrup'
    },
    {
      id: 3,
      name: 'Red Velvet Cake',
      image: redVelvetCake,
      price: 24.99,
      description: 'Classic red velvet cake with cream cheese frosting'
    },
    {
      id: 4,
      name: 'Berry Waffles',
      image: berryWaffles,
      price: 10.99,
      description: 'Crispy waffles topped with fresh berries'
    },
    {
      id: 5,
      name: 'Artisan Donuts',
      image: artisanDonuts,
      price: 6.99,
      description: 'Handcrafted donuts with premium glazes'
    },
  ];

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-section text-foreground mb-6">
            Our Signature Products
          </h2>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="card-luxury group cursor-pointer"
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="heading-card text-foreground text-center group-hover:text-primary transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-primary font-bold text-center mt-2">${product.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button className="btn-gold">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;