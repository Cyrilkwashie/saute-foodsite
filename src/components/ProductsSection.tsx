import pancakeMix from '@/assets/product-pancake-mix.jpg';
import avocadoToast from '@/assets/product-avocado-toast.jpg';
import coffeeBlend from '@/assets/product-coffee-blend.jpg';
import frenchToast from '@/assets/product-french-toast.jpg';
import breakfastBurrito from '@/assets/product-breakfast-burrito.jpg';

const ProductsSection = () => {
  const products = [
    {
      id: 1,
      name: 'Artisan Pancake Mix',
      image: pancakeMix,
    },
    {
      id: 2,
      name: 'Avocado Toast Kit',
      image: avocadoToast,
    },
    {
      id: 3,
      name: 'Gourmet Coffee Blend',
      image: coffeeBlend,
    },
    {
      id: 4,
      name: 'French Toast Batter',
      image: frenchToast,
    },
    {
      id: 5,
      name: 'Breakfast Burrito Kit',
      image: breakfastBurrito,
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
            <div key={product.id} className="card-luxury group cursor-pointer">
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