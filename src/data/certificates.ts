export interface Certificate {
  manufacturer: string;
  courseName: string;
  issuer: string;
  year: string;
  filePath: string;
}

// Um ein Zertifikat hinzuzufügen:
// 1. PDF-Datei ablegen unter: public/documents/certificates/
// 2. Eintrag in diesem Array hinzufügen
// 3. filePath relativ zu /public angeben (z.B. "/documents/certificates/vaillant-wartung.pdf")
export const certificates: Certificate[] = [];

export const certificatePlaceholders: string[] = [
  'Vaillant',
  'Junkers / Bosch',
  'Wolf',
];
