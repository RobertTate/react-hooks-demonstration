"use client";

import { AnimatePresence, motion } from "framer-motion";

import PageContentLayout from "../components/PageContentLayout";
import displayCode from "./displayCode";
import pageMarkdown from "./pageMarkdown";

export default function UseLayoutEffectPage() {
  return (
    <AnimatePresence>
      <motion.main
        key="useReducer"
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <h1>useLayoutEffect</h1>
        <p>
          <em>
            <strong>useLayoutEffect</strong> is a version of{" "}
            <strong>useEffect</strong> that fires before the browser repaints
            the screen.
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
