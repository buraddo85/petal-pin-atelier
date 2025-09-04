import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, Scissors, Home, Award, Clock, Heart } from "lucide-react";
import heroImage from "@/assets/hero-atelier.jpg";
import alterationsImage from "@/assets/alterations-service.jpg";
import textilesImage from "@/assets/custom-textiles.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center text-center px-4"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-4xl mx-auto text-primary-foreground">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 text-balance">
            Crafting Perfection,
            <span className="block text-gold">Stitch by Stitch</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-balance opacity-90 max-w-2xl mx-auto">
            Expert alterations for professionals and bespoke textiles for hospitality businesses in Windhoek
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="xl" className="group">
              <Link to="/alterations">
                Precision Alterations
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="hero" size="xl" className="group">
              <Link to="/custom-textiles">
                Handcrafted Homeware
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-6 text-balance">
            Where Craftsmanship Meets Excellence
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            At Petal & Pin, we combine traditional tailoring techniques with modern precision to deliver 
            exceptional results. From professional alterations to custom hospitality textiles, 
            every piece is crafted with meticulous attention to detail.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-sage-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Alterations */}
            <div className="bg-background rounded-2xl p-8 shadow-elegant hover:shadow-glow transition-smooth group">
              <div className="mb-6">
                <img 
                  src={alterationsImage} 
                  alt="Professional alterations service" 
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />
                <div className="flex items-center mb-4">
                  <Scissors className="text-primary mr-3" size={24} />
                  <h3 className="text-2xl md:text-3xl font-playfair font-semibold">
                    Expert Alterations
                  </h3>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Perfect fit, enhanced style. Professional alterations for suits, dresses, and garments. 
                Precision tailoring that ensures you look your absolute best for every important occasion.
              </p>
              <ul className="space-y-2 mb-8 text-sm">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Suit & dress alterations
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Professional hemming & resizing
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Quick turnaround for busy professionals
                </li>
              </ul>
              <Button asChild variant="elegant" className="w-full group">
                <Link to="/alterations">
                  Learn More
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            {/* Custom Textiles */}
            <div className="bg-background rounded-2xl p-8 shadow-elegant hover:shadow-glow transition-smooth group">
              <div className="mb-6">
                <img 
                  src={textilesImage} 
                  alt="Custom textiles for hospitality" 
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />
                <div className="flex items-center mb-4">
                  <Home className="text-primary mr-3" size={24} />
                  <h3 className="text-2xl md:text-3xl font-playfair font-semibold">
                    Bespoke Textiles
                  </h3>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Custom curtains, bedding, and soft furnishings for lodges and guest houses. 
                Durable, elegant designs that enhance your hospitality brand and guest experience.
              </p>
              <ul className="space-y-2 mb-8 text-sm">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Custom curtains & window treatments
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Luxury bedding & pillowcases
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Design consultation & fabric sourcing
                </li>
              </ul>
              <Button asChild variant="elegant" className="w-full group">
                <Link to="/custom-textiles">
                  Learn More
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* USPs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-4">
              Why Choose Petal & Pin?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience the difference that true craftsmanship makes
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-sage-muted rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-smooth">
                <Award className="text-sage group-hover:text-primary-foreground transition-smooth" size={24} />
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-2">Meticulous Craftsmanship</h3>
              <p className="text-muted-foreground text-sm">
                Every stitch is placed with precision and care, ensuring exceptional quality in every piece
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-sage-muted rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-smooth">
                <Heart className="text-sage group-hover:text-primary-foreground transition-smooth" size={24} />
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-2">Personalized Service</h3>
              <p className="text-muted-foreground text-sm">
                We work closely with each client to understand their unique needs and preferences
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-sage-muted rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-smooth">
                <Clock className="text-sage group-hover:text-primary-foreground transition-smooth" size={24} />
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-2">Windhoek's Trusted Atelier</h3>
              <p className="text-muted-foreground text-sm">
                Local expertise you can rely on, with a reputation built on quality and reliability
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 gradient-warm">
        <div className="max-w-4xl mx-auto text-center px-4">
          <blockquote className="text-xl md:text-2xl font-playfair italic mb-6 text-balance">
            "The attention to detail and quality of work at Petal & Pin is exceptional. 
            They transformed our guest house with beautiful custom textiles that our guests absolutely love."
          </blockquote>
          <cite className="text-muted-foreground font-medium">
            — Sarah M., Windhoek Guest Lodge Owner
          </cite>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-sage text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-6">
            Ready to Experience Excellence?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get in touch today for a consultation and discover how we can help you achieve the perfect fit or create stunning textiles for your space.
          </p>
          <Button asChild variant="hero" size="xl">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;