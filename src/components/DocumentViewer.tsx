import { useState } from 'react';
import { FileText, ExternalLink, Download, AlertCircle } from 'lucide-react';

interface DocumentViewerProps {
  filePath: string;
  title: string;
  viewLabel?: string;
  openLabel?: string;
  downloadLabel?: string;
}

export default function DocumentViewer({
  filePath,
  title,
  viewLabel = 'Dokument ansehen',
  openLabel = 'PDF öffnen',
  downloadLabel = 'PDF herunterladen',
}: DocumentViewerProps) {
  const [loadError, setLoadError] = useState(false);

  return (
    <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
      {/* PDF Preview */}
      <div className="relative aspect-[3/4] w-full bg-slate-100 sm:aspect-[4/3]">
        {!loadError ? (
          <iframe
            src={`${filePath}#toolbar=0&navpanes=0&view=FitH`}
            title={title}
            className="h-full w-full"
            loading="lazy"
            onError={() => setLoadError(true)}
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center p-6 text-center">
            <AlertCircle size={32} className="text-slate-400" />
            <p className="mt-3 text-sm text-slate-500">
              Die PDF-Vorschau konnte nicht geladen werden.
            </p>
            <a
              href={filePath}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary mt-4"
            >
              <ExternalLink size={16} />
              {openLabel}
            </a>
          </div>
        )}
      </div>

      {/* Action bar */}
      <div className="flex flex-wrap items-center gap-3 border-t border-slate-200 p-4">
        <a
          href={filePath}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          <FileText size={16} />
          {viewLabel}
        </a>
        <a
          href={filePath}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
        >
          <ExternalLink size={16} />
          {openLabel}
        </a>
        <a
          href={filePath}
          download
          className="btn-ghost"
        >
          <Download size={16} />
          {downloadLabel}
        </a>
      </div>
    </div>
  );
}
