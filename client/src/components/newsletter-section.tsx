import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const subscribeMutation = useMutation({
    mutationFn: async (email: string) => {
      return await apiRequest("POST", "/api/newsletter-subscribers", { email });
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Thank you for subscribing to our newsletter!",
      });
      setEmail("");
      queryClient.invalidateQueries({ queryKey: ["/api/newsletter-subscribers"] });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      subscribeMutation.mutate(email);
    }
  };

  return (
    <section className="py-16 bg-orange-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Stay Connected</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter for updates on events, cultural celebrations, and community news. 
          Be the first to know about upcoming activities and opportunities.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1"
          />
          <Button 
            type="submit" 
            className="cultural-gradient text-white font-semibold hover:shadow-lg transition-shadow duration-300"
            disabled={subscribeMutation.isPending}
          >
            {subscribeMutation.isPending ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>
        <p className="text-gray-500 text-sm mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
