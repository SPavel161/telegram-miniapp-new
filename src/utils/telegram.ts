let twa: any = null;

if (typeof window !== 'undefined') {
  twa = window.Telegram.WebApp;
}

export const WebApp = twa;

export async function initTelegramApp() {
  if (typeof window !== 'undefined') {
    try {
      const { WebApp } = await import('@twa-dev/sdk');
      return WebApp;
    } catch (error) {
      console.error('Failed to load Telegram Web App SDK:', error);
      return null;
    }
  }
  return null;
}

export function getTelegramWebApp() {
  if (typeof window !== 'undefined') {
    return window.Telegram?.WebApp;
  }
  return null;
}

export function initTelegramWebApp() {
  if (typeof window !== 'undefined') {
    const webApp = getTelegramWebApp();
    if (webApp) {
      webApp.ready();
    }
  }
} 