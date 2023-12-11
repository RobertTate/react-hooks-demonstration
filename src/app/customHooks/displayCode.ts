const displayCode = `import { useState } from 'react';

// Custom Hook
function useCounter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prevCount => prevCount + 1);
  const decrement = () => setCount(prevCount => prevCount - 1);

  return [count, increment, decrement];
}

export default function App() {
  const [count, increment, decrement] = useCounter();

  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
}



`;

export default displayCode;
