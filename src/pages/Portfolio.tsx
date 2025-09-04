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


      <Footer />
    </div>
  );
};

export default Portfolio;