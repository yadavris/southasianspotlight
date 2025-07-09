import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Lightbulb } from "lucide-react";

export default function SuggestionBox() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    suggestion: "",
    category: "",
  });

  const { toast } = useToast();
  const queryClient = useQueryClient();

  const suggestionMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      return await apiRequest("POST", "/api/suggestions", data);
    },
    onSuccess: () => {
      toast({
        title: "Suggestion submitted!",
        description: "Thank you for your suggestion. We'll review it carefully.",
      });
      setFormData({ name: "", email: "", suggestion: "", category: "" });
      queryClient.invalidateQueries({ queryKey: ["/api/suggestions"] });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to submit suggestion. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    suggestionMutation.mutate(formData);
  };

  return (
    <Card className="bg-purple-50 border-purple-200">
      <CardContent className="p-8">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Lightbulb className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Suggestion Box</h3>
          <p className="text-gray-600">
            Have ideas for events, activities, or improvements? We'd love to hear your suggestions!
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Name</label>
              <Input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Email</label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
          </div>
          
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Category</label>
            <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="events">Events</SelectItem>
                <SelectItem value="activities">Activities</SelectItem>
                <SelectItem value="workshops">Workshops</SelectItem>
                <SelectItem value="community-service">Community Service</SelectItem>
                <SelectItem value="meetings">Meetings</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Your Suggestion</label>
            <Textarea
              rows={4}
              value={formData.suggestion}
              onChange={(e) => setFormData({ ...formData, suggestion: e.target.value })}
              placeholder="Share your ideas, suggestions, or feedback..."
              required
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold transition-colors duration-300"
            disabled={suggestionMutation.isPending}
          >
            {suggestionMutation.isPending ? "Submitting..." : "Submit Suggestion"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
