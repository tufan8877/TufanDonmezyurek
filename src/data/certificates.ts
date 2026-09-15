export interface Certificate {
  manufacturer: string;
  courseName: string;
  issuer: string;
  year: string;
  filePath: string;
}

// PDF-Dateien liegen im public-Ordner und sind dadurch direkt über /Dateiname.pdf erreichbar.
export const certificates: Certificate[] = [
  {
    manufacturer: 'Vaillant',
    courseName: 'Vaillant Schulungen & Trainings 2024 (7 Nachweise)',
    issuer: 'Vaillant Group Austria GmbH',
    year: '2024',
    filePath: '/Vaillant-Zertifikate-2024.pdf',
  },
  {
    manufacturer: 'Bosch',
    courseName: 'Bosch Schulungen 2023 (2 Nachweise)',
    issuer: 'Robert Bosch AG – Geschäftsbereich Thermotechnik',
    year: '2023',
    filePath: '/Bosch-Zertifikate-2023.pdf',
  },
  {
    manufacturer: 'Wolf',
    courseName: 'Gas-Brennwert CGB-2 · Regelung BM-2 · Geräteaufbau, Anwendung & Hydraulik · Inbetriebnahme und Wartung',
    issuer: 'Wolf – Infocenter Wien',
    year: '2024',
    filePath: '/Wolf-Zertifikat-2024.pdf',
  },
];

export const certificatePlaceholders: string[] = [];
