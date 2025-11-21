import Layout from "@/components/Layout";
import { CheckCircle2, Circle, ArrowRight } from "lucide-react";

const Roadmap = () => {
  const phases = [
    {
      title: "Now – MVP",
      status: "current",
      description: "Building the foundation with Filipino Catholic Simbang Gabi",
      items: [
        "Web-only platform optimized for desktop and mobile",
        "Simbang Gabi directory for 8 pilot parishes in greater Phoenix",
        "Static content showcasing value for churches and believers",
        "Basic analytics framework with pilot metrics",
        "Church detail pages with community event information"
      ]
    },
    {
      title: "Next – Pilot Year",
      status: "upcoming",
      description: "Expanding functionality and gathering community feedback",
      items: [
        "Parish event management system for churches to update their own calendars",
        "Controlled posting for prayer groups and ministries",
        "Attendance tracking and engagement pattern reporting",
        "Feedback collection system from young adults and parish leaders",
        "Integration with parish social media and communication channels"
      ]
    },
    {
      title: "Later – Scale",
      status: "future",
      description: "Growing beyond Phoenix and Filipino Catholics",
      items: [
        "Expand to other cultural communities (Ethiopian, South African, Latino, etc.)",
        "Launch in additional cities and dioceses across the United States",
        "Richer devotional content and spiritual formation resources",
        "Advanced analytics helping churches understand engagement depth",
        "Cross-tradition features supporting ecumenical community building",
        "Mobile apps for iOS and Android"
      ]
    }
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-secondary/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Roadmap
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Starting small with Simbang Gabi, learning what works, and building toward a 
              platform that serves Christian communities across traditions and cities.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {phases.map((phase, index) => (
                <div key={index} className="relative">
                  {/* Connector Line (except for last item) */}
                  {index < phases.length - 1 && (
                    <div className="absolute left-4 top-16 bottom-0 w-0.5 bg-border -mb-12"></div>
                  )}

                  <div className="flex items-start">
                    {/* Status Icon */}
                    <div className="flex-shrink-0 mr-6">
                      {phase.status === "current" ? (
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                          <CheckCircle2 className="w-5 h-5 text-primary-foreground" />
                        </div>
                      ) : (
                        <div className="w-8 h-8 rounded-full border-2 border-border bg-background flex items-center justify-center">
                          <Circle className="w-4 h-4 text-muted-foreground" />
                        </div>
                      )}
                    </div>

                    {/* Content Card */}
                    <div className={`flex-1 bg-card border rounded-xl p-6 ${
                      phase.status === "current" 
                        ? "border-primary shadow-medium" 
                        : "border-border hover:shadow-soft transition-all"
                    }`}>
                      <div className="flex items-center justify-between mb-3">
                        <h2 className="text-2xl font-bold text-card-foreground">
                          {phase.title}
                        </h2>
                        {phase.status === "current" && (
                          <span className="text-xs font-semibold px-3 py-1 bg-primary/10 text-primary rounded-full">
                            In Progress
                          </span>
                        )}
                      </div>

                      <p className="text-muted-foreground mb-6">
                        {phase.description}
                      </p>

                      <ul className="space-y-3">
                        {phase.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <ArrowRight className="w-4 h-4 text-primary mr-3 mt-1 flex-shrink-0" />
                            <span className="text-sm text-card-foreground">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              The Long-Term Vision
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Ezra isn't just about event listings. It's about building a platform where believers 
              can live out their faith every day, where churches can reach beyond Sunday, and where 
              communities across Christian traditions can grow together.
            </p>
            <p className="text-lg text-card-foreground leading-relaxed">
              We're starting with one cultural community in one city because that's how you build 
              something real and sustainable. But the vision is much bigger: a connected ecosystem 
              of believers living, serving, and growing in faith together.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Roadmap;
