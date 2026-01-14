'use client';

import { Check } from 'lucide-react';

export default function FabricationContent() {
  return (
    <div className="space-y-6">
      {/* Section Heading */}
      <div>
        <h2 className="text-xl sm:text-2xl font-semibold text-neutral-800 pb-2 border-b-2 inline-block" style={{ borderColor: '#f5a623' }}>
          Workshop & Fabrication Facilities
        </h2>
      </div>

      {/* Description */}
      <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
        Our in-house workshop facilities support fabrication, machining, and maintenance works under controlled conditions.
      </p>

      {/* Technical Features List */}
      <ul className="space-y-3">
        <li className="flex items-start gap-3 text-neutral-600 text-sm sm:text-base">
          <Check
            className="w-5 h-5 flex-shrink-0 mt-0.5"
            style={{ color: '#f5a623' }}
            strokeWidth={2.5}
          />
          <span className="leading-relaxed">CNC cutting and plate processing</span>
        </li>
        <li className="flex items-start gap-3 text-neutral-600 text-sm sm:text-base">
          <Check
            className="w-5 h-5 flex-shrink-0 mt-0.5"
            style={{ color: '#f5a623' }}
            strokeWidth={2.5}
          />
          <span className="leading-relaxed">Rolling, bending, and machining</span>
        </li>
        <li className="flex items-start gap-3 text-neutral-600 text-sm sm:text-base">
          <Check
            className="w-5 h-5 flex-shrink-0 mt-0.5"
            style={{ color: '#f5a623' }}
            strokeWidth={2.5}
          />
          <span className="leading-relaxed">Blasting and painting facilities</span>
        </li>
        <li className="flex items-start gap-3 text-neutral-600 text-sm sm:text-base">
          <Check
            className="w-5 h-5 flex-shrink-0 mt-0.5"
            style={{ color: '#f5a623' }}
            strokeWidth={2.5}
          />
          <span className="leading-relaxed">Fabrication and maintenance support</span>
        </li>
      </ul>
    </div>
  );
}
