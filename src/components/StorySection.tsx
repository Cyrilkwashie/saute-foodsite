import storyImage from '@/assets/story-saute.jpg';

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
                alt="Professional chef demonstrating saute cooking technique with flames and steam"
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
                At the heart of our kitchen is a passion for the perfect sauté technique and 
                artisanal dessert traditions. What began as a love for crafting beautiful 
                sweet treats has grown into a brand that celebrates the art of elevated 
                desserts and the joy of sharing indulgent moments.
              </p>
              
              <p>
                We're here to serve not just desserts, but experiences—crafted with care, 
                rooted in quality, and designed for today's sophisticated sweet tooth. Every 
                ingredient tells a story, every recipe carries tradition, and every 
                bite becomes a celebration.
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