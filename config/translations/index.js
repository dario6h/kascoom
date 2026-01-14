/**
 * Translation System - Main Export
 *
 * Central export point for all translations.
 * Pattern: { en: 'English text', ar: 'Arabic text' }
 */

import { common } from './common';
import { navigation } from './navigation';
import { about } from './about';
import { services } from './services';
import { projects } from './projects';
import { contact } from './contact';

export const translations = {
  common,
  navigation,
  about,
  services,
  projects,
  contact
};

export default translations;
