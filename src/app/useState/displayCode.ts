const displayCode = 
`import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  const withoutUpdater = () => {
    setCount(count + 1);
    setCount(count + 1);
  }

  const withUpdater = () => {
    setCount((prevCount) => prevCount + 1)
    setCount((prevCount) => prevCount + 1)
  }

  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={withoutUpdater}>Increment WITHOUT an Updater Function</button>
      <br></br><br></br>
      <button onClick={withUpdater}>Increment WITH an Updater Function</button>
    </>
  )
}`

export default displayCode;
