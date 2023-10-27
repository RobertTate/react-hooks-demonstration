'use client'

import { motion, AnimatePresence } from 'framer-motion';
import PageContentLayout from "../components/PageContentLayout";
import displayCode from "./displayCode";
import pageMarkdown from "./pageMarkdown";

export default function UseStatePage() {
  return (
    <AnimatePresence>
      <motion.main
        key="useState"
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <h1>useState</h1>
        <p>
          <em>
            <strong>useState</strong> is a React Hook that lets you add a state
            variable to your component. When you update the state to a different
            value, you trigger a re-render.
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
