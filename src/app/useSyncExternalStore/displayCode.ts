const displayCode = `import { useSyncExternalStore, useEffect } from 'react';

const fruitStore = {
  state: {
    appleCount: 0,
    orangeCount: 0,
  },
  listeners: [],
  updateState(incomingState) {
    fruitStore.state = { ...fruitStore.state, ...incomingState };
    // notify all listeners
    fruitStore.listeners.forEach(listener => listener());
  },
  subscribe(listener) {
    // add listener to listeners array
    fruitStore.listeners.push(listener);

    // return unsubscribe function for cleanup when component unmounts
    return () => {
      fruitStore.listeners = fruitStore.listeners.filter(l => l !== listener);
    };
  },
  getSnapshot() {
    return fruitStore.state;
  },
};

function AppleCount() {
  const { subscribe, getSnapshot } = fruitStore;

  useEffect(() => {
    console.log('AppleCount rendered');
  });

  const appleCount = useSyncExternalStore(subscribe, () => getSnapshot().appleCount);

  return (
    <>
      <h1>Apple Count: {appleCount}</h1>
      <button onClick={() => fruitStore.updateState({ appleCount: appleCount + 1 })}>
      Add Apple
      </button>
    </>
  )
}

function OrangeCount() {
  const { subscribe, getSnapshot } = fruitStore;

  useEffect(() => {
    console.log('OrangeCount rendered');
  });

  const orangeCount = useSyncExternalStore(subscribe, () => getSnapshot().orangeCount);

  return (
    <>
      <h1>Orange Count: {orangeCount}</h1>
      <button onClick={() => fruitStore.updateState({ orangeCount: orangeCount + 1 })}>
        Add Orange
      </button>
    </>
  )
}


export default function App() {
  return (
    <>
      <AppleCount />
      <OrangeCount />
    </>
  )
}


`;

export default displayCode;
