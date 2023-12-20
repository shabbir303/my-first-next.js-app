import { useState } from "react";


const Counter = () => {
  // throw new Error;
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Counter = {count}</h2>
      <button
        className="btn primary bg-white ml-4 p-[10px] text-green-500"
        onClick={() => setCount(count + 1)}
      >
        Increase
      </button>
      <button
        className="btn primary bg-white ml-4 p-[10px] text-red-500"
        onClick={() => setCount(count - 1)}
      >
        Decrease
      </button>
    </div>
  );
};

export default Counter;
