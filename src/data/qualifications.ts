export interface QualificationGroup {
  title: string;
  icon: string;
  items: string[];
}

export const qualifications: QualificationGroup[] = [
  {
    title: 'Service & Wartung',
    icon: 'wrench',
    items: [
      'Wartung von Heizungsanlagen',
      'Wartung von Gasgeräten',
      'Vorbeugende Instandhaltung',
      'Technische Kontrolle',
    ],
  },
  {
    title: 'Störungsdiagnose',
    icon: 'search',
    items: [
      'Strukturierte Fehlersuche',
      'Technische Fehleranalyse',
      'Störungslokalisierung',
      'Reparatur',
      'Funktionskontrolle',
    ],
  },
  {
    title: 'Heiztechnik',
    icon: 'flame',
    items: [
      'Heizungsanlagen',
      'Gasgeräte',
      'Fernwärmetechnik',
      'Wohnungsstationen',
      'Pumpen',
      'Armaturen',
      'Regelungskomponenten',
    ],
  },
  {
    title: 'Kundendienst',
    icon: 'headset',
    items: [
      'Kundenberatung',
      'Selbstständige Einsätze',
      'Lösungsfindung vor Ort',
      'Einsatzdokumentation',
      'Professioneller Kundenkontakt',
    ],
  },
  {
    title: 'Weitere technische Erfahrung',
    icon: 'camera',
    items: [
      'Kanalinspektion',
      'TV-Inspektion',
      'Befundung',
      'Grundlagen Elektrotechnik',
    ],
  },
];

export interface TrainingItem {
  manufacturer: string;
}

export const trainings: TrainingItem[] = [
  { manufacturer: 'Vaillant' },
  { manufacturer: 'Junkers / Bosch' },
  { manufacturer: 'Wolf' },
];
