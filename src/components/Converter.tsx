import { useState } from 'react';
import styles from '../styles/Converter.module.css';

export default function Converter() {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [result, setResult] = useState('');

  const currencies = ['USD', 'EUR', 'GBP', 'JPY', 'RUB'];

  const handleConvert = () => {
    // Здесь будет логика конвертации
    // Для примера просто умножаем на случайное число
    const randomRate = Math.random() * 2 + 0.5;
    const convertedAmount = (parseFloat(amount) * randomRate).toFixed(2);
    setResult(`${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`);
  };

  return (
    <div 
      className={styles.page}
      style={{
        backgroundImage: 'url("/images/background3.jpg")'
      }}
    >
      <div className={styles.converter}>
        <h2 className={styles.title}>Конвертер валют</h2>
        <div className={styles.inputGroup}>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Введите сумму"
            className={styles.input}
          />
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            className={styles.select}
          >
            {currencies.map(currency => (
              <option key={currency} value={currency}>{currency}</option>
            ))}
          </select>
        </div>
        <div className={styles.arrow}>→</div>
        <div className={styles.inputGroup}>
          <input
            type="text"
            value={result}
            readOnly
            className={styles.input}
          />
          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className={styles.select}
          >
            {currencies.map(currency => (
              <option key={currency} value={currency}>{currency}</option>
            ))}
          </select>
        </div>
        <button onClick={handleConvert} className={styles.button}>
          Конвертировать
        </button>
      </div>
    </div>
  );
} 