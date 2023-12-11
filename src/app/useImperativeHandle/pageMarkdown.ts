const pageMarkdown = `
## Basics

### What is **\`forwardRef\`**?

How does a parent component gain access to a DOM node that lives inside one of its child components? 

You might attempt this by trying to pass a **\`ref\`** down to the child component, like so:

\`\`\`js
const Parent = () => {
  const ref = useRef()
  return <Child ref={ref} />
}

const Child = ({ ref }) => {
  return <input ref={ref} />
}
\`\`\`

If you do this, you'll likely see a warning that says:

\`\`\`js
// Function components cannot be given refs. Attempts to access this ref will fail. 
// Did you mean to use React.forwardRef()?
\`\`\`

This is because by default, your own custom components don't expose the DOM nodes inside themselves to the outside.

To explicitly get around this, use the **\`React.forwardRef()\`** function.

\`\`\`js
const Parent = () => {
  const ref = useRef()
  return <Child ref={ref} />
}

const Child = React.forwardRef((props, ref) => {
    return <input ref={ref} />
})
\`\`\`

Now the parent component has access to the DOM node inside the child component.

### Customizing the exposed ref with **\`useImperativeHandle\`**

If you want to customize the interface (or handle) of the ref that the child component is now exposing back to the parent, that's where **\`useImperativeHandle\`** comes in.

\`\`\`js
const Parent = () => {
  const ref = useRef()
  return <Child ref={ref} />
}

const Child = React.forwardRef((props, ref) => {
  const inputRef = useRef()
  useImperativeHandle(ref, () => {
    return {
      focus: () => inputRef.current.focus()
    };
  }, []);
  return <input ref={inputRef} />
});
\`\`\`

This gives us a way to control what the parent component can do with the ref.

### Usage

The **useImperativeHandle** hook allows you to customize the interface of a ref object exposed by a child component.

\`\`\`js
useImperativeHandle(ref, createHandle, [deps?])
\`\`\`

The **\`ref\`** argument is the ref object that is passed from the parent component.

The **\`createHandle\`** argument is a function that returns an object with the interface you want to expose to the parent component.

The **\`deps\`** argument is an optional array of dependencies. If any of them change, **\`createHandle\`** function will be called again to re-create the handle, and re-assign it to the ref.
`;

export default pageMarkdown;
