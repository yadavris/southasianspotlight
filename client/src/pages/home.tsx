import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AnnouncementsSection from "@/components/announcements-section";
import EventsSection from "@/components/events-section";
import EventCalendar from "@/components/event-calendar";
import GallerySection from "@/components/gallery-section";
import OfficersSection from "@/components/officers-section";
import MemberSpotlightSection from "@/components/member-spotlight-section";
import AboutSection from "@/components/about-section";
import NewsletterSection from "@/components/newsletter-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AnnouncementsSection />
      <EventsSection />
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <EventCalendar />
        </div>
      </div>
      <GallerySection />
      <OfficersSection />
      <MemberSpotlightSection />
      <AboutSection />
      <NewsletterSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
