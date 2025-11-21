import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Send, CheckCircle2 } from "lucide-react";

const Contact = () => {
  const [searchParams] = useSearchParams();
  const churchFromUrl = searchParams.get("church") || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    message: churchFromUrl ? `I'm interested in learning more about partnering with ${churchFromUrl}.` : "",
    notifySimbangGabi: false
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.role) {
      newErrors.role = "Please select your role";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // In a real app, you would send this to a backend
      console.log("Form submitted:", formData);
      setSubmitted(true);
    }
  };

  const handleChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  if (submitted) {
    return (
      <Layout>
        <div className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10 text-primary" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Thank You for Reaching Out!
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                We've received your message and will get back to you soon. We're excited to connect 
                with you about Ezra and the future of Christian community building.
              </p>
              <Button onClick={() => setSubmitted(false)} variant="outline">
                Send Another Message
              </Button>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Header */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-secondary/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you're a church leader interested in partnering, a young adult with feedback, 
              or a mentor wanting to support our mission—we'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className={errors.name ? "border-destructive" : ""}
                />
                {errors.name && (
                  <p className="text-sm text-destructive mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className={errors.email ? "border-destructive" : ""}
                />
                {errors.email && (
                  <p className="text-sm text-destructive mt-1">{errors.email}</p>
                )}
              </div>

              {/* Role */}
              <div>
                <Label htmlFor="role">I am a... *</Label>
                <Select value={formData.role} onValueChange={(value) => handleChange("role", value)}>
                  <SelectTrigger className={errors.role ? "border-destructive" : ""}>
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="church-leader">Church Leader</SelectItem>
                    <SelectItem value="young-adult">Young Adult</SelectItem>
                    <SelectItem value="mentor">Mentor</SelectItem>
                    <SelectItem value="investor">Investor</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                {errors.role && (
                  <p className="text-sm text-destructive mt-1">{errors.role}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  rows={6}
                  placeholder="Tell us what you're interested in or any questions you have..."
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  className={errors.message ? "border-destructive" : ""}
                />
                {errors.message && (
                  <p className="text-sm text-destructive mt-1">{errors.message}</p>
                )}
              </div>

              {/* Notification Checkbox */}
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="notify"
                  checked={formData.notifySimbangGabi}
                  onCheckedChange={(checked) => handleChange("notifySimbangGabi", checked as boolean)}
                />
                <label
                  htmlFor="notify"
                  className="text-sm text-muted-foreground leading-relaxed cursor-pointer"
                >
                  Notify me about the Simbang Gabi pilot and future Ezra updates
                </label>
              </div>

              {/* Submit Button */}
              <Button type="submit" size="lg" className="w-full">
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Questions About Ezra?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We're here to help churches, young adults, and believers of all Christian traditions 
              build deeper community. Whether you're curious about the Simbang Gabi pilot, interested 
              in partnering with Ezra, or just want to learn more about our vision—reach out anytime.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
