import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", inquiryType: "", message: "" });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6 text-balance">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
            Ready to start your project? We'd love to hear from you. 
            Contact us today for a consultation and discover how we can bring your vision to life.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card rounded-2xl p-8 shadow-elegant">
              <h2 className="text-2xl font-playfair font-semibold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input 
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                      className="transition-smooth focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input 
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                      className="transition-smooth focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="transition-smooth focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="inquiry-type">Inquiry Type *</Label>
                    <Select value={formData.inquiryType} onValueChange={(value) => handleInputChange("inquiryType", value)}>
                      <SelectTrigger className="transition-smooth focus:ring-2 focus:ring-primary">
                        <SelectValue placeholder="Select service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="alterations">Garment Alterations</SelectItem>
                        <SelectItem value="custom-textiles">Custom Textiles</SelectItem>
                        <SelectItem value="consultation">Design Consultation</SelectItem>
                        <SelectItem value="other">Other Inquiry</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea 
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Please describe your project or inquiry in detail..."
                    className="min-h-32 transition-smooth focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                
                <Button type="submit" variant="elegant" size="lg" className="w-full group">
                  <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-playfair font-semibold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Location</h3>
                      <p className="text-muted-foreground">
                        Windhoek, Namibia<br />
                        <span className="text-sm">Serving the greater Windhoek area</span>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-muted-foreground">
                        +264 XX XXX XXXX<br />
                        <span className="text-sm">Call for appointments and consultations</span>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">
                        info@petalandpin.com<br />
                        <span className="text-sm">We respond within 24 hours</span>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Operating Hours</h3>
                      <div className="text-muted-foreground space-y-1">
                        <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                        <p>Saturday: 9:00 AM - 1:00 PM</p>
                        <p>Sunday: Closed</p>
                        <span className="text-sm block mt-2">
                          Appointments available outside regular hours by arrangement
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Services */}
              <div className="bg-sage-muted rounded-xl p-6">
                <h3 className="text-lg font-playfair font-semibold mb-4">Quick Service Options</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Alteration Consultation</span>
                    <span className="text-sm font-medium text-primary">Free</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Express Alterations</span>
                    <span className="text-sm font-medium text-primary">24-48 hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Custom Textile Quote</span>
                    <span className="text-sm font-medium text-primary">48 hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Home/Business Visit</span>
                    <span className="text-sm font-medium text-primary">Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-sage-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-playfair font-semibold mb-4">Visit Our Atelier</h2>
            <p className="text-muted-foreground">
              Located in the heart of Windhoek, our workshop welcomes clients by appointment
            </p>
          </div>
          
          <div className="bg-background rounded-2xl p-8 shadow-elegant text-center">
            <div className="max-w-md mx-auto">
              <MapPin className="text-primary mx-auto mb-4" size={48} />
              <h3 className="text-xl font-playfair font-semibold mb-2">Windhoek Workshop</h3>
              <p className="text-muted-foreground mb-6">
                Our atelier is conveniently located in Windhoek, providing easy access for clients 
                throughout the city and surrounding areas.
              </p>
              <p className="text-sm text-muted-foreground">
                Exact address provided upon appointment booking for privacy and security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-playfair font-semibold mb-4">Frequently Asked Questions</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">How long do alterations take?</h3>
                <p className="text-muted-foreground text-sm">
                  Most alterations are completed within 3-5 business days. Express service available for urgent requests.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Do you offer design consultations?</h3>
                <p className="text-muted-foreground text-sm">
                  Yes, we provide comprehensive design consultations for custom textile projects, including fabric selection and space planning.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">What is your pricing structure?</h3>
                <p className="text-muted-foreground text-sm">
                  Pricing varies by project complexity. We provide detailed quotes after consultation to ensure transparency.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Do you work with hospitality businesses outside Windhoek?</h3>
                <p className="text-muted-foreground text-sm">
                  Yes, we serve lodges and guest houses throughout Namibia. Travel costs may apply for locations outside Windhoek.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">What fabrics do you work with?</h3>
                <p className="text-muted-foreground text-sm">
                  We work with all fabric types, from delicate silks to heavy outdoor materials, and can source specialty fabrics as needed.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Do you offer guarantees on your work?</h3>
                <p className="text-muted-foreground text-sm">
                  All our work comes with a satisfaction guarantee. We'll make adjustments until you're completely happy with the results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;