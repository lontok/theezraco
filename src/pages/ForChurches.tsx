import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Calendar, Users, BookOpen, TrendingUp, Church, Mail } from "lucide-react";

const ForChurches = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 via-secondary/30 to-background py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Extending Community Beyond Sunday
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Ezra helps parishes reach young adults where they already are, building lasting connections 
              that extend your ministry throughout the week. Starting with the Filipino Simbang Gabi pilot in Phoenix.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Mail className="w-5 h-5 mr-2" />
                Talk to Us About a Pilot
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* What Churches Get */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Your Parish Gets
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tools and features designed to help you build deeper community
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-card border border-border rounded-xl p-8 hover:shadow-medium transition-all">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Calendar className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-3">
                Centralized Event Visibility
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                A single place where Filipino Catholics can see Simbang Gabi schedules and future parish events. 
                No more scattered Facebook posts or group texts—just one directory that young adults can rely on.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 hover:shadow-medium transition-all">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-3">
                Community Connection
                <span className="text-xs text-muted-foreground ml-2">(Coming Soon)</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Posts, small-group spaces, testimonies, and local stories. Give your parishioners tools to 
                stay connected between Sundays and deepen their relationships with each other.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 hover:shadow-medium transition-all">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <BookOpen className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-3">
                Guided Spiritual Growth
                <span className="text-xs text-muted-foreground ml-2">(Coming Soon)</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Personalized devotional plans and theological Q&A aligned with each Christian tradition. 
                Help your community grow in faith with content that respects your parish's teaching.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 hover:shadow-medium transition-all">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-3">
                Insights Over Vanity Metrics
                <span className="text-xs text-muted-foreground ml-2">(Coming Soon)</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Focus on depth of engagement, not just clicks and likes. Understand who's connecting, 
                how often they engage, and what content resonates with your community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pilot Details */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Church className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Pilot: Simbang Gabi 2026
              </h2>
              <p className="text-lg text-muted-foreground">
                Starting small, learning fast, and building something meaningful
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 border border-border shadow-soft">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-2">Onboard 7 Pilot Parishes</h3>
                    <p className="text-muted-foreground">
                      Partner with Filipino Catholic communities across greater Phoenix to showcase their 
                      Simbang Gabi celebrations in one central directory.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-2">Centralize Schedules & Locations</h3>
                    <p className="text-muted-foreground">
                      Make it easy for young adults to find Simbang Gabi masses near them, replacing 
                      scattered Facebook posts and group texts with one reliable source.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-2">Promote via Parish Channels</h3>
                    <p className="text-muted-foreground">
                      Work with parishes to share Ezra through bulletins, social media, and announcements, 
                      driving awareness among the Filipino Catholic community.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <span className="text-primary font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-2">Gather Feedback & Refine</h3>
                    <p className="text-muted-foreground">
                      Learn what works, what doesn't, and how Ezra can better serve parishes and their 
                      communities before scaling to other cultural groups and cities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Partner with Ezra?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you're a parish leader interested in the pilot or just want to learn more 
              about how Ezra can serve your community, we'd love to hear from you.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Mail className="w-5 h-5 mr-2" />
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ForChurches;
