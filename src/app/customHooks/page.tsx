"use client";

import { AnimatePresence, motion } from "framer-motion";

import PageContentLayout from "../components/PageContentLayout";
import displayCode from "./displayCode";
import pageMarkdown from "./pageMarkdown";

export default function CustomHooksPage() {
  return (
    <AnimatePresence>
      <motion.main
        key="customHooks"
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <h1>Custom Hooks</h1>
        <p>
          <em>
            <strong>Custom Hooks</strong> are a React feature that lets you extract stateful logic into reusable functions.
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
