import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-20 min-h-screen flex items-center mandala-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Celebrating
              <span className="text-transparent bg-clip-text cultural-gradient block">
                South Asian
              </span>
              Heritage
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join our vibrant community of students celebrating South Asian culture, 
              traditions, and heritage through events, festivals, and meaningful connections.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                className="cultural-gradient text-white px-8 py-3 text-lg font-semibold hover:shadow-lg transition-shadow duration-300"
                onClick={() => scrollToSection("contact")}
              >
                Join Our Club
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-orange-400 text-orange-600 px-8 py-3 text-lg font-semibold hover:bg-orange-50 transition-colors duration-300"
                onClick={() => scrollToSection("events")}
              >
                Upcoming Events
              </Button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="South Asian cultural dance performance" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 cultural-gradient rounded-full opacity-20"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-orange-300 rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
