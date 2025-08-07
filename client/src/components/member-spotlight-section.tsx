import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { MemberSpotlight } from "@shared/schema";

export default function MemberSpotlightSection() {
  const { data: memberSpotlights, isLoading } = useQuery<MemberSpotlight[]>({
    queryKey: ["/api/member-spotlights"],
  });

  if (isLoading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Member Spotlight</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Celebrating the achievements and contributions of our community members</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <Card key={i} className="p-8 animate-pulse">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <div className="h-6 bg-gray-200 rounded mb-2 w-32"></div>
                    <div className="h-4 bg-gray-200 rounded w-24"></div>
                  </div>
                </div>
                <div className="h-20 bg-gray-200 rounded mb-4"></div>
                <div className="flex items-center">
                  <div className="h-6 bg-gray-200 rounded w-24 mr-3"></div>
                  <div className="h-4 bg-gray-200 rounded w-20"></div>
                </div>
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Monthly Member Spotlight</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Celebrating the achievements and contributions of our community members</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {memberSpotlights?.map((member) => (
            <Card key={member.id} className="p-8 hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <img 
                    src={member.imageUrl} 
                    alt={member.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-xl text-gray-800">{member.name}</h3>
                    <p className="text-orange-600 font-semibold">{member.major}, {member.classYear}</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4 italic">
                  "{member.quote}"
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Badge className="bg-orange-100 text-orange-600 mr-3">
                    Achievement: {member.achievement}
                  </Badge>
                  <span>Joined {member.joinedDate}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
