import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Dialog, DialogContent } from './ui/dialog';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';
import { Heart, BookOpen, Leaf, X, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

const About: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  const photos = [
    { src: '/about.JPG', alt: 'Ms. Rimjhim - Professional Photo' },
    { src: '/founder2.JPG', alt: 'Ms. Rimjhim - Clinical Psychologist' },
    { src: '/founder3.JPG', alt: 'Ms. Rimjhim - Licensed Professional' },
    { src: '/founder4.JPG', alt: 'Ms. Rimjhim - Professional Portrait' }
  ];

  const openPhoto = (index: number) => {
    setSelectedPhoto(index);
  };

  const closePhoto = () => {
    setSelectedPhoto(null);
  };


  const values = [
    {
      title: "Empathy & Confidentiality",
      icon: Heart,
      description: "We uphold the highest professional and ethical standards to ensure your mental well‑being."
    },
    {
      title: "Evidence‑based Practice",
      icon: BookOpen,
      description: "Our therapeutic approaches are grounded in scientific research and proven methodologies."
    },
    {
      title: "Holistic Healing",
      icon: Leaf,
      description: "We address the whole person, considering physical, emotional, and social well-being."
    }
  ];

  return (
    <section id="about" className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 sm:space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start">
            <div className="text-center lg:text-left space-y-4 sm:space-y-6 order-2 lg:order-1">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-2 sm:px-0">
                  About{' '}
                  <span className="bg-gradient-to-r from-[var(--kunj-eb)] to-[var(--kunj-java)] bg-clip-text text-transparent">
                    Ms. Rimjhim
                  </span>
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto lg:mx-0 px-2 sm:px-0">
                  Ms. Rimjhim is a <strong>Licensed Clinical Psychologist (RCI)</strong> with extensive experience serving both the Indian Army and civilian populations. She integrates evidence‑based therapies like <strong>CBT, DBT, and ACT</strong> in her practice to help individuals enhance emotional regulation, manage stress, and build resilience.
                </p>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <a 
                href="#reachout" 
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('reachout');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full max-w-[240px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[360px] aspect-[3/4] flex-shrink-0 group block cursor-pointer"
              >
                <div className="relative w-full h-full">
                  <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-[var(--kunj-eb)] to-[var(--kunj-java)] rounded-2xl sm:rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <div className="relative w-full h-full rounded-xl sm:rounded-2xl shadow-xl overflow-hidden">
                    <img 
                      src="/about.JPG" 
                      alt="Ms. Rimjhim, Clinical Psychologist" 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/founder.JPG';
                      }}
                    />
                  </div>
                </div>
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <Card 
                  key={value.title} 
                  className="group hover:border-[var(--kunj-eb)]/50 transition-all duration-300 cursor-pointer active:scale-95 sm:active:scale-100 touch-manipulation"
                  onClick={() => {
                    const element = document.getElementById('reachout');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <CardHeader className="p-4 sm:p-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[var(--kunj-eb)] to-[var(--kunj-java)] flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg sm:text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <CardDescription className="text-sm sm:text-base leading-relaxed">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Professional Photo Gallery */}
          <div className="mt-12 sm:mt-16">
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                <span className="bg-gradient-to-r from-[var(--kunj-eb)] to-[var(--kunj-java)] bg-clip-text text-transparent">
                  Professional Gallery
                </span>
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
                Get to know Ms. Rimjhim through these professional photographs
              </p>
              {/* Mobile Swipe Indicator */}
              <div className="flex items-center justify-center gap-2 mt-4 sm:hidden">
                <span className="text-xs text-muted-foreground flex items-center gap-1 animate-pulse">
                  <ChevronRight className="h-4 w-4 text-[var(--kunj-java)]" />
                  Swipe left to view more
                  <ChevronRight className="h-4 w-4 text-[var(--kunj-java)]" />
                </span>
              </div>
            </div>
            <div className="px-4 sm:px-8 md:px-12 lg:px-16">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full max-w-4xl mx-auto"
              >
                <CarouselContent>
                  {photos.map((photo, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                      <div className="p-2">
                        <Card
                          className="group hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden border-2 hover:border-primary/30 active:scale-95 sm:active:scale-100 touch-manipulation"
                          onClick={() => openPhoto(index)}
                        >
                          <div className="relative aspect-[3/4] overflow-hidden bg-slate-100">
                            <img
                              src={photo.src}
                              alt={photo.alt}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                              loading="lazy"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = '/founder.JPG';
                              }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <p className="text-white text-xs sm:text-sm font-medium">Click to view</p>
                            </div>
                          </div>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden sm:flex -left-4 sm:-left-8 lg:-left-12" />
                <CarouselNext className="hidden sm:flex -right-4 sm:-right-8 lg:-right-12" />
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      {/* Photo Modal */}
      {selectedPhoto !== null && (
        <Dialog open={selectedPhoto !== null} onOpenChange={closePhoto}>
          <DialogContent className="max-w-4xl w-[95vw] p-0 bg-black/95 border-none">
            <Carousel
              opts={{
                startIndex: selectedPhoto,
                loop: true,
              }}
              className="w-full"
            >
              <div className="relative">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 z-50 text-white hover:bg-white/20"
                  onClick={closePhoto}
                >
                  <X className="h-5 w-5" />
                </Button>
                <CarouselContent className="-ml-0">
                  {photos.map((photo, index) => (
                    <CarouselItem key={index} className="pl-0">
                      <div className="relative aspect-[3/4] sm:aspect-auto sm:max-h-[85vh] overflow-hidden">
                        <img
                          src={photo.src}
                          alt={photo.alt}
                          className="w-full h-full object-contain"
                          loading="eager"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-50 text-white border-white/20 hover:bg-white/20 hover:text-white bg-black/30" />
                <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-50 text-white border-white/20 hover:bg-white/20 hover:text-white bg-black/30" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 z-40">
                  <p className="text-white text-sm text-center">
                    {selectedPhoto !== null ? selectedPhoto + 1 : 1} / {photos.length}
                  </p>
                </div>
              </div>
            </Carousel>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
};

export default About;
