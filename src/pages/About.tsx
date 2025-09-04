import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Heart, Award, Users, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-atelier.jpg";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Craftsmanship",
      description: "Every piece we create reflects our commitment to traditional techniques and modern precision."
    },
    {
      icon: Heart,
      title: "Precision",
      description: "Attention to detail in every stitch, ensuring perfection in both form and function."
    },
    {
      icon: Users,
      title: "Elegance",
      description: "Timeless designs that enhance beauty and sophistication in every project."
    },
    {
      icon: MapPin,
      title: "Personalization",
      description: "Tailored solutions that reflect your unique style and requirements."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6 text-balance">
            Our <span className="text-primary">Story</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
            Founded on a passion for perfection and a love for timeless craftsmanship, 
            Petal & Pin has become Windhoek's trusted atelier for discerning clients.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-6">
                Where Tradition Meets Innovation
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  At Petal & Pin, we believe that true craftsmanship lies in the perfect balance of 
                  time-honored techniques and modern innovation. Our journey began with a simple vision: 
                  to create a space where precision meets artistry, and where every stitch tells a story of excellence.
                </p>
                <p>
                  Located in the heart of Windhoek, we've built our reputation on two pillars of expertise: 
                  professional alterations that ensure the perfect fit for busy professionals, and bespoke 
                  textile creations that transform hospitality spaces into havens of comfort and style.
                </p>
                <p>
                  Our commitment extends beyond mere technical skill. We understand that every garment 
                  carries personal significance, and every textile project represents a vision of beauty 
                  and functionality. This understanding drives us to approach each project with the care, 
                  attention, and respect it deserves.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Our atelier workspace"
                className="w-full rounded-2xl shadow-elegant"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-sage-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-4">
              Our Values & Philosophy
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every decision and inspire every creation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-background rounded-xl p-6 shadow-soft text-center hover:shadow-elegant transition-smooth group">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-smooth">
                  <value.icon className="text-primary group-hover:text-primary-foreground transition-smooth" size={24} />
                </div>
                <h3 className="text-xl font-playfair font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Expertise */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-4">
              Experience & Expertise
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Years of dedicated practice have honed our skills across diverse projects and techniques
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-card rounded-xl p-8 shadow-soft">
              <h3 className="text-2xl font-playfair font-semibold mb-4 text-primary">Professional Alterations</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our expertise in garment alterations spans decades of working with diverse fabrics, 
                styles, and client needs. From subtle adjustments to complete reconstructions, 
                we approach each alteration with the precision of a master craftsperson.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">Advanced tailoring techniques</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">Fabric expertise across all materials</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">Pattern adjustment and fitting mastery</span>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl p-8 shadow-soft">
              <h3 className="text-2xl font-playfair font-semibold mb-4 text-primary">Custom Textiles</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our textile design and creation services draw from extensive experience in hospitality 
                interiors. We understand the unique demands of commercial environments while never 
                compromising on aesthetic beauty and guest comfort.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">Interior design consultation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">Commercial-grade material sourcing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">Custom design and installation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Connection */}
      <section className="py-16 gradient-warm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-6">
            Proudly Namibian
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            As a Windhoek-based business, we take pride in contributing to our local community. 
            Our deep understanding of the Namibian climate, lifestyle, and aesthetic preferences 
            allows us to create solutions that are perfectly suited to our environment and culture.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-background/80 backdrop-blur-sm rounded-lg p-6 shadow-soft">
              <h4 className="font-playfair font-semibold mb-2">Local Materials</h4>
              <p className="text-sm text-muted-foreground">Supporting local suppliers whenever possible</p>
            </div>
            <div className="bg-background/80 backdrop-blur-sm rounded-lg p-6 shadow-soft">
              <h4 className="font-playfair font-semibold mb-2">Climate Conscious</h4>
              <p className="text-sm text-muted-foreground">Fabrics and designs suited to Namibian conditions</p>
            </div>
            <div className="bg-background/80 backdrop-blur-sm rounded-lg p-6 shadow-soft">
              <h4 className="font-playfair font-semibold mb-2">Community Focus</h4>
              <p className="text-sm text-muted-foreground">Building lasting relationships with our clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We'd love to discuss your next project and show you how our passion for perfection 
            can bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="elegant" size="lg">
              <Link to="/contact">Get in Touch</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;