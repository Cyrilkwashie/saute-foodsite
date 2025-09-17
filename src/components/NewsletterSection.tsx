import { useState } from 'react';
import { Mail } from 'lucide-react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription here
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <section className="py-20 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="heading-section text-foreground mb-6">
              Stay in the Flavor Loop
            </h2>
            <p className="text-luxury text-muted-foreground max-w-2xl mx-auto">
              Get the latest recipes, exclusive offers, and tasty updates 
              delivered straight to your inbox.
            </p>
          </div>

          {/* Newsletter Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto">
            <div className="relative flex-1 w-full">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-luxury w-full pr-4"
                required
              />
            </div>
            
            <button
              type="submit"
              className="btn-gold flex items-center gap-2 w-full sm:w-auto"
            >
              Subscribe Now
            </button>
          </form>

          {/* Envelope Icon */}
          <div className="mt-12 flex justify-center">
            <div className="p-4 rounded-full bg-primary/10">
              <Mail className="w-8 h-8 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;