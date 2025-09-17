import alooJeera from '@/assets/recipe-aloo-jeera.jpg';
import choleBhature from '@/assets/recipe-chole-bhature.jpg';
import tandooriChicken from '@/assets/recipe-tandoori-chicken.jpg';
import butterChicken from '@/assets/recipe-butter-chicken.jpg';

const RecipesSection = () => {
  const recipes = [
    {
      id: 1,
      name: 'Aloo Jeera',
      description: 'Simple, fragrant spiced potatoes with cumin.',
      image: alooJeera,
    },
    {
      id: 2,
      name: 'Chole Bhature',
      description: 'Crispy, fluffy bread paired with spicy chickpea curry.',
      image: choleBhature,
    },
    {
      id: 3,
      name: 'Tandoori Chicken',
      description: 'Smoky, charred perfection marinated in yogurt and spices.',
      image: tandooriChicken,
    },
    {
      id: 4,
      name: 'Butter Chicken',
      description: 'Rich, creamy, and bursting with flavor.',
      image: butterChicken,
    },
  ];

  return (
    <section id="recipes" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-section text-foreground mb-6">
            Teaser of Featured Indian Recipes
          </h2>
        </div>

        {/* Recipes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="card-luxury group cursor-pointer">
              <div className="aspect-square overflow-hidden">
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="heading-card text-foreground group-hover:text-primary transition-colors duration-300">
                  {recipe.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {recipe.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Explore More Button */}
        <div className="text-center">
          <button className="btn-gold">
            Explore More
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecipesSection;