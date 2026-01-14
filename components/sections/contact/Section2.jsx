'use client';

import { Section } from '@/components/ui';
import Image from 'next/image';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

export default function ContactSection() {
  const { t } = useTranslation();

  return (
    <Section className="pt-6 sm:pt-8 md:pt-10 pb-6 sm:pb-8 md:pb-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Contact Information */}
          <div>
            {/* Contact Grid - 2x2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Phone Number */}
              <a
                href="tel:+966567320332"
                className="flex flex-col items-center text-center p-6 border border-neutral-200 hover:border-[#f5a623] transition-all duration-300 hover:shadow-md cursor-pointer group"
                style={{ backgroundColor: '#f5f5f5' }}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: 'rgba(245, 166, 35, 0.1)' }}>
                  <Phone className="w-6 h-6" style={{ color: '#f5a623' }} />
                </div>
                <h3 className="text-base font-semibold text-neutral-800 mb-2">{t('contact.info.phoneNumber')}</h3>
                <p className="text-sm text-neutral-600 group-hover:text-[#f5a623] transition-colors">+966 56 732 0332</p>
              </a>

              {/* Email */}
              <a
                href="mailto:info@kascoom.com"
                className="flex flex-col items-center text-center p-6 border border-neutral-200 hover:border-[#f5a623] transition-all duration-300 hover:shadow-md cursor-pointer group"
                style={{ backgroundColor: '#f5f5f5' }}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: 'rgba(245, 166, 35, 0.1)' }}>
                  <Mail className="w-6 h-6" style={{ color: '#f5a623' }} />
                </div>
                <h3 className="text-base font-semibold text-neutral-800 mb-2">{t('contact.info.email')}</h3>
                <p className="text-sm text-neutral-600 group-hover:text-[#f5a623] transition-colors break-all">info@kascoom.com</p>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/966567320332"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-center p-6 border border-neutral-200 hover:border-[#f5a623] transition-all duration-300 hover:shadow-md cursor-pointer group"
                style={{ backgroundColor: '#f5f5f5' }}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: 'rgba(245, 166, 35, 0.1)' }}>
                  <MessageCircle className="w-6 h-6" style={{ color: '#f5a623' }} />
                </div>
                <h3 className="text-base font-semibold text-neutral-800 mb-2">{t('contact.info.whatsapp')}</h3>
                <p className="text-sm text-neutral-600 group-hover:text-[#f5a623] transition-colors">+966 56 732 0332</p>
              </a>

              {/* Address - Not Clickable */}
              <div className="flex flex-col items-center text-center p-6 border border-neutral-200 hover:border-[#f5a623] transition-all duration-300 hover:shadow-md" style={{ backgroundColor: '#f5f5f5' }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(245, 166, 35, 0.1)' }}>
                  <MapPin className="w-6 h-6" style={{ color: '#f5a623' }} />
                </div>
                <h3 className="text-base font-semibold text-neutral-800 mb-2">{t('contact.info.address')}</h3>
                <p className="text-xs text-neutral-600 leading-relaxed" style={{ whiteSpace: 'pre-line' }}>
                  {t('contact.info.addressText')}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Logo Area */}
          <div className="flex flex-col items-center justify-center text-center lg:order-last order-first">
            <div className="mb-6">
              <Image
                src="/images/logo.png"
                alt="KASCOOM Logo"
                width={200}
                height={80}
                className="w-auto h-auto max-w-full"
              />
            </div>
            <p className="text-neutral-700 text-base sm:text-lg italic max-w-md">
              {t('contact.info.tagline')}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
