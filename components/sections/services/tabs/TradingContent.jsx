'use client';

import { Check } from 'lucide-react';

export default function TradingContent() {
  return (
    <div className="space-y-6">
      {/* Section Heading */}
      <div>
        <h2 className="text-xl sm:text-2xl font-semibold text-neutral-800 pb-2 border-b-2 inline-block" style={{ borderColor: '#f5a623' }}>
          Trading & Material Supply
        </h2>
      </div>

      {/* Description */}
      <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
        We supply industrial materials and equipment through reliable sourcing channels to meet project and operational needs.
      </p>

      {/* Technical Features List */}
      <ul className="space-y-3">
        <li className="flex items-start gap-3 text-neutral-600 text-sm sm:text-base">
          <Check
            className="w-5 h-5 flex-shrink-0 mt-0.5"
            style={{ color: '#f5a623' }}
            strokeWidth={2.5}
          />
          <span className="leading-relaxed">Pipes, fittings, plates (CS, SS, alloy)</span>
        </li>
        <li className="flex items-start gap-3 text-neutral-600 text-sm sm:text-base">
          <Check
            className="w-5 h-5 flex-shrink-0 mt-0.5"
            style={{ color: '#f5a623' }}
            strokeWidth={2.5}
          />
          <span className="leading-relaxed">Industrial valves and accessories</span>
        </li>
        <li className="flex items-start gap-3 text-neutral-600 text-sm sm:text-base">
          <Check
            className="w-5 h-5 flex-shrink-0 mt-0.5"
            style={{ color: '#f5a623' }}
            strokeWidth={2.5}
          />
          <span className="leading-relaxed">Mechanical, electrical, and instrumentation materials</span>
        </li>
        <li className="flex items-start gap-3 text-neutral-600 text-sm sm:text-base">
          <Check
            className="w-5 h-5 flex-shrink-0 mt-0.5"
            style={{ color: '#f5a623' }}
            strokeWidth={2.5}
          />
          <span className="leading-relaxed">Safety and fire-fighting equipment</span>
        </li>
      </ul>
    </div>
  );
}
