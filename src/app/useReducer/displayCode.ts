const displayCode = 
`import { useReducer } from 'react';

function reducer(state, action) {
  const { count } = state;
  
  switch(action.type) {
    case 'increment_count':
      return {
          ...state,
          count: count + 1
      }
      break;
    case 'decrement_count':
      return {
          ...state,
          count: count - 1
      }
      break;
    default:
      throw Error('Unknown action.');
  }
}

const initialState = {
  count: 0
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>Counter: {state.count}</h1>
      <button onClick={() => {
        dispatch({ type: 'increment_count' })
      }}>
        Increment Count
      </button>
      <br></br><br></br>
      <button onClick={() => {
        dispatch({ type: 'decrement_count' })
      }}>
        Decrement Count
      </button>
    </>
  );
}`


export default displayCode;
