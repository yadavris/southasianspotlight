import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";
import type { Event } from "@shared/schema";

const categoryColors = {
  "Cultural Event": "bg-orange-100 text-orange-600",
  "Workshop": "bg-blue-100 text-blue-600",
  "Cultural Food": "bg-green-100 text-green-600",
  "Meeting": "bg-purple-100 text-purple-600",
};

const buttonColors = {
  "Cultural Event": "bg-orange-500 hover:bg-orange-600",
  "Workshop": "bg-blue-500 hover:bg-blue-600",
  "Cultural Food": "bg-green-500 hover:bg-green-600",
  "Meeting": "bg-purple-500 hover:bg-purple-600",
};

export default function EventsSection() {
  const { data: events, isLoading } = useQuery<Event[]>({
    queryKey: ["/api/events"],
  });

  if (isLoading) {
    return (
      <section id="events" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Upcoming Events</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Join us for cultural celebrations, educational workshops, and community gatherings</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="animate-pulse overflow-hidden">
                <div className="w-full h-48 bg-gray-200"></div>
                <CardContent className="p-6">
                  <div className="h-6 bg-gray-200 rounded mb-3"></div>
                  <div className="h-8 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded mb-4"></div>
                  <div className="h-10 bg-gray-200 rounded"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="events" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Upcoming Events</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Join us for cultural celebrations, educational workshops, and community gatherings</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events?.map((event) => (
            <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img 
                src={event.imageUrl} 
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <Badge 
                    className={`${categoryColors[event.category as keyof typeof categoryColors] || 'bg-gray-100 text-gray-600'}`}
                  >
                    {event.category}
                  </Badge>
                </div>
                <h3 className="font-semibold text-xl text-gray-800 mb-2">{event.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{event.description}</p>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{new Date(event.date).toLocaleDateString()}</span>
                  <Clock className="w-4 h-4 ml-4 mr-2" />
                  <span>{event.time}</span>
                </div>
                <Button 
                  className={`w-full text-white font-semibold transition-colors duration-300 ${buttonColors[event.category as keyof typeof buttonColors] || 'bg-gray-500 hover:bg-gray-600'}`}
                  disabled={!event.registrationOpen}
                >
                  {event.registrationOpen ? 'Register Now' : 'Registration Closed'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
