const displayCode = 
`import React, { useState, useTransition } from 'react';

function SlowPost({ index }) {
  let startTime = performance.now();

  while (performance.now() - startTime < 1) {
    // Do nothing for 1 ms per item to emulate extremely slow code
  }

  return <li className="item">Post #{index + 1}</li>;
}

function SlowPostDisplay({ show }) {
  let items = [];

  if (show) {
    for (let i = 0; i < 700; i++) {
      items.push(<SlowPost key={i} index={i} />);
    }
  }

  return <>{show && <div>{items}</div>}</>;
}

export default function App() {
  const [show, setShow] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleStart = () => {
    // Start a transition to the next state. 
    // This allows us to show an "isPending" state, 
    // and prevents the browser from getting blocked 
    // by a long-running render, either cause by an expensive  
    // calculation within the startTransition callback,
    // or by any cascading effects or renders caused from 
    // the state that changed within the 
    // startTransition callback.
    startTransition(() => {
      setShow(true);
    });
  };

  const handleCancel = () => {
    setShow(false);
  };

  return (
    <div>
      {!show && (
        <button onClick={handleStart}>
          {isPending ? 'Preparing...' : 'Start Slow Render'}
        </button>
      )}
      <button onClick={handleCancel}>
        Cancel
      </button>
      <SlowPostDisplay show={show} />
    </div>
  );
}
`

export default displayCode;
