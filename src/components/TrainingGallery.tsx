import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { X, ChevronLeft, ChevronRight, Users } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '../lib/utils';

interface GalleryImage {
  src: string;
  alt: string;
  title: string;
  description: string;
}

const TrainingGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images: GalleryImage[] = [
    {
      src: '/army-training-1.jpg',
      alt: 'Ms. Rimjhim conducting training session for Indian Army personnel',
      title: 'Outdoor Training Session',
      description: 'Ms. Rimjhim conducting a mental health training session for Indian Army personnel in a natural outdoor setting, focusing on stress management and resilience building.'
    },
    {
      src: '/army-training-2.jpg',
      alt: 'Ms. Rimjhim presenting to Indian Army personnel',
      title: 'Group Training Program',
      description: 'Interactive training session with Indian Army personnel, covering mental health awareness, early identification of concerns, and crisis management protocols.'
    },
    {
      src: '/army-training-3.jpg',
      alt: 'Ms. Rimjhim leading workshop for Indian Army',
      title: 'Workshop Session',
      description: 'Comprehensive workshop session with Indian Army personnel, emphasizing practical strategies for mental health support and peer assistance systems.'
    }
  ];

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  return (
    <>
      <div className="mt-12 mb-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-4">
            <Users className="h-4 w-4" />
            Indian Army Training Programs
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-2">
            <span className="bg-gradient-to-r from-primary to-[var(--kunj-java)] bg-clip-text text-transparent">
              Training Gallery
            </span>
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-world experience delivering mental health training and workshops to the Indian Army
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {images.map((image, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden border-2 hover:border-primary/30 bg-white"
              onClick={() => openModal(index)}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    // Fallback if image doesn't exist
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `
                        <div class="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-primary/10 to-[var(--kunj-java)]/10 p-4">
                          <div class="text-center">
                            <svg class="w-16 h-16 mx-auto mb-4 text-primary/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                            </svg>
                            <p class="text-sm font-semibold text-foreground mb-1">${image.title}</p>
                            <p class="text-xs text-muted-foreground">Click to view</p>
                          </div>
                        </div>
                      `;
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h4 className="font-semibold text-sm mb-1">{image.title}</h4>
                    <p className="text-xs text-white/90 line-clamp-2">{image.description}</p>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-white">
                <h4 className="font-semibold text-sm text-foreground mb-1">{image.title}</h4>
                <p className="text-xs text-muted-foreground line-clamp-2">{image.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Card className="bg-gradient-to-r from-primary/5 to-[var(--kunj-java)]/5 border-primary/20">
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Ms. Rimjhim</strong> has extensive experience providing mental health training and workshops to the <strong className="text-foreground">Indian Army</strong>, 
                focusing on stress management, resilience building, suicide prevention, and mental health awareness. These sessions are designed to support military personnel 
                in high-stress environments and build organizational mental health capacity.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh] flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <div
              className="relative w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%23e5e7eb" width="800" height="600"/%3E%3Ctext fill="%239ca3af" font-family="sans-serif" font-size="24" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EImage Not Found%3C/text%3E%3C/svg%3E';
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <h3 className="text-white text-xl font-bold mb-2">{images[selectedImage].title}</h3>
                <p className="text-white/90 text-sm">{images[selectedImage].description}</p>
              </div>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white"
              onClick={closeModal}
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default TrainingGallery;

