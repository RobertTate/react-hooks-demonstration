"use client";

import { AnimatePresence, motion } from "framer-motion";

import PageContentLayout from "../components/PageContentLayout";
import displayCode from "./displayCode";
import pageMarkdown from "./pageMarkdown";

export default function UseMemoPage() {
  return (
    <AnimatePresence>
      <motion.main
        key="useMemo"
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <h1>useMemo</h1>
        <p>
          <em>
            <strong>useMemo</strong> is a React Hook that lets you cache the
            result of a calculation between re-renders.
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
