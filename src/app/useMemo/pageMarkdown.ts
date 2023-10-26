const pageMarkdown = `
## Basics
### Skipping expensive recalculations

The **useMemo** hook takes a function and an array of dependencies as arguments. 
The function will only be called on the initial render, and then on re-renders if the dependencies change.

\`\`\`js
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
\`\`\`

### Skipping re-rendering of components

The **useMemo** hook can also be used to memoize a sub-component render in the context of a parent component, based on some specific logic or dependencies. 
This can be useful if you have a component that is expensive to render, and you want to prevent it from re-rendering unnecessarily.

\`\`\`js
const memoizedChild = useMemo(() => {
  return <SomeChildComponent data={data} />;
}, [data]);
\`\`\`

Note that **memoizedChild** is NOT a component, but rather, **it is a memoized instance of a component's render result**.

### Wrapping a component with the **memo** HOC (higher order component) instead of **useMemo**

You can also memoize a component using the **memo** HOC.

\`\`\`js
const MyComponent = (props) => {
  return <div>{props.name}</div>;
}

export default React.memo(MyComponent);
\`\`\`

The **useMemo** hook is similar to the **memo** HOC, but it has a few differences.

- The **memo** HOC only accepts a component as an argument, while the **useMemo** hook also accepts a function as an argument.

- The **memo** HOC will only re-render the component if the props change, while the **useMemo** hook will re-render the component 
if the dependencies change that are listed in the dependency array.

**When deciding between the two for memoizing components:**

- If the component in question is being used in multiple places and you want to ensure it only re-renders when its props change in all instances, memo is more appropriate.

- If you have a specific instance of a component that you want to memoize based on certain conditions or dependencies within the context of a parent component, useMemo might be a better choice.

## Pitfalls
### Unnecessary memoization

While there's no significant harm to memoizing a function or a component prematurely, there's an argument to be made for only using it when necessary.

See React's documentation on: [Should you add useMemo everywhere?](https://react.dev/reference/react/useMemo#should-you-add-usememo-everywhere) to learn more.
`;
export default pageMarkdown;
