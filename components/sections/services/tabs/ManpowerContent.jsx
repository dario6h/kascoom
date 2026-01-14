'use client';

import { Check } from 'lucide-react';

export default function ManpowerContent() {
  return (
    <div className="space-y-6">
      {/* Section Heading */}
      <div>
        <h2 className="text-xl sm:text-2xl font-semibold text-neutral-800 pb-2 border-b-2 inline-block" style={{ borderColor: '#f5a623' }}>
          Manpower Supply & Technical Staffing
        </h2>
      </div>

      {/* Description */}
      <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
        We supply qualified technical manpower to support project execution, supervision, and operational requirements.
      </p>

      {/* Technical Features List */}
      <ul className="space-y-3">
        <li className="flex items-start gap-3 text-neutral-600 text-sm sm:text-base">
          <Check
            className="w-5 h-5 flex-shrink-0 mt-0.5"
            style={{ color: '#f5a623' }}
            strokeWidth={2.5}
          />
          <span className="leading-relaxed">Engineers and supervisors (Civil, Mechanical, Electrical)</span>
        </li>
        <li className="flex items-start gap-3 text-neutral-600 text-sm sm:text-base">
          <Check
            className="w-5 h-5 flex-shrink-0 mt-0.5"
            style={{ color: '#f5a623' }}
            strokeWidth={2.5}
          />
          <span className="leading-relaxed">QA/QC managers, engineers, and inspectors</span>
        </li>
        <li className="flex items-start gap-3 text-neutral-600 text-sm sm:text-base">
          <Check
            className="w-5 h-5 flex-shrink-0 mt-0.5"
            style={{ color: '#f5a623' }}
            strokeWidth={2.5}
          />
          <span className="leading-relaxed">HSE managers, officers, and supervisors</span>
        </li>
        <li className="flex items-start gap-3 text-neutral-600 text-sm sm:text-base">
          <Check
            className="w-5 h-5 flex-shrink-0 mt-0.5"
            style={{ color: '#f5a623' }}
            strokeWidth={2.5}
          />
          <span className="leading-relaxed">Skilled trades and technical workforce</span>
        </li>
      </ul>
    </div>
  );
}
