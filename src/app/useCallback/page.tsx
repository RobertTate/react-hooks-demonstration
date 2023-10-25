'use client'

import Codespace from '../components/Codespace'
import Link from 'next/link'
import displayCode from './displayCode'
import Content from '../components/Content'

export default function UseCallbackPage() {
  const markdown = `
  ## Basics
  ### Usage

  The **useCallback** hook takes a **function argument**, and returns a **memoized version of that function**. 
  The memoized function will only change if one of the dependencies in the dependency array has changed.

  \`\`\`js
  const memoizedFunction = useCallback(() => {
    // do something
  }, [dependency])
  \`\`\`

  ### Passing functions to child components

  It's especially handy to cache a function definition when you need to **pass a callback to a child component** that depends on a value from the parent component.
  Without caching the function, the child component would re-render every time the parent component re-renders, even if the value passed to the child component hasn't changed.
  This is because every time the parent re-renders, a new instance of the function definition is created, and **the child component sees it as a new prop**.

  \`\`\`js
  // ❌ This will cause the child component to re-render every time the parent re-renders
  const Parent = () => {
    const [count, setCount] = useState(0)
    const handleClick = () => setCount(count + 1)
    return <Child handleClick={handleClick} />    
  }

  // ✅ This will only cause the child component to re-render when count changes
  const Parent = () => {
    const [count, setCount] = useState(0)
    const handleClick = useCallback(() => setCount(count + 1), [count])
    return <Child handleClick={handleClick} />
  }
  \`\`\`

  ### Using functions as dependencies in other hooks

  If you're using a function within other hooks (like **useEffect** or **useLayoutEffect**), and you want to ensure that effect only re-runs when certain values change, 
  then you need to ensure the function reference is the same on every render. **useCallback** will solve this issue, 
  by returning a memoized function that will only change when the dependencies change.

  \`\`\`js
  // ❌ fetchData will be a new function on every render, causing an infinite loop!
  function ExampleComponent({ dependencies }) {
    const [data, setData] = useState(null);
  
    const fetchData = () => {
      setData(fetch(\`https://someapi.com?dependencies=\${dependencies}\`));
    };
  
    useEffect(() => {
      fetchData();
    }, [fetchData]);  // Using the non-memoized fetchData function
  }


  // ✅ fetchData will only be called inside on the initial render, and when the useCallback dependencies change
  function ExampleComponent({ dependencies }) {
    const [data, setData] = useState(null);
  
    const fetchData = useCallback(() => {
      setData(fetch(\`https://someapi.com?dependencies=\${dependencies}\`));
    }, [dependencies]);
  
    useEffect(() => {
      fetchData();
    }, [fetchData]);  // Using the memoized fetchData function
  }
  \`\`\`
  

  ### useCallback vs useMemo

  The **useCallback** hook is similar to the **useMemo** hook, but it has a few differences.

  **useMemo** caches the result of calling your function:

  \`\`\`js
  const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
  \`\`\`

  **useCallback** caches the function definition itself:

  \`\`\`js
  const memoizedCallback = useCallback(() => {
    doSomething(a, b);
  }, [a, b]);
  \`\`\`

  ## Pitfalls
  ### Forgetting the dependency array

  If you forget to include the dependency array with useCallback, the function will be re-created on every render, which can cause unnecessary re-renders of child components.

  \`\`\`js
  // ❌ This will cause the child component to re-render every time the parent re-renders
  const Parent = () => {
    const [count, setCount] = useState(0)
    const handleClick = useCallback(() => setCount(count + 1))
    return <Child handleClick={handleClick} />
  }

  // ✅ This will only cause the child component to re-render when count changes
  const Parent = () => {
    const [count, setCount] = useState(0)
    const handleClick = useCallback(() => setCount(count + 1), [count])
    return <Child handleClick={handleClick} />
  }
  \`\`\`
  `

  return (
    <main>
      <h1>useCallback</h1>
      <p><em><strong>useCallback</strong> is a React Hook that lets you cache a <strong>function definition</strong> between re-renders.</em></p>
      <Codespace code={displayCode} />
      <Link href={'/'}><strong>Back to home</strong></Link>
      <Content markdown={markdown} />
    </main>
  )
}
