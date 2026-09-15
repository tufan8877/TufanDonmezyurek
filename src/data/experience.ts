export interface ExperienceItem {
  period: string;
  title: string;
  company: string;
  location: string;
  tasks: string[];
}

export const experience: ExperienceItem[] = [
  {
    period: '03/2023 – heute',
    title: 'Servicetechniker / Installateur',
    company: 'Latt & Co GmbH',
    location: 'Wien',
    tasks: [
      'Wartung technischer Anlagen',
      'Wartung von Heizungs- und Gasgeräten',
      'Reparaturen',
      'Störungsbehebung',
      'Technische Fehleranalyse',
      'Selbstständige Fehlersuche',
      'Kundenberatung',
      'Einsatzdokumentation',
      'Arbeiten im technischen Kundendienst',
    ],
  },
  {
    period: '10/2021 – 02/2022',
    title: 'Verkäufer',
    company: 'Erisener & Co GsmbH',
    location: 'Wien',
    tasks: [],
  },
  {
    period: '08/2018 – 06/2021',
    title: 'Kanalinspektion',
    company: 'ASN Abfluss Service GmbH',
    location: 'Wien',
    tasks: [
      'TV-Kanalinspektion',
      'Befundung',
      'Technische Dokumentation',
    ],
  },
  {
    period: '11/2015 – 05/2016',
    title: 'Präsenzdienst',
    company: '3. Garde-Kompanie',
    location: 'Horn',
    tasks: [],
  },
  {
    period: '09/2013 – 11/2013',
    title: 'Elektrohelfer',
    company: 'Alles Sanitär und Elektro GmbH',
    location: 'Wien',
    tasks: [],
  },
];

export interface EducationItem {
  institution: string;
  description: string;
  focus?: string;
  note?: string;
  period?: string;
}

export const education: EducationItem[] = [
  {
    institution: 'Berufsschule für Sanitär-, Heizungs- und Klimatechnik Wien',
    description: 'Installations- und Gebäudetechnik',
    focus: 'Gas- und Sanitärtechnik',
    note: 'Lehrabschluss erfolgreich abgeschlossen',
  },
  {
    institution: 'AISV Oberstufen-Realgymnasium',
    description: 'Oberstufen-Realgymnasium',
    period: '2014 – 2015',
  },
  {
    institution: 'Wiener Mittelschule Roterdstraße',
    description: 'Mittelschule',
    period: '2009 – 2013',
  },
];

export interface KnowledgeItem {
  category: string;
  items: string[];
}

export const knowledge: KnowledgeItem[] = [
  {
    category: 'Sprachen',
    items: ['Deutsch – Muttersprache', 'Türkisch – Zweitsprache', 'Englisch – C1'],
  },
  {
    category: 'EDV',
    items: ['Microsoft Word', 'Microsoft Excel', 'Microsoft PowerPoint', 'Webdesign'],
  },
  {
    category: 'Führerschein',
    items: ['Klasse B'],
  },
];
