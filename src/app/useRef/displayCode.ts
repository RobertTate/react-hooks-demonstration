const displayCode = `import { useState, useRef } from 'react';

export default function App() {
  const countRef = useRef(0);
  const [renderCount, setRenderCount] = useState(0);

  const handleClick = () => {
    countRef.current = countRef.current + 1
  }

  const rerenderTheComponent = () => {
    setRenderCount((prev) => prev + 1);
  }

  return (
    <>
      <h3>Counter: {countRef.current}</h3>
      <button onClick={handleClick}>Increment</button>
      <br></br><br></br>
      <button onClick={rerenderTheComponent}>Re-Render The Component</button>
      <p>Number of Re-renders: {renderCount}</p>
    </>
  )
}`;

export default displayCode;
