import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { cn } from '../lib/utils';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Who can benefit from your services?",
    answer: "Our services are designed for individuals seeking psychotherapy and organizations looking to improve mental well-being at the workplace. We work with employees, leaders, business owners, teams, and individuals facing stress, anxiety, burnout, trauma, or personal challenges."
  },
  {
    question: "How is corporate mental health different from individual therapy?",
    answer: "Corporate mental health focuses on prevention, awareness, and skill-building within organizations, while individual therapy focuses on personal mental health concerns. Both aim to improve well-being, but corporate services are structured for teams and leaders, whereas therapy is one-on-one."
  },
  {
    question: "What happens in an individual psychotherapy session?",
    answer: "Each session is a confidential one-on-one conversation lasting 50–60 minutes. You will talk about your concerns, goals, and challenges. Together, we work on practical coping strategies and emotional understanding using evidence-based approaches like CBT, DBT, and ACT."
  },
  {
    question: "Do I need a diagnosis to start therapy?",
    answer: "No. You don't need a diagnosis to begin therapy. Many people come to therapy for stress, emotional overwhelm, relationship issues, or personal growth, not just mental health disorders."
  },
  {
    question: "Are the sessions confidential?",
    answer: "Yes. All individual sessions are strictly confidential, following professional and ethical guidelines. For corporate workshops, only general observations are shared—no personal information is disclosed."
  },
  {
    question: "How are corporate workshops and trainings conducted?",
    answer: "Corporate workshops are interactive and practical, including discussions, activities, role-plays, and real-life examples. They are designed to be engaging and easy to understand, without heavy psychological jargon."
  },
  {
    question: "Can workshops be customized for our organization?",
    answer: "Absolutely. All workshops and trainings are customized based on your organization's needs, industry, workforce, and stress levels. Duration and content can be adjusted for half-day, full-day, or multi-day programs."
  },
  {
    question: "What is gatekeeper training and who should attend it?",
    answer: "Gatekeeper training helps leaders, managers, and supervisors identify early signs of mental distress and respond appropriately. It is especially useful in high-stress environments to prevent crises and promote timely support."
  },
  {
    question: "How do psychological assessments help?",
    answer: "Psychological assessments provide clear insights into personality, emotional functioning, cognitive abilities, and mental health. They help in better self-understanding, treatment planning, and personal or professional development."
  },
  {
    question: "How do I know which service is right for me or my organization?",
    answer: "We offer a free initial consultation to understand your needs and recommend the most suitable service. Whether you're an individual seeking therapy or an organization looking for workshops, we'll guide you to the right solution based on your specific goals and challenges."
  }
];

const FAQItem: React.FC<{ item: FAQItem; index: number; isOpen: boolean; onToggle: () => void }> = ({ 
  item, 
  index, 
  isOpen, 
  onToggle 
}) => {
  return (
    <div 
      className={cn(
        "group border rounded-xl overflow-hidden transition-all duration-300",
        isOpen 
          ? "border-primary/40 bg-gradient-to-r from-primary/5 to-[var(--kunj-java)]/5 shadow-md" 
          : "border-slate-200 hover:border-primary/30 hover:shadow-sm bg-white"
      )}
    >
      <button
        onClick={onToggle}
        className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-start gap-4 text-left transition-colors"
        aria-expanded={isOpen}
      >
        <span className={cn(
          "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300",
          isOpen 
            ? "bg-gradient-to-r from-primary to-[var(--kunj-java)] text-white" 
            : "bg-slate-100 text-slate-500 group-hover:bg-primary/10 group-hover:text-primary"
        )}>
          {index + 1}
        </span>
        <span className={cn(
          "flex-1 text-base sm:text-lg font-medium transition-colors pt-0.5",
          isOpen ? "text-primary" : "text-slate-800 group-hover:text-primary"
        )}>
          {item.question}
        </span>
        <ChevronDown 
          className={cn(
            "flex-shrink-0 w-5 h-5 transition-all duration-300 mt-1",
            isOpen 
              ? "rotate-180 text-primary" 
              : "text-slate-400 group-hover:text-primary"
          )} 
        />
      </button>
      <div 
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
          <div className="pl-12 border-l-2 border-primary/20 ml-4">
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              {item.answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-slate-50">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[var(--kunj-java)]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-primary/10 to-[var(--kunj-java)]/10 mb-5">
            <HelpCircle className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 px-2 sm:px-0">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-primary via-[var(--kunj-java)] to-primary bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2 sm:px-0">
            Find answers to common questions about our psychotherapy services, corporate workshops, and how we can support your mental well-being journey.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3 sm:space-y-4">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              item={item}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 sm:mt-14 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-primary/5 to-[var(--kunj-java)]/5 border border-primary/10">
            <p className="text-slate-600 text-sm sm:text-base">
              Still have questions? We're here to help.
            </p>
            <a
              href="#reachout"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('reachout');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center px-5 py-2.5 rounded-lg bg-gradient-to-r from-primary to-[var(--kunj-java)] text-white font-medium text-sm transition-all hover:shadow-lg hover:scale-105 cursor-pointer"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

