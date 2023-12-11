const pageMarkdown = `
## Basics

### Requirements

A custom hook is any function in React that:

- starts with the word **use**, followed by a capital letter
- calls other hooks inside of it
- is invoked at the top level of a function component

The main purpose of a custom hook is to **share logic** (not state) between components, keeping your code **DRY** (Don't Repeat Yourself).

### Example: A "useFetch" hook

Let's say I make a lot of network requests in my app across many different components. I might find myself writing the same network fetching code over and over again.

If you find yourself duplicating code, try extracting that code into a custom hook:

\`\`\`js
import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

export default function App() {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/todos/1');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;

  return (
    <div>
      <h1>{data.title}</h1>
    </div>
  );
}
\`\`\`

Using the code above, I now have a custom hook called **useFetch** that I can use in any component in my app. This saves on a lot of duplication.

It's important to note, however, that **custom hooks are not a way to share state between components**.
Each component that uses a custom hook is running its own instance of that hook, creating its own state.

Check out the [official React docs](https://react.dev/learn/reusing-logic-with-custom-hooks) for more info on custom hooks.

`;

export default pageMarkdown;
