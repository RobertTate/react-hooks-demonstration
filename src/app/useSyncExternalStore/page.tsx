"use client";

import { AnimatePresence, motion } from "framer-motion";

import PageContentLayout from "../components/PageContentLayout";
import displayCode from "./displayCode";
import pageMarkdown from "./pageMarkdown";

export default function UseSyncExternalStorePage() {
  return (
    <AnimatePresence>
      <motion.main
        key="useState"
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <h1>useSyncExternalStore</h1>
        <p>
          <em>
            <strong>useSyncExternalStore</strong> is a React Hook that lets you
            subscribe to an external store.
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
