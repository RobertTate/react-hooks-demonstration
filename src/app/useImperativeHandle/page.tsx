"use client";

import { AnimatePresence, motion } from "framer-motion";

import PageContentLayout from "../components/PageContentLayout";
import displayCode from "./displayCode";
import pageMarkdown from "./pageMarkdown";

export default function UseImperativeHandlePage() {
  return (
    <AnimatePresence>
      <motion.main
        key="useImperativeHandle"
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <h1>useImperativeHandle</h1>
        <p>
          <em>
            <strong>useImperativeHandle</strong> is a React Hook that lets you
            customize the handle exposed as a ref.
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
