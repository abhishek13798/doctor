import React from 'react';

const About: React.FC = () => (
  <section id="about" className="bg-white py-12 sm:py-16 border-y border-slate-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="space-y-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center lg:items-start">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">About Ms. Rimjhim</h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Ms. Rimjhim is a Licensed Clinical Psychologist (RCI) with extensive experience serving both the Indian Army and civilian populations. She integrates evidence‑based therapies like CBT, DBT, and ACT in her practice to help individuals enhance emotional regulation, manage stress, and build resilience.
            </p>
          </div>
          <div className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 flex-shrink-0">
            <img 
              src="/founder.png" 
              alt="Ms. Rimjhim, Clinical Psychologist" 
              className="w-full h-full object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {["Empathy & Confidentiality", "Evidence‑based Practice", "Holistic Healing"].map((v) => (
            <div key={v} className="bg-[var(--kunj-light)] p-4 sm:p-5 rounded-xl sm:rounded-2xl ring-1 ring-[var(--kunj-eb)]">
              <p className="font-medium text-[var(--kunj-eb)] text-sm sm:text-base">{v}</p>
              <p className="mt-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                We uphold the highest professional and ethical standards to ensure your mental well‑being.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
