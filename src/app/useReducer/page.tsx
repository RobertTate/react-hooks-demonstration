'use client'

import Codespace from '../components/Codespace'
import Link from 'next/link'
import displayCode from './displayCode';
import Markdown from 'react-markdown';
// @ts-expect-error
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
// @ts-expect-error
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import remarkGfm from 'remark-gfm'


export default function UseReducerPage() {
  const markdown = `
  ## Basics
  ### Usage

  The **useReducer** function takes a reducer function and an initial state value as arguments, and returns an array with two elements: the first is the **current state value**, the second is **a function to dispatch an action to update the state**.

  \`\`\`js
  const [state, dispatch] = useReducer(reducer, initialState)
  \`\`\`

  The **reducer function argument** to the **useReducer** hook should accept two of its own arguments: the **current state** value and an **action object**. The reducer function **should return the next state value**.

  \`\`\`js
  function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 }
      case 'decrement':
        return { count: state.count - 1 }
      default:
        throw new Error()
    }
  }
  \`\`\`

  To dispatch an action to update the state, you call the **dispatch function** with an **action object** as an argument. The **action object** should have a **type property** that is a string.

  \`\`\`js
  dispatch({ type: 'increment' })
  \`\`\`

  You can also include a **payload property** that is any value you want.

  \`\`\`js
  dispatch({ type: 'increment', payload: 5 })
  \`\`\`

  ---
  ## Pitfalls
  ### State is read-only

  You should never mutate state directly. Instead, you should return a new state object with the updated values.

  \`\`\`js
  // ❌ Don't do this
    case 'increment':
      state.count = state.count + 1;
      return state;

  // ✅ Do this
    case 'increment':
      return { count: state.count + 1 };
  \`\`\`

  If the state object contains many values, of which you are only updating one, you can use the **spread operator** to copy the existing state values into the new state object.

  \`\`\`js
    case 'increment':
      return { ...state, count: state.count + 1 };
  \`\`\`

  ### Avoiding recreating the initial state 

  If you are calculating your initial state from a function, you can pass it as an **initializer function**, as an optional third argument to the **useReducer** hook. 
  It will only be called on the initial render. This is useful when the initial state is expensive to compute.

  If your **initializer function** doesn't need any inputs to calculate the initial state, you can pass **null** as the second argument to the **useReducer** hook.

  \`\`\`js
  const [state, dispatch] = useReducer(reducer, null, createInitialState)
  \`\`\`


  `

  return (
    <main>
      <h1>useReducer</h1>
      <p><em>useReducer is a React Hook that lets you add a reducer to your component.</em></p>
      <h2>Demo:</h2>
      <Codespace code={displayCode} />
      <Link href={'/'}>Back to home</Link>
      <Markdown
        remarkPlugins={[remarkGfm]}
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
