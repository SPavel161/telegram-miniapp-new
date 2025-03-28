import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from '../styles/NinthPage.module.css';

export default function NinthPage() {
  const router = useRouter();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Получаем параметры из URL
    const hasCase = router.query.hasCase === 'true';
    const hasPowerSupply = router.query.hasPowerSupply === 'true';
    const hasMotherboard = router.query.hasMotherboard === 'true';
    const ramCount = parseInt(router.query.ramCount as string) || 0;
    const hasVideoCard = router.query.hasVideoCard === 'true';
    const hasSoundCard = router.query.hasSoundCard === 'true';
    const hasProcessor = router.query.hasProcessor === 'true';
    const hasCooler = router.query.hasCooler === 'true';
    const price = parseInt(router.query.totalPrice as string) || 0;
    
    setTotalPrice(price);
  }, [router.query]);

  const handleAnswer = (hasDVD: boolean) => {
    // Если есть DVD-привод, добавляем 50 рублей
    if (hasDVD) {
      setTotalPrice(prev => prev + 50);
    }
    // Переходим на следующую страницу
    router.push({
      pathname: '/tenth',
      query: { 
        hasCase: router.query.hasCase,
        hasPowerSupply: router.query.hasPowerSupply,
        hasMotherboard: router.query.hasMotherboard,
        ramCount: router.query.ramCount,
        hasVideoCard: router.query.hasVideoCard,
        hasSoundCard: router.query.hasSoundCard,
        hasProcessor: router.query.hasProcessor,
        hasCooler: router.query.hasCooler,
        hasDVD: hasDVD.toString(),
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
        <h1 className={styles.title}>Есть DVD-привод?</h1>
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