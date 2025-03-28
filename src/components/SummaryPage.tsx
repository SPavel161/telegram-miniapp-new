import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from '../styles/SummaryPage.module.css';

interface SummaryItem {
  text: string;
  price: number;
}

export default function SummaryPage() {
  const router = useRouter();
  const [totalPrice, setTotalPrice] = useState(0);
  const [summary, setSummary] = useState<SummaryItem[]>([]);

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
    const hasDVD = router.query.hasDVD === 'true';
    const hddCount = parseInt(router.query.hddCount as string) || 0;
    const price = parseInt(router.query.totalPrice as string) || 0;
    
    setTotalPrice(price);

    // Формируем список комплектующих
    const items: SummaryItem[] = [];
    if (hasCase) items.push({ text: 'Корпус', price: 100 });
    if (hasPowerSupply) items.push({ text: 'Блок питания', price: 100 });
    if (hasMotherboard) items.push({ text: 'Материнская плата', price: 100 });
    if (ramCount > 0) items.push({ text: `Оперативная память (${ramCount} шт.)`, price: ramCount * 50 });
    if (hasVideoCard) items.push({ text: 'Видеокарта', price: 100 });
    if (hasSoundCard) items.push({ text: 'Звуковая карта', price: 100 });
    if (hasProcessor) items.push({ text: 'Процессор', price: 50 });
    if (hasCooler) items.push({ text: 'Кулер процессора', price: 30 });
    if (hasDVD) items.push({ text: 'DVD-привод', price: 50 });
    if (hddCount > 0) items.push({ text: `HDD (${hddCount} шт.)`, price: hddCount * 50 });
    
    setSummary(items);
  }, [router.query]);

  const handleNewCalculation = () => {
    router.push('/');
  };

  const handleSaveSummary = async () => {
    // Создаем canvas для отрисовки сметы
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Устанавливаем размеры canvas
    canvas.width = 800;
    canvas.height = 600;

    // Заполняем фон
    ctx.fillStyle = '#1a1a1a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Настраиваем стиль текста
    ctx.fillStyle = '#ffffff';
    ctx.font = '24px Arial';
    ctx.textAlign = 'left';

    // Рисуем заголовок
    ctx.fillText('Итоговая смета', 50, 50);

    // Рисуем список комплектующих
    let y = 100;
    summary.forEach((item: SummaryItem) => {
      ctx.fillText(`${item.text}: +${item.price}₽`, 50, y);
      y += 40;
    });

    // Рисуем итоговую сумму
    ctx.font = '32px Arial';
    ctx.fillText(`Итого: ${totalPrice}₽`, 50, y + 40);

    // Конвертируем canvas в изображение
    const image = canvas.toDataURL('image/png');

    // Создаем ссылку для скачивания
    const link = document.createElement('a');
    link.download = `смета_${new Date().toISOString().split('T')[0]}.png`;
    link.href = image;
    link.click();
  };

  return (
    <div 
      className={styles.page}
      style={{
        backgroundImage: 'url("/images/background1.jpg")'
      }}
    >
      <div className={styles.content}>
        <h1 className={styles.title}>Итоговая смета</h1>
        <div className={styles.summary}>
          {summary.map((item: SummaryItem, index: number) => (
            <div key={index} className={styles.summaryItem}>
              {item.text}: +{item.price}₽
            </div>
          ))}
          <div className={styles.totalPrice}>
            Итого: {totalPrice}₽
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <button 
            className={styles.button}
            onClick={handleNewCalculation}
          >
            К новому расчету
          </button>
          <button 
            className={styles.button}
            onClick={handleSaveSummary}
          >
            Сохранить смету
          </button>
        </div>
      </div>
    </div>
  );
} 