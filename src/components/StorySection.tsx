import storyImage from '@/assets/story-people.jpg';

const StorySection = () => {
  return (
    <section id="story" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <img
                src={storyImage}
                alt="Two founders of Brunch & Co - passionate about gourmet breakfast"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="heading-section text-foreground">
              Our Story
            </h2>
            
            <div className="space-y-4 text-luxury text-muted-foreground">
              <p>
                At the heart of our kitchen is a passion for perfect mornings and 
                timeless brunch traditions. What began as a love for weekend gatherings 
                has grown into a brand that celebrates the art of elevated breakfast 
                and the joy of sharing meals.
              </p>
              
              <p>
                We're here to serve not just food, but experiences—crafted with care, 
                rooted in quality, and designed for today's sophisticated palate. Every 
                ingredient tells a story, every recipe carries tradition, and every 
                morning becomes a celebration.
              </p>
            </div>

            <button className="btn-gold">
              Discover Our Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;