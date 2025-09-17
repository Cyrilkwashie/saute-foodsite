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
                alt="Two founders of Sauté - passionate about Indian cuisine"
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
                At the heart of our kitchen is a passion for bold flavors and 
                timeless tradition. What began as a love for authentic recipes 
                has grown into a brand that celebrates the richness and diversity 
                of Indian cuisine.
              </p>
              
              <p>
                We're here to serve not just food, but memories—crafted with care, 
                rooted in tradition, and designed for today's taste. Every spice 
                tells a story, every recipe carries heritage, and every meal 
                creates connections.
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