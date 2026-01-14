'use client';

import { Section } from '@/components/ui';
import ClientLogo from './ClientLogo';

// Brand colors
const BRAND_ORANGE = '#f5a623';

// Client data with custom styling configurations
const clients = [
  { name: 'Saudi Aramco', logoBase: 'aramco' },
  { name: 'KAUST', logoBase: 'kaust' },
  { name: 'Royal Commission', logoBase: 'royal-commission', bgClass: 'bg-neutral-800' },
  { name: 'China Communications Construction Company', logoBase: 'ccc' },
  { name: 'SATROP Refinery', logoBase: 'satrop' },
  { name: 'Sinohydro', logoBase: 'sino' },
  { name: 'SABIC', logoBase: 'sabic' },
  { name: 'Linde', logoBase: 'linde' },
  { name: 'China Harbour Engineering Company', logoBase: 'hec', logoSize: '90%' },
  { name: 'Baytur', logoBase: 'baytur' }
];

// Reusable Components
const ClientLogoCard = ({ client }) => {
  const bgClass = client.bgClass || 'bg-white';
  const logoSize = client.logoSize || '100%';

  return (
    <div className={`${bgClass} p-3 sm:p-4 flex items-center justify-center h-20 sm:h-24 flex-shrink-0 rounded-sm w-32 sm:w-40`}>
      <div className="w-full h-full flex items-center justify-center">
        <ClientLogo
          name={client.name}
          logoBase={client.logoBase}
          className="object-contain"
          style={{
            maxWidth: logoSize,
            maxHeight: logoSize,
            width: logoSize,
            height: 'auto'
          }}
        />
      </div>
    </div>
  );
};

const QuoteSection = () => (
  <div
    className="relative w-full lg:absolute lg:top-0 lg:bottom-0 lg:right-0 lg:w-1/2 h-56 sm:h-64 md:h-72 lg:h-full mt-6 sm:mt-8 lg:mt-0 overflow-hidden rounded lg:rounded-none bg-neutral-800"
    style={{
      backgroundImage: 'url(/images/about/backgrounds/city-skyline.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}
  >
    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/70 to-neutral-900/50" />

    {/* Quote Content */}
    <div className="relative z-10 h-full flex items-center justify-start px-6 sm:px-8 md:px-10 py-10 sm:py-12 md:py-14">
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white font-light leading-relaxed max-w-xl">
        Committed to make a positive difference to the communities in which it operates.
      </p>
    </div>
  </div>
);

// Main Component
export default function ClientsSection() {
  // Duplicate clients array for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients];

  return (
    <Section
      className="pt-4 pb-6 sm:pt-6 sm:pb-8 md:pt-8 md:pb-10 lg:pt-10 lg:pb-12 relative overflow-hidden"
      style={{ backgroundColor: BRAND_ORANGE }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">

        {/* Left Panel - Client Logos Infinite Scroll */}
        <div className="flex flex-col space-y-6 sm:space-y-8">

          {/* Header */}
          <h2 className="text-xl sm:text-2xl md:text-3xl text-neutral-700 tracking-wide font-extrabold leading-tight uppercase relative inline-block pb-2 sm:pb-3">
            Our Clients
            <div className="absolute bottom-0 left-0 right-0 w-full h-0.5 sm:h-1" style={{ backgroundColor: '#f5f5f5' }}></div>
          </h2>

          {/* Infinite Scroll Container */}
          <div className="relative overflow-hidden w-full h-20 sm:h-24">
            {/* Scrolling Track */}
            <div className="flex gap-3 sm:gap-4 animate-infinite-scroll hover:pause-animation">
              {duplicatedClients.map((client, index) => (
                <ClientLogoCard key={`${client.logoBase}-${index}`} client={client} />
              ))}
            </div>
          </div>
        </div>

        {/* Right Panel - Quote with Background */}
        <QuoteSection />

      </div>

      {/* Inline CSS for Animation */}
      <style jsx>{`
        @keyframes infinite-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-infinite-scroll {
          animation: infinite-scroll 30s linear infinite;
        }

        .pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>
    </Section>
  );
}
