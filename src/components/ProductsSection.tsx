import basmatiRice from '@/assets/product-basmati-rice.jpg';
import golGappe from '@/assets/product-gol-gappe.jpg';
import yogurtSalad from '@/assets/product-yogurt-salad.jpg';
import coconutCurry from '@/assets/product-coconut-curry.jpg';
import chaiParatha from '@/assets/product-chai-paratha.jpg';

const ProductsSection = () => {
  const products = [
    {
      id: 1,
      name: 'Royal Basmati Rice',
      image: basmatiRice,
    },
    {
      id: 2,
      name: 'Tamarind Gol Gappe Kit',
      image: golGappe,
    },
    {
      id: 3,
      name: 'Minty Yogurt Salad',
      image: yogurtSalad,
    },
    {
      id: 4,
      name: 'Coconut Curry Mix',
      image: coconutCurry,
    },
    {
      id: 5,
      name: 'Chai Paratha Combo',
      image: chaiParatha,
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