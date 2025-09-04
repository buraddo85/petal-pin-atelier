import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Home, Palette, Shield, Truck, ArrowRight } from "lucide-react";
import textilesImage from "@/assets/custom-textiles.jpg";

const CustomTextiles = () => {
  const services = [
    {
      icon: Home,
      title: "Custom Curtains",
      description: "Bespoke window treatments tailored to your exact specifications and style preferences"
    },
    {
      icon: Palette,
      title: "Luxury Bedding",
      description: "Premium quality bed linens, pillowcases, and bedding sets for ultimate guest comfort"
    },
    {
      icon: Shield,
      title: "Upholstery & Cushions",
      description: "Custom cushions, throws, and upholstery that enhance your interior design"
    },
    {
      icon: Truck,
      title: "Design Consultation",
      description: "Expert advice on fabrics, colors, and designs that match your brand and aesthetic"
    }
  ];

  const benefits = [
    "Durable, high-quality materials built to last",
    "Unique designs that reflect your brand identity", 
    "Consistent branding across all textile elements",
    "Premium materials sourced locally and internationally",
    "Local Windhoek expertise with personalized service",
    "Professional installation and aftercare support"
  ];

  const process = [
    { step: "Consult", description: "Discuss your needs, style preferences, and space requirements" },
    { step: "Design", description: "Create custom designs and select premium fabrics together" },
    { step: "Create", description: "Handcraft your bespoke textiles with precision and care" },
    { step: "Deliver", description: "Professional installation and styling in your space" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6 text-balance">
                Bespoke Textiles:
                <span className="block text-primary">Curtains, Linen & More for Hospitality</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Transform your lodge or guest house with custom soft furnishings that enhance guest experience 
                and reflect your unique brand identity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="elegant" size="lg">
                  <Link to="/contact">Request a Quote</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/portfolio">View Projects</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={textilesImage} 
                alt="Custom textiles for hospitality"
                className="w-full rounded-2xl shadow-elegant"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-4">
              Custom Textile Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From concept to creation, we craft bespoke textiles that elevate your hospitality business
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-card rounded-xl p-8 shadow-soft hover:shadow-elegant transition-smooth group">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-smooth">
                  <service.icon className="text-primary group-hover:text-primary-foreground transition-smooth" size={24} />
                </div>
                <h3 className="text-xl font-playfair font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-sage-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-6">
                Why Lodges & Guest Houses Choose Us
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our custom textiles are specifically designed for the hospitality industry, 
                combining beauty with durability to create memorable guest experiences.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-background rounded-2xl p-8 shadow-elegant">
              <blockquote className="text-lg font-playfair italic mb-4">
                "Petal & Pin transformed our guest rooms with beautiful custom curtains and bedding. 
                Our guests constantly compliment the elegant touches that make their stay special."
              </blockquote>
              <cite className="text-muted-foreground font-medium">
                — Maria K., Boutique Lodge Owner
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-4">
              Custom Project Process
            </h2>
            <p className="text-muted-foreground">
              From initial consultation to final installation, we guide you through every step
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="w-20 h-20 bg-gradient-rose rounded-full flex items-center justify-center mx-auto mb-4 shadow-soft">
                  <span className="text-2xl font-playfair font-bold text-accent-foreground">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-lg font-playfair font-semibold mb-2">{item.step}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
                {index < process.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-10 -right-3 text-muted-foreground" size={16} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fabric Selection */}
      <section className="py-16 gradient-warm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-6">
            Premium Fabric Selection
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            We source the finest fabrics from local and international suppliers, ensuring your custom textiles 
            not only look beautiful but also withstand the demands of hospitality use.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-background/80 backdrop-blur-sm rounded-lg p-6 shadow-soft">
              <h3 className="font-playfair font-semibold mb-2">Natural Fibers</h3>
              <p className="text-sm text-muted-foreground">Cotton, linen, and silk for luxury comfort</p>
            </div>
            <div className="bg-background/80 backdrop-blur-sm rounded-lg p-6 shadow-soft">
              <h3 className="font-playfair font-semibold mb-2">Performance Fabrics</h3>
              <p className="text-sm text-muted-foreground">Stain-resistant and easy-care solutions</p>
            </div>
            <div className="bg-background/80 backdrop-blur-sm rounded-lg p-6 shadow-soft">
              <h3 className="font-playfair font-semibold mb-2">Eco-Friendly Options</h3>
              <p className="text-sm text-muted-foreground">Sustainable materials for conscious brands</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss your custom textile project and create something beautiful together.
          </p>
          <Button asChild variant="hero" size="xl">
            <Link to="/contact">Request Custom Project Quote</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CustomTextiles;