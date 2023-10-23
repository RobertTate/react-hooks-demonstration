'use client'

import Codespace from '../components/Codespace'
import Link from 'next/link'
import displayCode from './displayCode'
import Content from '../components/Content'

export default function UseMemoPage() {
  const markdown = `
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
  const MyMemoizedComponent = useMemo(() => {
    return <SomeComponent data={data} />;
  }, [data]);
  \`\`\`

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
  `

  return (
    <main>
      <h1>useMemo</h1>
      <p><em><strong>useMemo</strong> is a React Hook that lets you cache the result of a calculation between re-renders.</em></p>
      <h2>Demo:</h2>
      <Codespace code={displayCode} />
      <Link href={'/'}>Back to home</Link>
      <Content markdown={markdown} />
    </main>
  )
}
