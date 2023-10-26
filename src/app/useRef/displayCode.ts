const displayCode = `import { useState, useEffect, useRef } from 'react';

function ExampleOne() {
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
      <h1>Example One</h1>
      <h3>Counter: {countRef.current}</h3>
      <button onClick={handleClick}>Increment</button>
      <br></br><br></br>
      <button onClick={rerenderTheComponent}>Re-Render The Component</button>
      <p>Number of Re-renders: {renderCount}</p>
    </>
  )
}

function ExampleTwo() {
  const renderCount = useRef(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  }, [count])

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  }

  const showNumberOfRenders = () => {
    alert(\`Component has rendered \${renderCount.current} times\`);
  }

  return (
    <>
      <h1>Example Two</h1>
      <h3>Counter: {count}</h3>
      <button onClick={handleClick}>Increment</button>
      <br></br><br></br>
      <button onClick={showNumberOfRenders}>Show Number of Renders</button>
    </>
  )
}


export default function App() {
  return (
    <>
      <ExampleOne />
      <br></br>
      <hr></hr>
      <br></br>
      <ExampleTwo />
    </>
  )
}`;

export default displayCode;
