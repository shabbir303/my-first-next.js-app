import { useState } from "react";
import { Button } from 'flowbite-react';

const Counter = () => {
  // throw new Error;
  const [count, setCount] = useState(0);
  return (
    <div className="max-w-7xl mx-auto flex flex-wrap gap-2 font-serif">
      <h2>Counter = {count}</h2>
      <button 
      className="btn glass"
        onClick={() => setCount(count + 1)}
      >
        Increase
      </button>
      <button 
        className="btn glass"
        onClick={() => setCount(count - 1)}
      >
        Decrease
      </button>
    </div>
  );
};

export default Counter;
