import React from 'react';
import { Mail, MessageCircle } from 'lucide-react';

const ReachOut: React.FC = () => (
  <section id="reachout" className="bg-white py-12 sm:py-16 border-t border-slate-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h3 className="text-xl sm:text-2xl font-semibold">Let's Work Together</h3>
      <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
        Reach out to schedule your first consultation or organise a workshop.
      </p>
      <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto">
        <a 
          href="https://wa.me/919103034279" 
          className="btn-primary px-6 py-3 font-medium shadow-md flex items-center justify-center gap-2 text-sm sm:text-base"
        >
          <MessageCircle size={18}/> Chat on WhatsApp
        </a>
        <a 
          href="mailto:kunjcare@gmail.com" 
          className="border px-6 py-3 font-medium border-[var(--kunj-eb)] text-[var(--kunj-eb)] rounded-xl flex items-center justify-center gap-2 text-sm sm:text-base"
        >
          <Mail size={18}/> Send Email
        </a>
      </div>
      <p className="mt-4 text-xs sm:text-sm text-slate-500">
        Website: <a href="https://www.kunjcare.com" className="link hover:underline">www.kunjcare.com</a>
      </p>
    </div>
  </section>
);

export default ReachOut;
