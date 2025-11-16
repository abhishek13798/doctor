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
import { Heart, BookOpen, Leaf, X, ChevronRight, GraduationCap, Briefcase, Award, Users, Building2 } from 'lucide-react';
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
          {/* Hero-Style About Section with Gradient Background */}
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl lg:rounded-[2rem]">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--kunj-eb)] via-[var(--kunj-java)] to-teal-700"></div>
            
            {/* Decorative Circular Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-teal-800/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-teal-900/30 rounded-full blur-3xl translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-teal-800/15 rounded-full blur-2xl"></div>
            
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center py-12 sm:py-16 lg:py-20 px-6 sm:px-8 lg:px-12">
              {/* Text Content - Left Side */}
              <div className="text-left space-y-6 sm:space-y-8 order-2 lg:order-1 z-10">
                {/* Large Headline */}
                <div className="space-y-4 sm:space-y-6">
                  <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
                    The Best Mental Health
                    <br />
                    <span className="text-white/95">Care for You</span>
                  </h2>
                </div>

                {/* Description Text */}
                <div className="space-y-4">
                  <p className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl">
                    We understand that mental health challenges can happen unexpectedly. Our compassionate and evidence-based approach ensures you receive the best psychological care tailored to your unique needs.
                  </p>
                  <p className="text-base sm:text-lg text-white/85 leading-relaxed max-w-2xl">
                    Ms. Rimjhim is a <strong className="text-white font-semibold">Licensed Clinical Psychologist</strong> certified by <strong className="text-white font-semibold">RCI</strong>, specializing in <strong className="text-white font-semibold">personality disorders</strong> and <strong className="text-white font-semibold">family/relationship conflicts</strong>. With over <strong className="text-white font-semibold">2000 cases handled</strong>, she brings extensive experience in both <strong className="text-white font-semibold">psychometric assessments</strong> and <strong className="text-white font-semibold">therapy</strong>.
                  </p>
                </div>

                {/* Call to Action Button */}
                <div className="pt-2">
                  <Button
                    size="lg"
                    className="bg-white text-[var(--kunj-java)] hover:bg-white/90 font-semibold text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-7 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById('reachout');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Book a Session
                  </Button>
                </div>
              </div>

              {/* Image - Right Side */}
              <div className="flex justify-center lg:justify-end order-1 lg:order-2 z-10">
                <div className="relative w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px] aspect-[3/4] group">
                  {/* Image container */}
                  <div className="relative w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                    <img 
                      src="/about.JPG" 
                      alt="Ms. Rimjhim, Clinical Psychologist" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="eager"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/founder.JPG';
                      }}
                    />
                    {/* Subtle overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
                  </div>
                  
                  {/* Decorative accent */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/20 rounded-full blur-2xl"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Breather Section - Education & Experience with Teal/Azure Background */}
          <div className="relative mt-12 sm:mt-16 lg:mt-20 overflow-hidden rounded-2xl sm:rounded-3xl">
            {/* Background with gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--kunj-eb)] via-[var(--kunj-java)] to-[var(--kunj-eb)]"></div>
            {/* Decorative pattern overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.08),transparent_60%)]"></div>
            {/* Decorative curved lines */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
              <svg className="absolute top-0 left-0 w-full h-full opacity-10" viewBox="0 0 1200 400" preserveAspectRatio="none">
                <path d="M0,200 Q300,100 600,200 T1200,200" stroke="white" strokeWidth="2" fill="none" />
                <path d="M0,250 Q300,150 600,250 T1200,250" stroke="white" strokeWidth="2" fill="none" />
              </svg>
            </div>
            
            <div className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
              <div className="max-w-6xl mx-auto">
                {/* Mobile: Card Design */}
                <div className="md:hidden space-y-6">
                  {/* Education Card */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-12 h-12 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white">Education & Qualifications</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Award className="h-5 w-5 text-white/90 mt-0.5 flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-base text-white">MPhil in Clinical Psychology</p>
                          <p className="text-sm text-white/70 mt-0.5">GMCH, Chandigarh</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Award className="h-5 w-5 text-white/90 mt-0.5 flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-base text-white">Master's Degree</p>
                          <p className="text-sm text-white/70 mt-0.5">Jamia Millia Islamia, Delhi</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Award className="h-5 w-5 text-white/90 mt-0.5 flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-base text-white">Bachelor's Degree</p>
                          <p className="text-sm text-white/70 mt-0.5">Amity University, Jaipur</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Award className="h-5 w-5 text-white/90 mt-0.5 flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-base text-white">RCI Certified</p>
                          <p className="text-sm text-white/70 mt-0.5">Rehabilitation Council of India</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Experience Card */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-12 h-12 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                        <Briefcase className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white">Experience & Specializations</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Users className="h-5 w-5 text-white/90 mt-0.5 flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-base text-white">2000+ Cases Handled</p>
                          <p className="text-sm text-white/70 mt-0.5">Extensive clinical experience</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Building2 className="h-5 w-5 text-white/90 mt-0.5 flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-base text-white">Specializations</p>
                          <p className="text-sm text-white/70 mt-0.5 leading-relaxed">Personality Disorders • Family/Relationship Conflicts • Stress Reduction • Behavioral Management</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Building2 className="h-5 w-5 text-white/90 mt-0.5 flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-base text-white">Current Practice</p>
                          <p className="text-sm text-white/70 mt-0.5">Kunj Care (Private Practice) • 166 MH</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Desktop: Grid Design */}
                <div className="hidden md:grid md:grid-cols-2 gap-8 lg:gap-12">
                  {/* Qualifications Section */}
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 shadow-lg">
                        <GraduationCap className="h-7 w-7 text-white" />
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-white leading-tight">Education & Qualifications</h3>
                    </div>
                    <div className="space-y-5">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Award className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-lg text-white">MPhil in Clinical Psychology</p>
                          <p className="text-sm text-white/70 mt-1">GMCH, Chandigarh</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Award className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-lg text-white">Master's Degree</p>
                          <p className="text-sm text-white/70 mt-1">Jamia Millia Islamia, Delhi</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Award className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-lg text-white">Bachelor's Degree</p>
                          <p className="text-sm text-white/70 mt-1">Amity University, Jaipur</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Award className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-lg text-white">RCI Certified</p>
                          <p className="text-sm text-white/70 mt-1">Rehabilitation Council of India</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Experience & Specializations */}
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Briefcase className="h-7 w-7 text-white" />
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-white leading-tight">Experience & Specializations</h3>
                    </div>
                    <div className="space-y-5">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Users className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-lg text-white">2000+ Cases Handled</p>
                          <p className="text-sm text-white/70 mt-1">Extensive clinical experience</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Building2 className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-lg text-white">Specializations</p>
                          <p className="text-sm text-white/70 mt-1 leading-relaxed">Personality Disorders • Family/Relationship Conflicts • Stress Reduction • Behavioral Management</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Building2 className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-lg text-white">Current Practice</p>
                          <p className="text-sm text-white/70 mt-1">Kunj Care (Private Practice) • 166 MH</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
