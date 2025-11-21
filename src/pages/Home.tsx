import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Heart, Church, TrendingUp, MapPin } from "lucide-react";
import Layout from "@/components/Layout";

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDI0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00ek0xMiAxNmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMCAyNGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Connecting believers under one communion
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Ezra helps Christians live their faith throughout the week, connecting believers across traditions 
              and helping churches reach young adults. Starting with Filipino Catholic Simbang Gabi in greater Phoenix.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/simbang-gabi">
                <Button size="lg" className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90 shadow-large">
                  Find Simbang Gabi Near Me
                </Button>
              </Link>
              <Link to="/for-churches">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  For Churches
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How Ezra Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Building community one connection at a time
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-card border border-border hover:shadow-medium transition-all">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-3">
                Discover Events
              </h3>
              <p className="text-muted-foreground">
                Find Simbang Gabi masses and other Filipino Catholic events across greater Phoenix in one central location.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-card border border-border hover:shadow-medium transition-all">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-3">
                Stay Connected
              </h3>
              <p className="text-muted-foreground">
                Join communities, share testimonies, and stay engaged with your faith beyond Sunday morning.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-card border border-border hover:shadow-medium transition-all">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-3">
                Serve Together
              </h3>
              <p className="text-muted-foreground">
                Help churches and young adults build a shared legacy of faith, service, and community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Simbang Gabi */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Start with Simbang Gabi?
              </h2>
            </div>

            <div className="bg-card rounded-xl p-8 border border-border shadow-soft">
              <p className="text-lg text-card-foreground mb-6 leading-relaxed">
                <strong className="text-primary">Simbang Gabi</strong> (Night Masses) is a beloved Filipino Catholic tradition—nine dawn masses 
                leading up to Christmas, celebrating hope, preparation, and community. In greater Phoenix, seven 
                parishes are participating in the 2024 diocesan celebration.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Today, Simbang Gabi schedules are scattered across Facebook groups, WhatsApp chats, parish bulletins, 
                and word-of-mouth. Young adults especially struggle to find which churches are participating and when.
              </p>
              <p className="text-lg text-card-foreground leading-relaxed">
                <strong>Ezra centralizes this.</strong> One directory, all parishes, easy discovery—starting with the 
                Diocese of Phoenix's first-ever diocesan-level Simbang Gabi celebration in 2024.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pilot Metrics */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              2024 Pilot by the Numbers
            </h2>
            <p className="text-lg text-muted-foreground">
              Making Simbang Gabi more accessible across Phoenix
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card rounded-xl p-6 border border-border text-center hover:shadow-medium transition-all">
              <Church className="w-10 h-10 text-primary mx-auto mb-3" />
              <div className="text-4xl font-bold text-card-foreground mb-2">7</div>
              <div className="text-muted-foreground">Pilot Parishes</div>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border text-center hover:shadow-medium transition-all">
              <Calendar className="w-10 h-10 text-primary mx-auto mb-3" />
              <div className="text-4xl font-bold text-card-foreground mb-2">13</div>
              <div className="text-muted-foreground">Simbang Gabi Masses</div>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border text-center hover:shadow-medium transition-all">
              <Users className="w-10 h-10 text-primary mx-auto mb-3" />
              <div className="text-4xl font-bold text-card-foreground mb-2">500+</div>
              <div className="text-muted-foreground">Expected Attendees</div>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border text-center hover:shadow-medium transition-all">
              <TrendingUp className="w-10 h-10 text-primary mx-auto mb-3" />
              <div className="text-4xl font-bold text-card-foreground mb-2">Dec 15-24</div>
              <div className="text-muted-foreground">2024 Celebration</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-primary/90">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Experience Simbang Gabi?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Browse all Simbang Gabi celebrations across greater Phoenix and find the perfect time to join your community.
          </p>
          <Link to="/simbang-gabi">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-large">
              <MapPin className="w-5 h-5 mr-2" />
              Explore Simbang Gabi Events
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
