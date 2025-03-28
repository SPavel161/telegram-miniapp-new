import { useRouter } from 'next/router';
import styles from '../styles/SecondPage.module.css';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import { initTelegramWebApp } from '../utils/telegram';

const SecondPage = () => {
  const router = useRouter();
  const { totalPrice } = router.query;
  const currentPrice = parseInt(totalPrice as string) || 0;

  useEffect(() => {
    initTelegramWebApp();
  }, []);

  const handleYesClick = () => {
    const newPrice = currentPrice + 2000;
    router.push({
      pathname: '/third',
      query: { totalPrice: newPrice },
    });
  };

  const handleNoClick = () => {
    router.push({
      pathname: '/third',
      query: { totalPrice: currentPrice },
    });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Нужен блок питания?</h1>
      <p className={styles.price}>Текущая стоимость: {currentPrice} руб.</p>
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={handleYesClick}>
          Да
        </button>
        <button className={styles.button} onClick={handleNoClick}>
          Нет
        </button>
      </div>
    </div>
  );
};

// Отключаем серверный рендеринг
export default dynamic(() => Promise.resolve(SecondPage), {
  ssr: false
}); 