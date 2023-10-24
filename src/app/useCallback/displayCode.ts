const displayCode = 
`import React, { useState, useCallback, useEffect } from 'react';

// Memoized Button component that only re-renders when its props change
const Button = React.memo(({ onClick, color }) => {
  console.log('Button rendered with color:', color);
  return <button style={{ backgroundColor: color }} onClick={onClick}>Click me</button>;
});

export default function App() {
  // Using useState to store the count and color state variables
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('yellow');

  // Using useCallback to memoize the increment function
  // This function only gets redefined when 'color' changes, not 'count'
  const handleIncrement = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  // Simulating a color change (not tied to button click for simplicity)
  useEffect(() => {
    const colors = ['yellow', 'orange', 'lime'];
    const interval = setInterval(() => {
      setColor(colors[Math.floor(Math.random() * colors.length)]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <Button onClick={handleIncrement} color={color} />
    </div>
  );
}
`

export default displayCode;
