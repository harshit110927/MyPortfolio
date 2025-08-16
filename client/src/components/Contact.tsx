import { useEffect, useRef, useState } from "react";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const contactRef = useRef<HTMLElement>(null);
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: ""
  });

  const handleFormSubmit = () => {
    const subject = encodeURIComponent(`Portfolio Contact: ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    const mailtoLink = `mailto:harshit110927@gmail.com?subject=${subject}&body=${body}`;
    
    window.open(mailtoLink, '_blank');
    
    toast({
      title: "Email client opened!",
      description: "Your default email client should open with the message pre-filled."
    });
    
    setFormData({ name: "", email: "", message: "" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to send a message.",
        variant: "destructive"
      });
      return;
    }
    handleFormSubmit();
  };

  return (
    <section id="contact" ref={contactRef} className="py-20 px-6 bg-dark-card/30 fade-in">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">Get In Touch</h2>
        <p className="text-text-secondary text-center mb-12 text-lg">
          Let's discuss opportunities and collaborate on exciting projects.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-accent-blue/20 rounded-full flex items-center justify-center">
                <Mail className="text-accent-blue" size={20} />
              </div>
              <div>
                <h3 className="font-semibold">Email</h3>
                <a
                  href="mailto:harshit110927@gmail.com"
                  className="text-text-secondary hover:text-accent-blue transition-colors"
                >
                  harshit110927@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-accent-blue/20 rounded-full flex items-center justify-center">
                <Github className="text-accent-blue" size={20} />
              </div>
              <div>
                <h3 className="font-semibold">GitHub</h3>
                <a
                  href="https://github.com/harshit110927"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-accent-blue transition-colors"
                >
                  github.com/harshit110927
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-accent-blue/20 rounded-full flex items-center justify-center">
                <Linkedin className="text-accent-blue" size={20} />
              </div>
              <div>
                <h3 className="font-semibold">LinkedIn</h3>
                <a
                  href="https://linkedin.com/in/harshit110927"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-accent-blue transition-colors"
                >
                  linkedin.com/in/harshit110927
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name" className="text-sm font-medium mb-2 block">
                Name
              </Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-lg focus:outline-none focus:border-accent-blue transition-colors text-text-primary"
                placeholder="Your Name"
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-sm font-medium mb-2 block">
                Email
              </Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-lg focus:outline-none focus:border-accent-blue transition-colors text-text-primary"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <Label htmlFor="message" className="text-sm font-medium mb-2 block">
                Message
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                required
                className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-lg focus:outline-none focus:border-accent-blue transition-colors text-text-primary resize-none"
                placeholder="Tell me about your project or opportunity..."
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-accent-blue hover:bg-accent-blue-hover text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 hover-glow flex items-center justify-center space-x-2"
            >
              <Send size={16} />
              <span>Send Message</span>
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
