import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import type { GalleryImage } from "@shared/schema";

interface GalleryLightboxProps {
  image: GalleryImage;
  isOpen: boolean;
  onClose: () => void;
}

export default function GalleryLightbox({ image, isOpen, onClose }: GalleryLightboxProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
      <Card className="max-w-4xl max-h-[90vh] w-full overflow-hidden">
        <CardContent className="p-0">
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white"
              onClick={onClose}
            >
              <X className="w-6 h-6" />
            </Button>
            <img
              src={image.imageUrl}
              alt={image.title}
              className="w-full h-auto max-h-[70vh] object-contain"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{image.title}</h3>
            {image.description && (
              <p className="text-gray-600 mb-2">{image.description}</p>
            )}
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded">
                {image.category}
              </span>
              {image.eventDate && (
                <span>
                  {new Date(image.eventDate).toLocaleDateString()}
                </span>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
