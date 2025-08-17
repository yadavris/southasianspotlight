import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail } from "lucide-react";
import type { Officer } from "@shared/schema";

export default function OfficersSection() {
  const { data: officers, isLoading } = useQuery<Officer[]>({
    queryKey: ["/api/officers"],
  });

  if (isLoading) {
    return (
      <section id="officers" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Meet Our Officers</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Our dedicated leadership team working to promote South Asian culture and community</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="p-6 text-center animate-pulse">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <div className="h-6 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded mb-3"></div>
                <div className="h-16 bg-gray-200 rounded mb-4"></div>
                <div className="flex justify-center space-x-3">
                  <div className="w-8 h-8 bg-gray-200 rounded"></div>
                  <div className="w-8 h-8 bg-gray-200 rounded"></div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="officers" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Meet Our Officers</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Our dedicated leadership team working to promote South Asian culture and community</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {officers?.map((officer) => (
            <Card key={officer.id} className="p-6 hover:shadow-md transition-shadow duration-300 text-center">
              <CardContent className="p-0">
                <img 
                  src={officer.imageUrl} 
                  alt={officer.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-semibold text-xl text-gray-800 mb-2">{officer.name}</h3>
                <p className="text-orange-600 font-semibold mb-3">{officer.position}</p>
                <p className="text-gray-600 text-sm mb-4">{officer.bio}</p>
                <div className="flex justify-center space-x-3">
                  {officer.linkedinUrl && (
                    <Button variant="ghost" size="icon" className="text-gray-400 hover:text-orange-500">
                      <Linkedin className="w-5 h-5" />
                    </Button>
                  )}
                  {officer.email && (
                    <Button variant="ghost" size="icon" className="text-gray-400 hover:text-orange-500">
                      <Mail className="w-5 h-5" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
