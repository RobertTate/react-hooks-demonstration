const displayCode = 
`import React, { useState, useMemo, useEffect } from 'react';

// A "costly" function to square a number
function square(number) {
  return number * number;
}

// A "costly" component to render a list of squared numbers
function SquaredList({ limit }) {
  console.log('Rendering SquaredList');
  const items = [];
  for (let i = 1; i <= limit; i++) {
    items.push(square(i));
  }
  return <ul>{items.map(item => <li key={item}>{item}</li>)}</ul>;
}

export default function App() {
  // State to trigger re-render
  const [renderCount, setRenderCount] = useState(0);
  // State to hold input value
  const [num, setNum] = useState(1);

  // Log re-renders
  useEffect(() => {
    console.log('Component Re-Rendered');
  }, [renderCount, num])

  // Cache squared value
  const squaredValue = useMemo(() => {
    return square(num);
  }, [num]);

  // Cache component
  const memoizedSquaredList = useMemo(() => {
    return <SquaredList limit={num} />;
  }, [num]);

  return (
    <div>
      <button onClick={() => {
        return setRenderCount(renderCount + 1);
      }}>Render</button>
      <input 
        type="number" 
        value={num} 
        onChange={(e) => setNum(Number(e.target.value))} 
      />
      <p>Squared value of {num} is: {squaredValue}</p>
      {memoizedSquaredList}
    </div>
  );
}`

export default displayCode;
