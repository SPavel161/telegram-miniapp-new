import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from '../styles/FourthPage.module.css';

export default function FourthPage() {
  const router = useRouter();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Получаем параметры из URL
    const hasCase = router.query.hasCase === 'true';
    const hasPowerSupply = router.query.hasPowerSupply === 'true';
    const hasMotherboard = router.query.hasMotherboard === 'true';
    const price = parseInt(router.query.totalPrice as string) || 0;
    
    setTotalPrice(price);
  }, [router.query]);

  const handleAnswer = (ramCount: number) => {
    // Добавляем стоимость в зависимости от количества планок
    if (ramCount > 0) {
      setTotalPrice(prev => prev + (65 * ramCount));
    }
    // Переходим на следующую страницу
    router.push({
      pathname: '/fifth',
      query: { 
        hasCase: router.query.hasCase,
        hasPowerSupply: router.query.hasPowerSupply,
        hasMotherboard: router.query.hasMotherboard,
        ramCount: ramCount.toString(),
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
        <h1 className={styles.title}>Есть оперативная память?</h1>
        <div className={styles.price}>
          Текущая стоимость: {totalPrice} ₽
        </div>
        <div className={styles.buttonContainer}>
          <button 
            className={styles.button}
            onClick={() => handleAnswer(1)}
          >
            Одна
          </button>
          <button 
            className={styles.button}
            onClick={() => handleAnswer(2)}
          >
            Две
          </button>
          <button 
            className={styles.button}
            onClick={() => handleAnswer(3)}
          >
            Три
          </button>
          <button 
            className={styles.button}
            onClick={() => handleAnswer(4)}
          >
            Четыре
          </button>
          <button 
            className={styles.button}
            onClick={() => handleAnswer(0)}
          >
            Нету
          </button>
        </div>
      </div>
    </div>
  );
} 