import Layout from "@/components/Layout";
import { Heart, Users, Globe } from "lucide-react";

const About = () => {
  const team = [
    {
      name: "Anthony",
      role: "Community & Partnerships",
      background: "Young adult leader with a focus on outreach, events, and communication. Passionate about building bridges between parishes and connecting believers across traditions."
    },
    {
      name: "Ben",
      role: "Technical Lead",
      background: "Full-stack developer and Master of Ceremonies at a basilica. Deep involvement in Filipino Catholic community and coordinator for Simbang Gabi celebrations."
    },
    {
      name: "Nathan",
      role: "Operations & Support",
      background: "ROTC and Air Force track with expertise in logistics, structure, and long-term planning. Ensures Ezra scales responsibly as the community grows."
    }
  ];

  return (
    <Layout>
      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-secondary/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Mission
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Ezra exists to connect believers under one communion across Christian traditions, 
              helping them live their faith throughout the week—not just on Sunday morning.
            </p>
            <p className="text-lg text-card-foreground leading-relaxed">
              We're starting small and local with the Filipino Catholic Simbang Gabi pilot in greater Phoenix, 
              learning what works, and building a foundation for expansion to other communities, cities, and traditions.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Drives Us
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Faith in Action
              </h3>
              <p className="text-muted-foreground">
                We believe faith is lived out daily, not just on Sundays. Ezra helps believers 
                stay connected to their communities and grow spiritually throughout the week.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Community First
              </h3>
              <p className="text-muted-foreground">
                Technology should serve people, not the other way around. We build tools that 
                strengthen real relationships and deepen authentic community bonds.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Ecumenical Vision
              </h3>
              <p className="text-muted-foreground">
                While we start with Filipino Catholics, Ezra is designed to work across Christian 
                denominations, honoring each tradition while fostering unity in Christ.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet the Founding Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Three friends united by faith, community, and a vision to help churches thrive
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6 hover:shadow-medium transition-all">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">
                    {member.name[0]}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-card-foreground text-center mb-2">
                  {member.name}
                </h3>
                <p className="text-sm text-primary text-center mb-4 font-medium">
                  {member.role}
                </p>
                <p className="text-sm text-muted-foreground text-center leading-relaxed">
                  {member.background}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecumenical Emphasis */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto bg-card border border-border rounded-xl p-8 shadow-soft">
            <h2 className="text-2xl font-bold text-card-foreground mb-4 text-center">
              Built for Unity Across Traditions
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The Ezra founding team includes both Catholics and Lutherans. This diversity isn't 
              incidental—it's foundational to our vision.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We believe that Christians of all traditions share more in common than what divides us. 
              While our first pilot focuses on Filipino Catholics and the Simbang Gabi tradition, 
              Ezra is intentionally designed to work across denominations.
            </p>
            <p className="text-card-foreground leading-relaxed font-medium">
              Our goal: help believers of every Christian tradition grow in faith, serve their communities, 
              and experience the fullness of communion—both within their tradition and across it.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
