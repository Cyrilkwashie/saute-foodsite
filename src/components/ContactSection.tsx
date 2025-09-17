import { useState } from 'react';
import mapImage from '@/assets/map.jpg';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-section text-foreground mb-6">
            Let's Stay in Touch
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="input-luxury w-full"
                  required
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="input-luxury w-full"
                  required
                />
              </div>
              
              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="input-luxury w-full resize-vertical"
                  required
                />
              </div>

              <button
                type="submit"
                className="btn-gold w-full md:w-auto"
              >
                Send
              </button>
            </form>
          </div>

          {/* Map */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl h-full min-h-[400px]">
              <img
                src={mapImage}
                alt="World map showing India and Nepal with location marker"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-background/10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;