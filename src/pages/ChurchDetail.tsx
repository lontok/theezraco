import { useParams, Link } from "react-router-dom";
import { getChurchBySlug, getEventsByChurch } from "@/data/parishes";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Globe, ArrowLeft, Mail } from "lucide-react";

const ChurchDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const church = slug ? getChurchBySlug(slug) : undefined;
  const events = slug ? getEventsByChurch(slug) : [];

  if (!church) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Church Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The church you're looking for doesn't exist in our directory.
          </p>
          <Link to="/simbang-gabi">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Simbang Gabi
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr + "T00:00:00");
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      weekday: "short"
    }).format(date);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-secondary/30 to-background py-12 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/simbang-gabi" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Simbang Gabi Listing
          </Link>

          <div className="max-w-4xl">
            <Badge variant="secondary" className="mb-4">Pilot Parish</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {church.name}
            </h1>
            <div className="flex items-center text-muted-foreground mb-6">
              <MapPin className="w-5 h-5 mr-2 text-primary" />
              <span className="text-lg">{church.city}, {church.state}</span>
            </div>
            <p className="text-lg text-card-foreground leading-relaxed">
              {church.description}
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Simbang Gabi Schedule */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Simbang Gabi Schedule
              </h2>
              {events.length > 0 ? (
                <div className="space-y-4">
                  {events.map(event => (
                    <div key={event.id} className="bg-card border border-border rounded-xl p-6 hover:shadow-medium transition-all">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                        <div className="flex items-center text-card-foreground font-semibold mb-2 sm:mb-0">
                          <Calendar className="w-5 h-5 mr-2 text-primary" />
                          {formatDate(event.date)}
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Clock className="w-5 h-5 mr-2 text-primary" />
                          {event.startTime}
                        </div>
                      </div>
                      {event.notes && (
                        <p className="text-sm text-muted-foreground">
                          {event.notes}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-card border border-border rounded-xl p-6 text-center">
                  <p className="text-muted-foreground">
                    No Simbang Gabi masses scheduled at this time.
                  </p>
                </div>
              )}
            </section>

            {/* Filipino Community Events */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Filipino Community Events
              </h2>
              <div className="space-y-3">
                {church.communityEvents.map((event, index) => (
                  <div key={index} className="bg-card border border-border rounded-xl p-5 flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-card-foreground mb-1">
                        {event.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {event.schedule}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Hosted with Ezra */}
            <section className="bg-secondary/30 rounded-xl p-6 border border-border">
              <h2 className="text-xl font-bold text-foreground mb-4">
                Hosted with Ezra
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Central Simbang Gabi listing makes it easy for Filipino Catholics across Phoenix to find and attend celebrations.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Helping young adults discover your parish and connect with the Filipino Catholic community.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Future potential for event management, devotional content, and deeper community engagement tools.</span>
                </li>
              </ul>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Info Card */}
            <div className="bg-card border border-border rounded-xl p-6 sticky top-20">
              <h3 className="font-semibold text-card-foreground mb-4">
                Parish Information
              </h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex items-start text-sm">
                    <MapPin className="w-4 h-4 mr-2 mt-0.5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{church.address}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-border space-y-3">
                  <a
                    href={church.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button variant="outline" className="w-full">
                      <Globe className="w-4 h-4 mr-2" />
                      Visit Parish Website
                    </Button>
                  </a>

                  <Link to={`/contact?church=${encodeURIComponent(church.name)}`} className="block">
                    <Button variant="default" className="w-full">
                      <Mail className="w-4 h-4 mr-2" />
                      Contact Ezra About Partnering
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ChurchDetail;
