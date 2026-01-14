'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MessageCircle, MapPin } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t, language } = useTranslation();
  const { setLanguage } = useLanguage();
  return (
    <footer style={{ backgroundColor: '#3d3d3d' }} className="text-neutral-300 border-t border-neutral-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="mb-6">
                <Image
                  src="/images/logo.png"
                  alt="KASCOOM Logo"
                  width={160}
                  height={53}
                  className="w-auto h-auto"
                />
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold text-lg mb-4">{t('navigation.footer.usefulLinks')}</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-sm text-neutral-300 hover:text-accent-yellow transition-colors">
                    {t('navigation.menu.about')}
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-sm text-neutral-300 hover:text-accent-yellow transition-colors">
                    {t('navigation.menu.services')}
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="text-sm text-neutral-300 hover:text-accent-yellow transition-colors">
                    {t('navigation.menu.projects')}
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-neutral-300 hover:text-accent-yellow transition-colors">
                    {t('navigation.menu.contact')}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold text-lg mb-4">{t('navigation.footer.contact')}</h3>
              <ul className="space-y-3">
                <li>
                  <a href="tel:+966567320332" className="text-sm text-neutral-300 hover:text-accent-yellow transition-colors flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    +966 56 732 0332
                  </a>
                </li>
                <li>
                  <a href="mailto:info@kascoom.com" className="text-sm text-neutral-300 hover:text-accent-yellow transition-colors flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    info@kascoom.com
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/966567320332" target="_blank" rel="noopener noreferrer" className="text-sm text-neutral-300 hover:text-accent-yellow transition-colors flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" />
                    {t('common.labels.whatsapp')}
                  </a>
                </li>
                <li>
                  <span className="text-sm text-neutral-300 flex items-start gap-2">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span style={{ whiteSpace: 'pre-line' }}>
                      {t('navigation.footer.address')}
                    </span>
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold text-lg mb-4">{t('navigation.footer.language')}</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setLanguage('ar')}
                    className={`text-sm transition-colors ${language === 'ar' ? 'text-accent-yellow' : 'text-neutral-300 hover:text-accent-yellow'}`}
                  >
                    العربية
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setLanguage('en')}
                    className={`text-sm transition-colors ${language === 'en' ? 'text-accent-yellow' : 'text-neutral-300 hover:text-accent-yellow'}`}
                  >
                    English
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-neutral-600">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm text-neutral-300">
                {t('navigation.footer.copyright')}
              </p>
            </div>
          </div>
        </div>
      </footer>
  );
}