import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CheckCircle, Clock, Users, ArrowRight } from "lucide-react";
import alterationsImage from "@/assets/alterations-service.jpg";

const Alterations = () => {
  const services = [
    "Suit alterations & tailoring",
    "Dress alterations & hemming", 
    "Trouser adjustments & shortening",
    "Jacket & blazer modifications",
    "General repairs & mending",
    "Resizing & refitting",
    "Button replacement & adjustments",
    "Zipper repairs & replacements"
  ];

  const process = [
    { step: "Book", description: "Schedule your appointment online or by phone" },
    { step: "Consult", description: "Professional fitting and alteration assessment" },
    { step: "Collect", description: "Pick up your perfectly fitted garments" }
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
                Expert Alterations:
                <span className="block text-primary">Perfect Fit, Enhanced Style</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Professional garment alterations for busy professionals in Windhoek. 
                Precision craftsmanship that ensures you look your absolute best for every important occasion.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="elegant" size="lg">
                  <Link to="/contact">Book Your Alteration</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/portfolio">View Our Work</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={alterationsImage} 
                alt="Professional alterations service"
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
              Comprehensive Alteration Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From minor adjustments to major alterations, we handle every garment with expert care
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-card rounded-lg p-6 shadow-soft hover:shadow-elegant transition-smooth">
                <CheckCircle className="text-primary mb-3" size={24} />
                <h3 className="font-medium text-card-foreground">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-sage-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-4">
              Why Professionals Choose Us
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background rounded-xl p-8 shadow-soft text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-3">Precision & Quality</h3>
              <p className="text-muted-foreground">
                Meticulous attention to detail ensures every alteration enhances your garment's fit and appearance
              </p>
            </div>
            
            <div className="bg-background rounded-xl p-8 shadow-soft text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-3">Quick Turnaround</h3>
              <p className="text-muted-foreground">
                Fast, reliable service designed for busy professionals who need their garments ready on time
              </p>
            </div>
            
            <div className="bg-background rounded-xl p-8 shadow-soft text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-3">Professional Image</h3>
              <p className="text-muted-foreground">
                Perfect fit enhances your confidence and professional appearance in every business setting
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-4">
              Simple Booking Process
            </h2>
            <p className="text-muted-foreground">
              Getting your perfect fit is easy with our streamlined process
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="w-20 h-20 bg-gradient-sage rounded-full flex items-center justify-center mx-auto mb-4 shadow-soft">
                  <span className="text-2xl font-playfair font-bold text-primary-foreground">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-playfair font-semibold mb-2">{item.step}</h3>
                <p className="text-muted-foreground">{item.description}</p>
                {index < process.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-10 -right-4 text-muted-foreground" size={20} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-6">
            Ready for the Perfect Fit?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book your alteration appointment today and experience the difference professional tailoring makes.
          </p>
          <Button asChild variant="hero" size="xl">
            <Link to="/contact">Book Your Appointment</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Alterations;