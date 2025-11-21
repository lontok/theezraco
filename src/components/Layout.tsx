import { Link, useLocation } from "react-router-dom";
import { Church, Calendar, Info, Map, Mail } from "lucide-react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  const navLinks = [
    { to: "/simbang-gabi", label: "Simbang Gabi", icon: Calendar },
    { to: "/for-churches", label: "For Churches", icon: Church },
    { to: "/about", label: "About", icon: Info },
    { to: "/roadmap", label: "Roadmap", icon: Map },
    { to: "/contact", label: "Contact", icon: Mail },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-soft">
                <span className="text-primary-foreground font-bold text-lg">E</span>
              </div>
              <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                Ezra
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = location.pathname === link.to;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-secondary text-primary"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{link.label}</span>
                  </Link>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 rounded-lg hover:bg-secondary text-muted-foreground">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden pb-4 space-y-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`flex items-center space-x-3 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-secondary text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-secondary/30 border-t border-border mt-auto">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">E</span>
                </div>
                <span className="text-xl font-bold text-foreground">Ezra</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Connecting believers under one communion.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-3">Quick Links</h3>
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold text-foreground mb-3">Get in Touch</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Questions about Ezra or the Simbang Gabi pilot?
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                Contact us
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2026 Ezra. Building community, one celebration at a time.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
