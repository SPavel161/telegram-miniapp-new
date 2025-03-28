import { useState } from 'react';
import styles from '../styles/Calculator.module.css';

export default function Calculator() {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');

  const handleNumber = (num: string) => {
    if (display === '0') {
      setDisplay(num);
    } else {
      setDisplay(display + num);
    }
  };

  const handleOperator = (operator: string) => {
    setEquation(display + operator);
    setDisplay('0');
  };

  const handleEqual = () => {
    const result = eval(equation + display);
    setDisplay(result.toString());
    setEquation('');
  };

  const handleClear = () => {
    setDisplay('0');
    setEquation('');
  };

  return (
    <div 
      className={styles.page}
      style={{
        backgroundImage: 'url("/images/background2.jpg")'
      }}
    >
      <div className={styles.calculator}>
        <div className={styles.display}>
          <div className={styles.equation}>{equation}</div>
          <div className={styles.result}>{display}</div>
        </div>
        <div className={styles.buttons}>
          <button onClick={handleClear} className={styles.button}>C</button>
          <button onClick={() => handleOperator('/')} className={styles.button}>/</button>
          <button onClick={() => handleOperator('*')} className={styles.button}>×</button>
          <button onClick={() => handleNumber('7')} className={styles.button}>7</button>
          <button onClick={() => handleNumber('8')} className={styles.button}>8</button>
          <button onClick={() => handleNumber('9')} className={styles.button}>9</button>
          <button onClick={() => handleOperator('-')} className={styles.button}>-</button>
          <button onClick={() => handleNumber('4')} className={styles.button}>4</button>
          <button onClick={() => handleNumber('5')} className={styles.button}>5</button>
          <button onClick={() => handleNumber('6')} className={styles.button}>6</button>
          <button onClick={() => handleOperator('+')} className={styles.button}>+</button>
          <button onClick={() => handleNumber('1')} className={styles.button}>1</button>
          <button onClick={() => handleNumber('2')} className={styles.button}>2</button>
          <button onClick={() => handleNumber('3')} className={styles.button}>3</button>
          <button onClick={handleEqual} className={styles.button}>=</button>
          <button onClick={() => handleNumber('0')} className={styles.button}>0</button>
          <button onClick={() => handleNumber('.')} className={styles.button}>.</button>
        </div>
      </div>
    </div>
  );
} 