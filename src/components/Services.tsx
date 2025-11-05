import React from 'react';
import ServiceCard from './ServiceCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { cn } from '../lib/utils';

const Services: React.FC = () => {
  return (
    <section id="services" className="relative py-16 sm:py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Our{' '}
            <span className="bg-gradient-to-r from-primary via-[var(--kunj-java)] to-primary bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional mental health support tailored to your needs
          </p>
        </div>

        <Tabs defaultValue="patients" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className={cn(
              "bg-muted p-1 rounded-lg w-full sm:w-auto",
              "h-auto flex flex-row gap-1"
            )}>
              <TabsTrigger 
                value="patients" 
                className="flex-1 sm:flex-none px-6 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                For Patients
              </TabsTrigger>
              <TabsTrigger 
                value="orgs" 
                className="flex-1 sm:flex-none px-6 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                For Organizations
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="patients" className="mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ServiceCard 
                title="Individual Psychotherapy" 
                desc="Therapy sessions for anxiety, depression, trauma recovery, self‑esteem, and personality development." 
              />
              <ServiceCard 
                title="Psychological Assessments" 
                desc="Clinical, cognitive and personality assessments with feedback and growth plans." 
              />
            </div>
          </TabsContent>

          <TabsContent value="orgs" className="mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ServiceCard 
                title="Seminars & Trainings" 
                desc="Gatekeeper trainings for unit leaders — early identification, stress management & suicide prevention (Army experience)." 
              />
              <ServiceCard 
                title="Corporate Workshops" 
                desc="Customised mental health workshops focusing on empathy, communication and team resilience." 
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Services;
