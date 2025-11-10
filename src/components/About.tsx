import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Heart, BookOpen, Leaf } from 'lucide-react';

const About: React.FC = () => {
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
        </div>
      </div>
    </section>
  );
};

export default About;
