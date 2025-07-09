import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Megaphone, HandHeart, Lightbulb, ArrowRight } from "lucide-react";
import type { Announcement } from "@shared/schema";

const iconMap = {
  "fas fa-bullhorn": Megaphone,
  "fas fa-hands-helping": HandHeart,
  "fas fa-lightbulb": Lightbulb,
};

export default function AnnouncementsSection() {
  const { data: announcements, isLoading } = useQuery<Announcement[]>({
    queryKey: ["/api/announcements"],
  });

  if (isLoading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Latest Announcements</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Stay updated with our latest news, events, and club activities</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="animate-pulse">
                <CardContent className="p-6">
                  <div className="h-12 bg-gray-200 rounded mb-4"></div>
                  <div className="h-6 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Latest Announcements</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Stay updated with our latest news, events, and club activities</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {announcements?.map((announcement) => {
            const IconComponent = iconMap[announcement.icon as keyof typeof iconMap] || Megaphone;
            return (
              <Card key={announcement.id} className="hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 ${announcement.categoryColor} rounded-full flex items-center justify-center`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="ml-4">
                      <Badge variant="secondary" className="mb-1">
                        {announcement.category}
                      </Badge>
                      <p className="text-xs text-gray-500">{announcement.date}</p>
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">{announcement.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{announcement.description}</p>
                  {announcement.link && (
                    <Button variant="ghost" className="p-0 h-auto text-orange-600 hover:text-orange-700" asChild>
                      <a href={announcement.link} target="_blank" rel="noopener noreferrer">
                        Read More <ArrowRight className="w-4 h-4 ml-1" />
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
