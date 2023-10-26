"use client";

import Markdown from "react-markdown";
// @ts-expect-error
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// @ts-expect-error
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import styles from "./Content.module.css";

type ContentProps = {
  markdown: string;
};

export default function Content({ markdown }: ContentProps) {
  return (
    <Markdown
      className={styles.Content}
      components={{
        code(props) {
          const { children, className, node, ...rest } = props;
          const match = /language-(\w+)/.exec(className || "");
          return match ? (
            <SyntaxHighlighter
              {...rest}
              style={a11yDark}
              language={match[1]}
              PreTag="div"
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <code {...rest} className={className}>
              {children}
            </code>
          );
        },
      }}
    >
      {markdown}
    </Markdown>
  );
}
