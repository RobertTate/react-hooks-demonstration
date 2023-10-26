const pageMarkdown = `
## Basics
### ComponentDidMount

The **useEffect** hook takes a function as an argument. This function will be called after the component is rendered for the first time.

\`\`\`js
useEffect(() => {
  // runs after the first render
}, [])
\`\`\`

### ComponentDidUpdate

If you want to run an effect after a component updates, you can pass an array as a second argument to the **useEffect** hook. This array is called the **dependency array**. If the values in the **dependency array** change, the effect will run again.

\`\`\`js
const [count, setCount] = useState(0)
useEffect(() => {
  // runs after the first render, 
  // and also when count changes on subsequent renders
}, [count])
\`\`\`

### ComponentWillUnmount

If you want to run an effect when a component unmounts, you can return a **cleanup function** from within the useEffect callback. This function will be called when the component unmounts.

\`\`\`js
useEffect(() => {
  // runs after the first render
  return () => {
    // runs when the component unmounts
  }
}, [])
\`\`\`


### When to use useEffect
As per the react documentation, if you're not trying to synchronize your component with an external system, you probably don't need to use **useEffect**.

Some examples of "external systems" include:
- Data fetching
- Event listeners
- Timers
- Logging
- Animation Libraries

Here's an example of a potentially unnecessary use of **useEffect**:

\`\`\`js
function Counter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = \`You clicked \${count} times\`
  })

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}
\`\`\`

In the example above, we are using **useEffect** to set the document title to \`You clicked \${count} times\`. 
This is a good use of **useEffect** if you want to synchronize the document title with the count state variable. 
However, if you don't care about synchronizing the document title with the count state variable, then this is an unnecessary use of **useEffect**. 
Instead, you can just set the document title directly in the \`onClick\` handler.

\`\`\`js
function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => {
        setCount(count + 1)
        document.title = \`You clicked \${count + 1} times\`
      }}>Increment</button>
    </div>
  )
}
\`\`\`

## Pitfalls

### Dependency Array

If you pass an empty array as the second argument to the **useEffect** hook, the effect will only run once, after the first render. 
If you pass **no second argument** to the **useEffect** hook, the effect will run after **every render**.

\`\`\`js
useEffect(() => {
  // runs after the first render, and also after every subsequent render
})
\`\`\`

### Infinite Loops

If you set state in an effect, and that state change causes the effect to run again, you will trigger an infinite loop.

\`\`\`js
useEffect(() => {
  // causes a state update, which causes this effect to run again, which causes another state update, which causes this effect to run again, etc...
  setCount(count + 1)
}, [count])
\`\`\`
`
export default pageMarkdown;
