'use client';

import { Check } from 'lucide-react';

export default function EngineeringContent() {
  return (
    <div className="space-y-6">
      {/* Section Heading */}
      <div>
        <h2 className="text-xl sm:text-2xl font-semibold text-neutral-800 pb-2 border-b-2 inline-block" style={{ borderColor: '#f5a623' }}>
          Engineering, Fabrication & Erection
        </h2>
      </div>

      {/* Description */}
      <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
        We deliver integrated fabrication and erection services for industrial projects, executed in accordance with project specifications, industry standards, and safety requirements.
      </p>

      {/* Technical Features List */}
      <ul className="space-y-3">
        <li className="flex items-start gap-3 text-neutral-600 text-sm sm:text-base">
          <Check
            className="w-5 h-5 flex-shrink-0 mt-0.5"
            style={{ color: '#f5a623' }}
            strokeWidth={2.5}
          />
          <span className="leading-relaxed">Process, power, and underground piping</span>
        </li>
        <li className="flex items-start gap-3 text-neutral-600 text-sm sm:text-base">
          <Check
            className="w-5 h-5 flex-shrink-0 mt-0.5"
            style={{ color: '#f5a623' }}
            strokeWidth={2.5}
          />
          <span className="leading-relaxed">Steel structure fabrication & erection</span>
        </li>
        <li className="flex items-start gap-3 text-neutral-600 text-sm sm:text-base">
          <Check
            className="w-5 h-5 flex-shrink-0 mt-0.5"
            style={{ color: '#f5a623' }}
            strokeWidth={2.5}
          />
          <span className="leading-relaxed">Storage tanks fabrication & installation</span>
        </li>
        <li className="flex items-start gap-3 text-neutral-600 text-sm sm:text-base">
          <Check
            className="w-5 h-5 flex-shrink-0 mt-0.5"
            style={{ color: '#f5a623' }}
            strokeWidth={2.5}
          />
          <span className="leading-relaxed">Ducts, stacks, vessels, and heat exchangers</span>
        </li>
        <li className="flex items-start gap-3 text-neutral-600 text-sm sm:text-base">
          <Check
            className="w-5 h-5 flex-shrink-0 mt-0.5"
            style={{ color: '#f5a623' }}
            strokeWidth={2.5}
          />
          <span className="leading-relaxed">Pipe supports and electro-mechanical works</span>
        </li>
      </ul>
    </div>
  );
}
