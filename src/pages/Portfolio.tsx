import { useState } from "react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import alterationsImage from "@/assets/alterations-service.jpg";
import textilesImage from "@/assets/custom-textiles.jpg";

const Portfolio = () => {
  const alterationsProjects = [
    {
      id: 1,
      title: "Business Suit Transformation",
      description: "Complete alterations for a professional wardrobe update",
      image: alterationsImage,
      category: "Suit Alterations"
    },
    {
      id: 2,
      title: "Wedding Dress Resizing",
      description: "Perfect fit alterations for a special day",
      image: alterationsImage,
      category: "Dress Alterations"
    },
    {
      id: 3,
      title: "Executive Wardrobe",
      description: "Multiple garment alterations for business professional",
      image: alterationsImage,
      category: "Professional Wear"
    }
  ];

  const textilesProjects = [
    {
      id: 1,
      title: "Boutique Lodge Complete Makeover",
      description: "Custom curtains, bedding, and soft furnishings",
      image: textilesImage,
      category: "Lodge Textiles"
    },
    {
      id: 2,
      title: "Guest House Bedroom Suite",
      description: "Luxury bedding and window treatments",
      image: textilesImage,
      category: "Hospitality"
    },
    {
      id: 3,
      title: "Safari Camp Interiors",
      description: "Durable and elegant outdoor-inspired textiles",
      image: textilesImage,
      category: "Safari Lodge"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6 text-balance">
            Our <span className="text-primary">Portfolio</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
            Discover the quality and craftsmanship that defines our work. 
            From precision alterations to bespoke textiles, each project showcases our commitment to excellence.
          </p>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="alterations" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-12">
              <TabsTrigger value="alterations" className="text-lg py-3">
                Garment Alterations
              </TabsTrigger>
              <TabsTrigger value="textiles" className="text-lg py-3">
                Custom Textiles
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="alterations">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {alterationsProjects.map((project) => (
                  <div key={project.id} className="bg-card rounded-xl overflow-hidden shadow-elegant hover:shadow-glow transition-smooth group">
                    <div className="relative overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-playfair font-semibold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground text-sm">{project.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="textiles">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {textilesProjects.map((project) => (
                  <div key={project.id} className="bg-card rounded-xl overflow-hidden shadow-elegant hover:shadow-glow transition-smooth group">
                    <div className="relative overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-playfair font-semibold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground text-sm">{project.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-16 bg-sage-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-4">
              Transformation Stories
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See how we transform garments and spaces with our expert craftsmanship
            </p>
          </div>
          
          <div className="bg-background rounded-2xl p-8 shadow-elegant">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-playfair font-semibold mb-4">The Petal & Pin Difference</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Each project in our portfolio represents more than just skilled craftsmanship—it's 
                  a story of transformation. Whether it's giving new life to a cherished garment or 
                  creating custom textiles that define a space, we bring passion and precision to every stitch.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Before & after consultations</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Detailed project documentation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Quality guarantee on all work</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src={alterationsImage} 
                  alt="Portfolio showcase"
                  className="w-full rounded-xl shadow-soft"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-6">
            Ready to Create Your Own Success Story?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our portfolio of satisfied clients and experience the Petal & Pin difference for yourself.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="elegant" size="lg">
              <a href="/contact">Start Your Project</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="/about">Learn About Us</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;