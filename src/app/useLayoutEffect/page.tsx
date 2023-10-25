'use client'

import Codespace from '../components/Codespace'
import Link from 'next/link'
import displayCode from './displayCode'
import Content from '../components/Content'

export default function UseLayoutEffectPage() {
  const markdown = `
  ## Basics
  ### What is a Paint?

  When the browser renders a web page, it goes through a process of **layout** and **paint**.

  - **Layout** is the process of determining the size and position of each element on the page.

  - **Paint** is the process of filling in the pixels on the screen.

  ### Usage

  The **useLayoutEffect** hook interface is identical to **useEffect**, taking a function as the argument, with an optional dependency array as the second argument. 
  The function will be called after the component is rendered for the first time, but before the browser repaints the screen.

  \`\`\`js
  useLayoutEffect(() => {
    // runs after the first render, but before the browser repaints the screen
  }, [])
  \`\`\`

  ### Why use useLayoutEffect?

  The **useLayoutEffect** hook is useful when you need to perform an action after the first render, but before the browser repaints the screen. This is useful if you need to measure the size or position of an element on the page.

  \`\`\`js
  useLayoutEffect(() => {
    const width = ref.current.offsetWidth
    // do something with the width
  }, [])
  \`\`\`

  ## Pitfalls
  ### Performance

  Because **useLayoutEffect** runs synchronously after the first render, it can block the browser from painting the screen. This can cause performance issues, and should be used sparingly.

  `

  return (
    <main>
      <h1>useLayoutEffect</h1>
      <p><em><strong>useLayoutEffect</strong> is a version of <strong>useEffect</strong> that fires before the browser repaints the screen.</em></p>
      <Codespace code={displayCode} />
      <Link href={'/'}><strong>Back to home</strong></Link>
      <Content markdown={markdown} />
    </main>
  )
}
