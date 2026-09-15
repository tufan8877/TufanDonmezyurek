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
];

export const certificatePlaceholders: string[] = [
  'Junkers / Bosch',
  'Wolf',
];
