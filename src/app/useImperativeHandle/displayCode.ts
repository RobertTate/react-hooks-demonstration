const displayCode = `import { useImperativeHandle, useRef, forwardRef } from 'react';

const FancyInput = forwardRef((props, ref) => {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focusInOnFancyInput: () => {
      inputRef.current.focus();
    }
  }));

  return <input ref={inputRef} type={props.type} />;
});

const FormComponent = () => {
  const childRef = useRef();

  return (
    <>
      <FancyInput ref={childRef} type="text" />
      <button onClick={() => childRef.current.focusInOnFancyInput()}>
        Focus the Input
      </button>
    </>
  );
};

export default FormComponent;

`;

export default displayCode;
