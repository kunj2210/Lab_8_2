import { useState } from 'react';
import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <h1>Count: {count}</h1>
      <div className="btn-group">
        <button className="increment" onClick={() => setCount(count + 1)}>➕</button>
        <button className="decrement" onClick={() => setCount(count - 1)}>➖</button>
        <button className="reset" onClick={() => setCount(0)}>🔄</button>
      </div>
    </div>
  );
};

export default Counter;