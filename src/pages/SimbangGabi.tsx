import { useState, useMemo } from "react";
import { simbangGabiEvents } from "@/data/parishes";
import EventCard from "@/components/EventCard";
import Layout from "@/components/Layout";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";

const SimbangGabi = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [dateFilter, setDateFilter] = useState("all");
  const [churchFilter, setChurchFilter] = useState("all");

  // Get unique churches for filter
  const uniqueChurches = useMemo(() => {
    const churches = Array.from(new Set(simbangGabiEvents.map(e => e.churchName)));
    return churches.sort();
  }, []);

  // Filter events
  const filteredEvents = useMemo(() => {
    return simbangGabiEvents.filter(event => {
      // Search filter
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch = 
        event.churchName.toLowerCase().includes(searchLower) ||
        event.city.toLowerCase().includes(searchLower) ||
        event.address.toLowerCase().includes(searchLower);

      // Date filter
      let matchesDate = true;
      if (dateFilter !== "all") {
        const eventDate = new Date(event.date + "T00:00:00");
        const day = eventDate.getDate();
        
        if (dateFilter === "dec-15-17") {
          matchesDate = day >= 15 && day <= 17;
        } else if (dateFilter === "dec-18-21") {
          matchesDate = day >= 18 && day <= 21;
        } else if (dateFilter === "dec-22-24") {
          matchesDate = day >= 22 && day <= 24;
        }
      }

      // Church filter
      const matchesChurch = churchFilter === "all" || event.churchName === churchFilter;

      return matchesSearch && matchesDate && matchesChurch;
    });
  }, [searchQuery, dateFilter, churchFilter, simbangGabiEvents]);

  return (
    <Layout>
      <div className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Simbang Gabi in Greater Phoenix
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A central directory for Simbang Gabi masses across Filipino Catholic communities in greater Phoenix. 
              Find dawn and evening celebrations at participating parishes during the Advent season.
            </p>
          </div>

          {/* Filters */}
          <div className="mb-8 space-y-4">
            <div className="grid md:grid-cols-3 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search by church or city..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Date Filter */}
              <Select value={dateFilter} onValueChange={setDateFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by date" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Dates</SelectItem>
                  <SelectItem value="dec-15-17">Dec 15-17</SelectItem>
                  <SelectItem value="dec-18-21">Dec 18-21</SelectItem>
                  <SelectItem value="dec-22-24">Dec 22-24</SelectItem>
                </SelectContent>
              </Select>

              {/* Church Filter */}
              <Select value={churchFilter} onValueChange={setChurchFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by church" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Churches</SelectItem>
                  {uniqueChurches.map(church => (
                    <SelectItem key={church} value={church}>
                      {church}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Results Count */}
            <div className="text-sm text-muted-foreground">
              Showing {filteredEvents.length} of {simbangGabiEvents.length} Simbang Gabi celebration{filteredEvents.length !== 1 ? 's' : ''}
            </div>
          </div>

          {/* Events Grid */}
          {filteredEvents.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-card rounded-xl border border-border">
              <div className="max-w-md mx-auto">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-2">
                  No Masses Found
                </h3>
                <p className="text-muted-foreground mb-4">
                  No Simbang Gabi masses match your current filters. Try adjusting the date range or selecting a different parish.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setDateFilter("all");
                    setChurchFilter("all");
                  }}
                  className="text-primary hover:text-primary/80 font-medium"
                >
                  Clear all filters
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default SimbangGabi;
