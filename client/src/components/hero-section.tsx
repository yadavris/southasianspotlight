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
              <span style={{ display: "block", margin: "05px 0 0", color: "#ff8033" }}>South Asian</span>
              <span style={{ display: "block" }}>Heritage</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join our vibrant community of students celebrating South Asian culture, 
              traditions, and heritage through meetings, events, and meaningful connections!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="https://www.remind.com/join/cpasian">
  <Button 
                className="cultural-gradient text-white px-8 py-3 text-lg font-semibold hover:shadow-lg transition-shadow duration-300"
              
              >
                Join Our Remind
              </Button>
</a>
             
              <Button 
                variant="outline"
                className="border-2 border-orange-400 text-orange-600 px-8 py-3 text-lg font-semibold hover:bg-orange-50 transition-colors duration-300"
                onClick={() => scrollToSection("events")}
              >
                Upcoming Meetings
              </Button>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://i.postimg.cc/Kzh7QZR0/SA-Club-Website-Whiteboards.jpg"
              alt="South Asian cultural dance performance" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            {/* Subtle gradient blobs */}
            <div className="absolute -bottom-4 -right-4 w-16 h-16 cultural-gradient rounded-full opacity-10"></div>
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-orange-200 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
