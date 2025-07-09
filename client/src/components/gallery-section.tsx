import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import GalleryLightbox from "@/components/gallery-lightbox";
import type { GalleryImage } from "@shared/schema";

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const { data: galleryImages, isLoading } = useQuery<GalleryImage[]>({
    queryKey: ["/api/gallery-images"],
  });

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedImage(null);
  };

  if (isLoading) {
    return (
      <section id="gallery" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Photo Gallery</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Moments from our cultural celebrations, workshops, and community events</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="aspect-square bg-gray-200 rounded-lg animate-pulse"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="gallery" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Photo Gallery</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Moments from our cultural celebrations, workshops, and community events</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages?.map((image) => (
            <Card 
              key={image.id} 
              className="aspect-square overflow-hidden hover:shadow-md transition-shadow duration-300 cursor-pointer"
              onClick={() => openLightbox(image)}
            >
              <img 
                src={image.imageUrl} 
                alt={image.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </Card>
          ))}
        </div>
      </div>
      
      {selectedImage && (
        <GalleryLightbox 
          image={selectedImage} 
          isOpen={lightboxOpen} 
          onClose={closeLightbox}
        />
      )}
    </section>
  );
}
