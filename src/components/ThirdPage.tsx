import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from '../styles/ThirdPage.module.css';

export default function ThirdPage() {
  const router = useRouter();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Получаем параметры из URL
    const hasCase = router.query.hasCase === 'true';
    const hasPowerSupply = router.query.hasPowerSupply === 'true';
    const price = parseInt(router.query.totalPrice as string) || 0;
    
    setTotalPrice(price);
  }, [router.query]);

  const handleAnswer = (hasMotherboard: boolean) => {
    // Если есть материнская плата, добавляем 200 рублей
    if (hasMotherboard) {
      setTotalPrice(prev => prev + 200);
    }
    // Переходим на следующую страницу
    router.push({
      pathname: '/fourth',
      query: { 
        hasCase: router.query.hasCase,
        hasPowerSupply: router.query.hasPowerSupply,
        hasMotherboard: hasMotherboard.toString(),
        totalPrice: totalPrice.toString()
      }
    });
  };

  return (
    <div 
      className={styles.page}
      style={{
        backgroundImage: 'url("/images/background1.jpg")'
      }}
    >
      <div className={styles.content}>
        <h1 className={styles.title}>Есть материнская плата?</h1>
        <div className={styles.price}>
          Текущая стоимость: {totalPrice} ₽
        </div>
        <div className={styles.buttonContainer}>
          <button 
            className={styles.button}
            onClick={() => handleAnswer(true)}
          >
            Да
          </button>
          <button 
            className={styles.button}
            onClick={() => handleAnswer(false)}
          >
            Нет
          </button>
        </div>
      </div>
    </div>
  );
} 