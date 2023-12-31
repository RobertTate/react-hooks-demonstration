"use client";

import { AnimatePresence, motion } from "framer-motion";

import PageContentLayout from "../components/PageContentLayout";
import displayCode from "./displayCode";
import pageMarkdown from "./pageMarkdown";

export default function UseReducerPage() {
  return (
    <AnimatePresence>
      <motion.main
        key="useReducer"
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <h1>useReducer</h1>
        <p>
          <em>
            <strong>useReducer</strong> is a React Hook that lets you add a
            reducer to your component.
          </em>
        </p>
        <PageContentLayout
          displayCode={displayCode}
          pageMarkdown={pageMarkdown}
        />
      </motion.main>
    </AnimatePresence>
  );
}
