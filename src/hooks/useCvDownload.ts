import { useState } from 'react';
import { profile } from '@/data/portfolio';

const fileName = `CV_${profile.firstName}_${profile.lastName.replace(/\s+/g, '_')}.pdf`;

export default function useCvDownload() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const download = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(profile.cvUrl);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const blob = new Blob([await response.arrayBuffer()], { type: 'application/pdf' });
      const objectUrl = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = objectUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      link.remove();
      setTimeout(() => URL.revokeObjectURL(objectUrl), 1000);
    } catch {
      setError('Le téléchargement a échoué. Veuillez réessayer.');
    } finally {
      setIsLoading(false);
    }
  };

  return { download, isLoading, error };
}
