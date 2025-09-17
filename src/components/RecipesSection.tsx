import eggsBenedict from '@/assets/recipe-eggs-benedict.jpg';
import fluffyPancakes from '@/assets/recipe-fluffy-pancakes.jpg';
import perfectAvocadoToast from '@/assets/recipe-perfect-avocado-toast.jpg';
import goldenFrenchToast from '@/assets/recipe-golden-french-toast.jpg';

const RecipesSection = () => {
  const recipes = [
    {
      id: 1,
      name: 'Classic Eggs Benedict',
      description: 'Perfectly poached eggs with rich hollandaise sauce.',
      image: eggsBenedict,
    },
    {
      id: 2,
      name: 'Fluffy Pancakes',
      description: 'Light, airy pancakes with golden maple syrup.',
      image: fluffyPancakes,
    },
    {
      id: 3,
      name: 'Perfect Avocado Toast',
      description: 'Creamy avocado on artisan bread with poached egg.',
      image: perfectAvocadoToast,
    },
    {
      id: 4,
      name: 'Golden French Toast',
      description: 'Crispy outside, custardy inside with fresh berries.',
      image: goldenFrenchToast,
    },
  ];

  return (
    <section id="recipes" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-section text-foreground mb-6">
            Featured Brunch Recipes
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