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
    <section id="about" className="relative py-16 sm:py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-center lg:items-start">
            <div className="flex-1 text-center lg:text-left space-y-6">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                  About{' '}
                  <span className="bg-gradient-to-r from-[var(--kunj-eb)] to-[var(--kunj-java)] bg-clip-text text-transparent">
                    Ms. Rimjhim
                  </span>
                </h2>
                <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto lg:mx-0">
                  Ms. Rimjhim is a <strong>Licensed Clinical Psychologist (RCI)</strong> with extensive experience serving both the Indian Army and civilian populations. She integrates evidence‑based therapies like <strong>CBT, DBT, and ACT</strong> in her practice to help individuals enhance emotional regulation, manage stress, and build resilience.
                </p>
              </div>
            </div>
            <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 flex-shrink-0 group">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[var(--kunj-eb)] to-[var(--kunj-java)] rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <img 
                  src="/founder.png" 
                  alt="Ms. Rimjhim, Clinical Psychologist" 
                  className="relative w-full h-full object-cover rounded-2xl shadow-xl transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <Card key={value.title} className="group hover:border-[var(--kunj-eb)]/50 transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--kunj-eb)] to-[var(--kunj-java)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
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
