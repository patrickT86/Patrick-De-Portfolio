import { useState } from "react";
import { Layout } from "@/components/Layout";
import { SectionTitle } from "@/components/SectionTitle";
import { Map } from "@/components/Map";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Github } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Contact Me" 
            subtitle="Let's connect and discuss opportunities"
          />

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 border-2 border-border bg-card">
                  <Mail className="h-6 w-6 mt-1 shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email</h3>
                    <a 
                      href="mailto:patrick.tracey86@zohomail.com" 
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      patrick.tracey86@zohomail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 border-2 border-border bg-card">
                  <Phone className="h-6 w-6 mt-1 shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Phone</h3>
                    <a 
                      href="tel:+12068097210" 
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      +1 (206) 809-7210
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 border-2 border-border bg-card">
                  <MapPin className="h-6 w-6 mt-1 shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Location</h3>
                    <p className="text-muted-foreground">
                      Houston, Texas<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 border-2 border-border bg-card">
                  <Github className="h-6 w-6 mt-1 shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">GitHub</h3>
                    <a 
                      href="https://github.com/lkrauleidis" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      github.com/lkrauleidis
                    </a>
                  </div>
                </div>
              </div>

              {/* Map */}
              <Map />
            </div>

            {/* Contact Form */}
            <div className="border-2 border-border p-6 md:p-8 bg-card">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="border-2"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border-2"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="border-2"
                    placeholder="What's this about?"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="border-2 min-h-[150px]"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full border-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
