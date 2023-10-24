'use client'

import Codespace from '../components/Codespace'
import Link from 'next/link'
import displayCode from './displayCode'
import Content from '../components/Content'

export default function UseTransitionPage() {
  const markdown = `
  ## Basics
  ### What does "Render Blocking" mean?

  When you update the state of a component, React will re-render the component. If the code inside component takes a long time to run, the UI will be blocked until the component finishes rendering. This is called **render blocking**.

  ### Avoiding Render Blocking

  [Added in React 18](https://react.dev/blog/2021/12/17/react-conf-2021-recap#react-18-and-concurrent-features), **useTransition** provides a way to update the state without blocking the UI. 
  
  The **useTransition** hook returns an array with two elements: **isPending** and **startTransition**.

  \`\`\`js
  const [isPending, startTransition] = useTransition()
  \`\`\`

  The **isPending** value is a boolean that is true when there is a pending transition, and false when there is not.

  The **startTransition** function takes a **callback function** as an argument. The **callback function** is the code you want to run without blocking the UI.

  Here is an example of how you might use **useTransition** to update the state of a list of items:

  \`\`\`js
  function App() {
    const [items, setItems] = useState([])
    const [isPending, startTransition] = useTransition()

    function handleClick() {
      startTransition(() => {
        // A potentially slow state update
        setItems(fetchNewItems())
      })
    }

    return (
      <>
        <button onClick={handleClick}>Fetch New Items</button>
        {isPending ? 'Loading...' : <ItemList items={items} />}
      </>
    )
  }
  \`\`\`
  


  `


  return (
    <main>
      <h1>useTransition</h1>
      <p><em><strong>useTransition</strong> is a React Hook that lets you update the state without blocking the UI.</em></p>
      <Codespace code={displayCode} />
      <Link href={'/'}><strong>Back to home</strong></Link>
      <Content markdown={markdown} />
    </main>
  )
}
