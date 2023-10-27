'use client'

import { motion, AnimatePresence } from 'framer-motion';
import PageContentLayout from "../components/PageContentLayout";
import displayCode from "./displayCode";
import pageMarkdown from "./pageMarkdown";

export default function UseEffectPage() {
  return (
    <AnimatePresence>
      <motion.main
        key="useReducer"
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <h1>useEffect</h1>
        <p>
          <em>
            <strong>useEffect</strong> is a React Hook that lets you synchronize
            your components rendering cycle with an external system.
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
