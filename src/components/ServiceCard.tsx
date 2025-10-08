import React from 'react';
import { ChevronRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  desc: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, desc }) => (
  <div className="bg-white rounded-xl sm:rounded-2xl ring-1 ring-slate-200 p-4 sm:p-6 shadow-sm">
    <h3 className="text-lg sm:text-xl font-semibold text-[var(--kunj-eb)]">{title}</h3>
    <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">{desc}</p>
    <a 
      href="#reachout" 
      className="inline-flex items-center gap-2 text-sm font-medium link mt-4 hover:gap-3 transition-all"
    >
      Learn More <ChevronRight size={16}/>
    </a>
  </div>
);

export default ServiceCard;
