import { Calendar, Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { SimbangGabiEvent } from "@/data/parishes";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type EventCardProps = {
  event: SimbangGabiEvent;
};

const EventCard = ({ event }: EventCardProps) => {
  // Format date for display
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr + "T00:00:00");
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(date);
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6 hover:shadow-medium transition-all duration-300 hover:border-primary/20">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="text-lg font-semibold text-card-foreground mb-1">
            {event.churchName}
          </h3>
          <Badge variant="secondary" className="text-xs">
            Pilot Parish
          </Badge>
        </div>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex items-center text-sm text-muted-foreground">
          <MapPin className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
          <span>{event.city}</span>
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <Calendar className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
          <span>{formatDate(event.date)}</span>
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <Clock className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
          <span>{event.startTime}</span>
        </div>
      </div>

      {event.notes && (
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {event.notes}
        </p>
      )}

      <Link to={`/church/${event.churchSlug}`}>
        <Button variant="outline" className="w-full">
          View Church Details
        </Button>
      </Link>
    </div>
  );
};

export default EventCard;
