'use client'

import Codespace from '../components/Codespace'
import Link from 'next/link'
import displayCode from './displayCode'
import Content from '../components/Content'


export default function UseRefPage() {
  const markdown = `
  ## Basics
  ### Referencing a value with a ref

  The **useRef** function takes an initial value as an argument, and returns a **ref object** with a **current property** that is initialized to the initial value.

  \`\`\`js
  const ref = useRef(initialValue)
  \`\`\`

  The **ref object** is persistent across renders, and the **current property** will be updated whenever the ref is updated.

  \`\`\`js
  const ref = useRef(initialValue)
  ref.current = newValue
  \`\`\`

  ### Referencing a DOM Element with a ref

  The **ref object** can also be used to reference a **DOM node**. 
  When the **ref object** is passed to the **ref attribute** of a **JSX element**, the **current property** of the **ref object** will be set to the **DOM node** that is represented by that **JSX element**.

  \`\`\`js
  const ref = useRef(null)
  ref.current // will still be null here
  handleClick() {
    ref.current // will be the DOM node
  }
  return <div ref={ref} onClick={handleClick} /> // Once the DOM node is rendered, ref.current will be set to the DOM node
  \`\`\`

  ## Pitfalls
  ### Do not read or write ref values in the render phase

  Because refs are mutable and don't cause re-renders, you should not tie them to the render cycle. Instead, you should use them in event handlers, effects, and other imperative code.

  \`\`\`js
  // ❌ Don't do stuff like this
  return <div>{ref.current}</div>

  // ✅ Do stuff like this
  function handleClick() {
    doSomething(ref.current);
  }
  \`\`\`

  ### Avoiding recreating the initial ref value
  
  If creating the initial value for your ref is handled by a function that's doing an expensive calculation, you'll want to find a way to only call it once, as by default, it will re-run on every render. 
  
  **useRef** does not accept **initializer functions** like how **useState** or **useReducer** hooks do, however. 
  
  Here's one approach to mitigate this issue: Set the ref value to null initially, and then do a one-time assignment to the current property:

  \`\`\`js
  const ref = useRef(null)
  if (ref.current === null) {
    ref.current = getExpensiveInitialValue();
  }
  \`\`\`
  `

  return (
    <main>
      <h1>useRef</h1>
      <p><em><strong>useRef</strong> is a non-reactive React Hook, that lets you reference a value that can be updated without causing the component to re-render.</em></p>
      <Codespace code={displayCode} />
      <Link href={'/'}><strong>Back to home</strong></Link>
      <Content markdown={markdown} />
    </main>
  )
}
