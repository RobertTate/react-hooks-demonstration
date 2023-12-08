const pageMarkdown = `
## Basics

### Usage

The **useSyncExternalStore** is a reactive hook that returns a snapshot of data in an **external store** of your creation.

Two arguments are required to be passed to the hook, with an optional third.

\`\`\`js
const snapshot = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot?)
\`\`\`

The **\`subscribe\`** argument is a function you create, that when you invoke, has access to a callback function parameter.
When you set up your store, you need to invoke that callback function whenever the data in the external store changes. This is what will tell the component that the store has changed, which triggers a snapshot diff check.

The **\`getSnapshot\`** argument is a function you create, which should return the data from your store that you want your component to have access to.

Every time your **\`subscribe\`** callback is invoked, **\`getSnapshot\`** runs again. If a diff is detected between the last and next snapshots, the component will rerender.

The **\`getServerSnapshot\`** argument is an optional function that also returns the initial snapshot of data from your external store. This argument is needed specifically for server-side rendering.

### Granular Rerenders

If **\`getSnapshot\`** is only returning a subset of data from your external store, that component will only rerender when that subset of data changes. 

This allows for more granular rerenders, and better performance.
`;

export default pageMarkdown;
