import heroImage from '@/assets/hero-bg-brunch.jpg';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Gourmet brunch spread with pancakes, eggs benedict, and artisan coffee"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/60 to-background/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="heading-hero text-foreground mb-6 animate-fade-in">
          Bringing{' '}
          <span className="text-gradient-gold">Gourmet Mornings</span>{' '}
          to Your Table
        </h1>
        
        <p className="text-luxury text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-delay">
          Experience the art of elevated brunch with premium ingredients, artisan mixes, 
          and recipes that transform every morning into a luxurious dining experience.
        </p>

        <button className="btn-gold animate-fade-in-delay-2">
          Explore Our Products
        </button>
      </div>

      {/* Floating Coffee Bean Elements */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary rounded-full animate-spice opacity-60"></div>
      <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-accent rounded-full animate-spice opacity-40" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-primary rounded-full animate-spice opacity-70" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-accent rounded-full animate-spice opacity-50" style={{ animationDelay: '0.5s' }}></div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;