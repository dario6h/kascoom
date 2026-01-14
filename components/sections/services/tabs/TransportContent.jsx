'use client';

import { Check } from 'lucide-react';

export default function TransportContent() {
  return (
    <div className="space-y-6">
      {/* Section Heading */}
      <div>
        <h2 className="text-xl sm:text-2xl font-semibold text-neutral-800 pb-2 border-b-2 inline-block" style={{ borderColor: '#f5a623' }}>
          Transport & Equipment Rental
        </h2>
      </div>

      {/* Description */}
      <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
        We provide transport and equipment rental solutions to support site logistics and project execution.
      </p>

      {/* Technical Features List */}
      <ul className="space-y-3">
        <li className="flex items-start gap-3 text-neutral-600 text-sm sm:text-base">
          <Check
            className="w-5 h-5 flex-shrink-0 mt-0.5"
            style={{ color: '#f5a623' }}
            strokeWidth={2.5}
          />
          <span className="leading-relaxed">Transportation services for manpower and materials</span>
        </li>
        <li className="flex items-start gap-3 text-neutral-600 text-sm sm:text-base">
          <Check
            className="w-5 h-5 flex-shrink-0 mt-0.5"
            style={{ color: '#f5a623' }}
            strokeWidth={2.5}
          />
          <span className="leading-relaxed">Cranes, forklifts, boom trucks, and manlifts</span>
        </li>
        <li className="flex items-start gap-3 text-neutral-600 text-sm sm:text-base">
          <Check
            className="w-5 h-5 flex-shrink-0 mt-0.5"
            style={{ color: '#f5a623' }}
            strokeWidth={2.5}
          />
          <span className="leading-relaxed">Industrial vehicles and site support equipment</span>
        </li>
      </ul>
    </div>
  );
}
