import React from 'react';
import ServiceCard from './ServiceCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Card, CardContent } from './ui/card';
import { cn } from '../lib/utils';
import { Heart, Brain, Users, Briefcase } from 'lucide-react';

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
            Professional mental health support tailored to your needs. Evidence-based therapies delivered with compassion and expertise.
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
                desc="Comprehensive one-on-one therapy sessions designed to address your unique mental health needs. We provide a safe, confidential space for you to explore your thoughts, feelings, and behaviors while developing effective coping strategies."
                icon={<Heart className="h-6 w-6 text-white" />}
                features={[
                  "Personalized treatment plans tailored to your specific needs",
                  "Evidence-based therapies: CBT, DBT, and ACT",
                  "Anxiety and panic disorder management",
                  "Depression and mood disorder treatment",
                  "Trauma recovery and PTSD support",
                  "Self-esteem and confidence building",
                  "Personality development and growth",
                  "Stress and anger management",
                  "Relationship and interpersonal issues",
                  "Grief and loss counseling"
                ]}
                duration="50-60 minutes per session, frequency based on individual needs"
                approach="Integrative approach combining Cognitive Behavioral Therapy (CBT), Dialectical Behavior Therapy (DBT), and Acceptance and Commitment Therapy (ACT) to provide comprehensive, evidence-based treatment."
              />
              <ServiceCard 
                title="Psychological Assessments" 
                desc="Comprehensive psychological evaluations to understand your cognitive functioning, personality traits, and mental health status. These assessments provide valuable insights for treatment planning and personal development."
                icon={<Brain className="h-6 w-6 text-white" />}
                features={[
                  "Clinical psychological assessments",
                  "Cognitive functioning evaluations",
                  "Personality assessments and profiling",
                  "Mental health diagnostic evaluations",
                  "Learning disability assessments",
                  "Attention and concentration testing",
                  "Emotional intelligence assessments",
                  "Detailed feedback sessions",
                  "Personalized growth and development plans",
                  "Written assessment reports"
                ]}
                duration="2-4 hours for complete assessment, includes feedback session"
                approach="Standardized psychological tests combined with clinical interviews to provide comprehensive understanding of your psychological profile and needs."
              />
            </div>
          </TabsContent>

          <TabsContent value="orgs" className="mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ServiceCard 
                title="Seminars & Trainings" 
                desc="Specialized training programs for organizations, particularly those serving high-stress environments. Based on extensive experience with the Indian Army, these programs focus on early identification, prevention, and management of mental health crises."
                icon={<Users className="h-6 w-6 text-white" />}
                features={[
                  "Gatekeeper training for unit leaders and supervisors",
                  "Early identification of mental health concerns",
                  "Stress management and resilience building",
                  "Suicide prevention and intervention training",
                  "Crisis management protocols",
                  "Mental health first aid training",
                  "Trauma-informed care workshops",
                  "Peer support system development",
                  "Leadership mental health awareness",
                  "Customized training modules for your organization"
                ]}
                duration="Half-day to multi-day programs, customizable based on organizational needs"
                approach="Evidence-based training methodologies combined with real-world experience from military and civilian settings. Interactive workshops with practical exercises and role-playing scenarios."
              />
              <ServiceCard 
                title="Corporate Workshops" 
                desc="Tailored mental health workshops designed to enhance workplace well-being, improve team dynamics, and build organizational resilience. These workshops help create a mentally healthy workplace culture."
                icon={<Briefcase className="h-6 w-6 text-white" />}
                features={[
                  "Workplace stress management strategies",
                  "Building empathy and emotional intelligence",
                  "Effective communication skills training",
                  "Team resilience and cohesion building",
                  "Work-life balance workshops",
                  "Burnout prevention and management",
                  "Conflict resolution and mediation",
                  "Mental health awareness in the workplace",
                  "Creating supportive work environments",
                  "Employee wellness programs"
                ]}
                duration="2-4 hour workshops, can be customized for half-day or full-day programs"
                approach="Interactive, engaging workshops that combine psychoeducation with practical exercises. Focus on building skills that employees can immediately apply in their work and personal lives."
              />
            </div>
          </TabsContent>
        </Tabs>

        {/* Additional Information Section */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-primary/5 to-[var(--kunj-java)]/5 border-primary/20">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Evidence-Based</h3>
                  <p className="text-sm text-muted-foreground">
                    All services are grounded in scientific research and proven therapeutic methodologies
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Confidential</h3>
                  <p className="text-sm text-muted-foreground">
                    Complete privacy and confidentiality maintained in accordance with professional ethics
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Personalized</h3>
                  <p className="text-sm text-muted-foreground">
                    Tailored approaches that respect your unique needs, background, and goals
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
