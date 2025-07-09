import { Users, GraduationCap, Heart } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 mandala-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              The South Asian Cultural Club serves as a bridge between tradition and modernity, 
              creating a vibrant community where students can explore their heritage while building 
              lasting connections. We celebrate the rich diversity of South Asian cultures through 
              educational events, cultural performances, and community service.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our goal is to foster cross-cultural understanding, promote academic excellence, 
              and create meaningful opportunities for personal and professional growth within our community.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-8 h-8 cultural-gradient rounded-full flex items-center justify-center mr-3">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-700">Building inclusive communities</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 cultural-gradient rounded-full flex items-center justify-center mr-3">
                  <GraduationCap className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-700">Supporting academic excellence</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 cultural-gradient rounded-full flex items-center justify-center mr-3">
                  <Heart className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-700">Promoting cultural awareness</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
              alt="South Asian students in cultural attire"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-orange-300 rounded-full opacity-30"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 cultural-gradient rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
