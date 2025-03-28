import { useEffect, useState } from 'react';
import styles from '../styles/HomePage.module.css';

export default function HomePage() {
  const [webApp, setWebApp] = useState<any>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://telegram.org/js/telegram-web-app.js';
      script.async = true;
      script.onload = () => {
        if (window.Telegram?.WebApp) {
          setWebApp(window.Telegram.WebApp);
        }
      };
      document.head.appendChild(script);
    }
  }, []);

  const handleCalculatorClick = () => {
    if (webApp) {
      webApp.showAlert('Калькулятор');
    }
  };

  const handleConverterClick = () => {
    if (webApp) {
      webApp.showAlert('Конвертер валют');
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Добро пожаловать!</h1>
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={handleCalculatorClick}>
          Калькулятор
        </button>
        <button className={styles.button} onClick={handleConverterClick}>
          Конвертер валют
        </button>
      </div>
    </div>
  );
} 