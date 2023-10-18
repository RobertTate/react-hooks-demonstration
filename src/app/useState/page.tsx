'use client'

import Codespace from '../components/Codespace'
import Link from 'next/link'
import displayCode from './displayCode';
import Markdown from 'react-markdown';
// @ts-expect-error
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
// @ts-expect-error
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism'


export default function UseStatePage() {
  const markdown = `
  ## Basics
  ### Initializer Functions

  The **useState** function returns an array with two elements: the first is the current state value, the second is a function to update the state value.

  You can initialize your state variable value in one of two ways...either with or without an **initializer function**:

  \`\`\`js
  const [count, setCount] = useState(0)
  \`\`\`

  or

  \`\`\`js
  const [count, setCount] = useState(() => 0)
  \`\`\`

  When you initialize state with an **initializer function**, React will only calculate the value of the function you pass on the initial render. This is useful when the initial state is expensive to compute.
  
  ### Updater Functions

  You can update your state variable in one of two ways...either with or without an **updater function**:

  \`\`\`js
  setCount(count + 1)
  \`\`\`

  or

  \`\`\`js
  setCount((prevCount) => prevCount + 1)
  \`\`\`

  When you update state with an **updater function**, React will pass the previous state value as an argument to your function. This is useful when you need to update state based on the previous state value.
  
  ---
  ## Pitfalls
  ### Already Running Code

  Calling the set function does not change the current state in the already executing code. It only affects what useState will return starting from the next render.

  \`\`\`js
  function Counter() {
    const [count, setCount] = useState(0)

    function handleClick() {
      setCount(count + 1)
      setCount(count + 1)
    }

    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={handleClick}>Increment</button>
      </div>
    )
  }
  \`\`\`

  In the example above, the count will only increment by one because the \`handleClick\` function is already running when the first \`setCount\` is called. The second \`setCount\` will use the original value of \`count\` (0) instead of the updated value (1).
  `

  return (
    <main>
      <h1>useState</h1>
      <p><em>useState is a React Hook that lets you add a state variable to your component. When you update the state to a different value, you trigger a re-render.</em></p>
      <h2>Demo:</h2>
      <Codespace code={displayCode} />
      <Link href={'/'}>Back to home</Link>
      <Markdown
        children={markdown}
        components={{
          code(props) {
            const { children, className, node, ...rest } = props
            const match = /language-(\w+)/.exec(className || '')
            return match ? (
              <SyntaxHighlighter
                {...rest}
                children={String(children).replace(/\n$/, '')}
                style={a11yDark}
                language={match[1]}
                PreTag="div"
              />
            ) : (
              <code {...rest} className={className}>
                {children}
              </code>
            )
          }
        }}
      />
    </main>
  )
}
