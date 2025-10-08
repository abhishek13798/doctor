import React, { useState } from 'react';
import ServiceCard from './ServiceCard';

const Services: React.FC = () => {
  const [tab, setTab] = useState<'patients' | 'orgs'>('patients');
  
  return (
    <section id="services" className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-center sm:text-left">Services</h2>
          <div className="flex bg-[var(--kunj-light)] rounded-xl p-1 w-full sm:w-auto">
            <button 
              onClick={() => setTab('patients')} 
              className={`flex-1 sm:flex-none px-4 py-2 rounded-lg text-sm font-medium ${tab==='patients'?'bg-white text-[var(--kunj-eb)]':'text-slate-600'}`}
            >
              Patients
            </button>
            <button 
              onClick={() => setTab('orgs')} 
              className={`flex-1 sm:flex-none px-4 py-2 rounded-lg text-sm font-medium ${tab==='orgs'?'bg-white text-[var(--kunj-eb)]':'text-slate-600'}`}
            >
              Organisations
            </button>
          </div>
        </div>

        {tab === 'patients' ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8">
            <ServiceCard 
              title="Individual Psychotherapy" 
              desc="Therapy sessions for anxiety, depression, trauma recovery, self‑esteem, and personality development." 
            />
            <ServiceCard 
              title="Psychological Assessments" 
              desc="Clinical, cognitive and personality assessments with feedback and growth plans." 
            />
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8">
            <ServiceCard 
              title="Seminars & Trainings" 
              desc="Gatekeeper trainings for unit leaders — early identification, stress management & suicide prevention (Army experience)." 
            />
            <ServiceCard 
              title="Corporate Workshops" 
              desc="Customised mental health workshops focusing on empathy, communication and team resilience." 
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
