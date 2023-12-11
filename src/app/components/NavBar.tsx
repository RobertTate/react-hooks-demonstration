"use client";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
import { TreeView } from "@mui/x-tree-view/TreeView";
import Link from "next/link";
import { useState } from "react";

import styles from "./NavBar.module.css";

export default function NavBar() {
  const [expanded, setExpanded] = useState<string[]>([]);

  const handleToggle = () => {
    setExpanded((prev) => {
      if (prev.length > 0) {
        return [];
      }
      return ["0"];
    });
  };

  return (
    <nav className={styles["navbar"]}>
      <Link
        className={styles["navbar-homelink"]}
        href={"/"}
        onClick={() => {
          setExpanded((prev) => {
            if (prev.length > 0) {
              return [];
            }
            return prev;
          });
        }}
      >
        Home
      </Link>
      <TreeView
        aria-label="hooks navigator"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        expanded={expanded}
      >
        <TreeItem onClick={handleToggle} nodeId="0" label="Hooks">
          <li onClick={handleToggle}>
            <Link href={"/useState"}>useState</Link>
          </li>
          <li onClick={handleToggle}>
            <Link href={"/useReducer"}>useReducer</Link>
          </li>
          <li onClick={handleToggle}>
            <Link href={"/useRef"}>useRef</Link>
          </li>
          <li onClick={handleToggle}>
            <Link href={"/useEffect"}>useEffect</Link>
          </li>
          <li onClick={handleToggle}>
            <Link href={"/useLayoutEffect"}>useLayoutEffect</Link>
          </li>
          <li onClick={handleToggle}>
            <Link href={"/useMemo"}>useMemo</Link>
          </li>
          <li onClick={handleToggle}>
            <Link href={"/useCallback"}>useCallback</Link>
          </li>
          <li onClick={handleToggle}>
            <Link href={"/useTransition"}>useTransition</Link>
          </li>
          <li onClick={handleToggle}>
            <Link href={"/useContext"}>useContext</Link>
          </li>
          <li onClick={handleToggle}>
            <Link href={"/useSyncExternalStore"}>useSyncExternalStore</Link>
          </li>
          <li onClick={handleToggle}>
            <Link href={"/useImperativeHandle"}>useImperativeHandle</Link>
          </li>
        </TreeItem>
      </TreeView>
    </nav>
  );
}
