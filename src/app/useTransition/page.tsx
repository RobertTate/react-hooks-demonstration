'use client'

import { motion, AnimatePresence } from 'framer-motion';
import PageContentLayout from "../components/PageContentLayout";
import displayCode from "./displayCode";
import pageMarkdown from "./pageMarkdown";

export default function UseTransitionPage() {
  return (
    <AnimatePresence>
      <motion.main
        key="useState"
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
      <h1>useTransition</h1>
      <p>
        <em>
          <strong>useTransition</strong> is a React Hook that lets you update
          the state without blocking the UI.
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
