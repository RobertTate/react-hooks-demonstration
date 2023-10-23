const displayCode = 
`import { useState, useEffect, useRef } from 'react';

// In this example, 
// the external system is the browser's native dialog API.
export default function App() {
  const [show, setShow] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    // If the dialog is not open, don't do anything
    if (!show) {
      return;
    }

    // Otherwise, show the dialog
    const dialog = ref.current;
    dialog.showModal();

    // When the component re-renders and/or unmounts, 
    // this cleanup code will run, closing the dialog.
    // On re-renders, after the cleanup code is run, 
    // the effect will run again.
    return () => {
      dialog.close();
    };
  }, [show]);

  return (
    <>
      <button onClick={() => setShow(true)}>
        <h2>Open The Dialog</h2>
      </button>

      <dialog ref={ref}>
        This is a Dialog
        <br /><br />
        <button onClick={() => setShow(false)}>
          Close
        </button>
      </dialog>
    </>
  );
}`

export default displayCode;
