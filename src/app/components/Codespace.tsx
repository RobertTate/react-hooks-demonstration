'use client';

import { Sandpack } from "@codesandbox/sandpack-react";
import { freeCodeCampDark } from "@codesandbox/sandpack-themes";

type CodespaceProps = {
    code: string;
}

const defaultCode = 
`export default function App() {
    return <h1>Hello world!</h1>
}`

export default function Codespace({code = defaultCode}: CodespaceProps) {
    const files = {
        "/App.js": `${code}`,
    }

    return (
        <Sandpack
            files={files}
            theme={freeCodeCampDark}
            template="react"
            options={
                { 
                    editorHeight: "600px",
                }
            }
        />
    )
}
