import PageContentLayout from "../components/PageContentLayout";
import displayCode from "./displayCode";
import pageMarkdown from "./pageMarkdown";

export default function UseLayoutEffectPage() {
  return (
    <main>
      <h1>useLayoutEffect</h1>
      <p>
        <em>
          <strong>useLayoutEffect</strong> is a version of{" "}
          <strong>useEffect</strong> that fires before the browser repaints the
          screen.
        </em>
      </p>
      <PageContentLayout
        displayCode={displayCode}
        pageMarkdown={pageMarkdown}
      />
    </main>
  );
}
