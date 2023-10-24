'use client'

import Codespace from '../components/Codespace'
import Link from 'next/link'
import displayCode from './displayCode'
import Content from '../components/Content'

export default function UseContextPage() {
  const markdown = `
  ## Basics
  
  ### What is Context?

  Context provides a way to pass data through the component tree without having to pass props down manually at every level.

  ### Creating Context

  You can create a context with the **createContext** function.

  \`\`\`js
  const MyContext = React.createContext(defaultValue);
  \`\`\`

  See [createContext](https://react.dev/reference/react/createContext) for more info.

  ### Providing Context

  You can provide a context value to a component tree with the **Context.Provider** component.

  \`\`\`js
  <MyContext.Provider value={/* some value */}>
    {/* child components */}
  </MyContext.Provider>
  \`\`\`

  ### Consuming Context

  You can consume a context value with the **Context.Consumer** component.

  \`\`\`js
  <MyContext.Consumer>
    {value => /* render something based on the context value */}
  </MyContext.Consumer>
  \`\`\`

  React's documentation no longer recommends using the **Context.Consumer** component.
  Instead, they recommend you consume a context value with the **useContext** hook.

  \`\`\`js
  const value = useContext(MyContext);
  \`\`\`

  ### Updating Context

  You can update a context value with the **Context.Provider** component, by passing it a new **value** prop.

  You can do this either with **useState** or **useReducer**, either in the same component that provides the context, or in a parent component, then passed as a prop.

  \`\`\`js
  const [value, setValue] = useState(0)

  <MyContext.Provider value={value}>
    {/* child components */}
  </MyContext.Provider>
  \`\`\`

  It's also possible to pass **objects** to the **value** prop of the **Context.Provider** component.
  
  In this way, you could pass both the setter and getter of a useState hook to the **value** prop.
  This is useful if you want to update the context value from a child component.

  \`\`\`js
  const [theme, setTheme] = useState(0)

  <MyContext.Provider value={{ theme, setTheme }}>
    {/* child components */}
  </MyContext.Provider>

  // In a child component
  const { theme, setTheme } = useContext(MyContext);
  \`\`\`

  ## Pitfalls
  ### Closest Provider

  When invoked, the **useContext** hook will search up the component tree for the closest **Context.Provider** component.
  It does NOT consider providers in the component from which it is called.

  ### Context is not a replacement for Redux

  Context doesn't manage state on its own...**it's just a transport mechanism!**
  You would need to use Context combined with a state hook like **useState** or **useReducer** to obtain state management.

  However, when you update a context value, **all components that are subscribed to that context will be forced to re-render**, even if they only care about part of the data.

  In Redux *(which is both a store, a transport mechanism, and an update mechanism)*, a component can subscribe to only a **specific piece of the store state**, and will only re-render when that piece of state changes.
  
  See the following article to understand more about the differences between the two technologies:

  - [Why React Context is Not a "State Management" Tool (and Why It Doesn't Replace Redux)](https://blog.isquaredsoftware.com/2021/01/context-redux-differences/#purpose-and-use-cases-for-context)

  Put simply, Redux is a much better choice for managing complex state that changes often, while Context is a better choice for managing simple state that is mostly static.
  `


  return (
    <main>
      <h1>useContext</h1>
      <p><em><strong>useContext</strong> is a React Hook that lets you read and subscribe to context from your component.</em></p>
      <Codespace code={displayCode} />
      <Link href={'/'}><strong>Back to home</strong></Link>
      <Content markdown={markdown} />
    </main>
  )
}
