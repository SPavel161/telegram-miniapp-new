import { useEffect, useState } from 'react';

export function useTelegram() {
  const [webApp, setWebApp] = useState<any>(null);

  useEffect(() => {
    const initTelegram = async () => {
      if (typeof window !== 'undefined') {
        try {
          const { WebApp } = await import('@twa-dev/sdk');
          setWebApp(WebApp);
          WebApp.ready();
        } catch (error) {
          console.error('Failed to initialize Telegram Web App:', error);
        }
      }
    };

    initTelegram();
  }, []);

  return { webApp };
} 