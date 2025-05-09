
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Github, Linkedin, Mail, MessageSquare, Twitter } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      
      setFormData({
        name: '',
        email: '',
        message: '',
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="section bg-portfolio-50">
      <div className="container-custom">
        <h2 className="section-heading">Get In Touch</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl">
          Have a project in mind or want to discuss a potential collaboration? Feel free to reach out!
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="bg-white"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="bg-white"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  required
                  className="min-h-32 bg-white"
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-portfolio-700 hover:bg-portfolio-800"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
          
          <div className="space-y-8">
            <Card className="border-portfolio-200 bg-white/50 backdrop-blur-sm">
              <CardContent className="pt-6">
                <h3 className="text-xl font-display font-semibold text-portfolio-800 mb-4">Connect With Me</h3>
                <div className="space-y-4">
                  <a 
                    href="mailto:contact@example.com" 
                    className="flex items-center gap-3 text-gray-700 hover:text-portfolio-700 transition-colors"
                  >
                    <Mail className="h-5 w-5 text-portfolio-600" />
                    <span>contact@example.com</span>
                  </a>
                  
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-3 text-gray-700 hover:text-portfolio-700 transition-colors"
                  >
                    <Linkedin className="h-5 w-5 text-portfolio-600" />
                    <span>linkedin.com/in/yourprofile</span>
                  </a>
                  
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-3 text-gray-700 hover:text-portfolio-700 transition-colors"
                  >
                    <Github className="h-5 w-5 text-portfolio-600" />
                    <span>github.com/yourusername</span>
                  </a>
                  
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-3 text-gray-700 hover:text-portfolio-700 transition-colors"
                  >
                    <Twitter className="h-5 w-5 text-portfolio-600" />
                    <span>twitter.com/yourhandle</span>
                  </a>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-portfolio-200 bg-white/50 backdrop-blur-sm">
              <CardContent className="pt-6">
                <h3 className="text-xl font-display font-semibold text-portfolio-800 mb-4">Office Hours</h3>
                <p className="text-gray-600 mb-2">Available for virtual meetings:</p>
                <p className="text-gray-700">Monday - Friday: 9:00 AM - 5:00 PM (PST)</p>
                <div className="mt-6">
                  <Button className="flex items-center bg-portfolio-700 hover:bg-portfolio-800 w-full justify-center">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Schedule a Call
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
