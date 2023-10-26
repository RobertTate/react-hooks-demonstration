import PageContentLayout from "../components/PageContentLayout";
import displayCode from "./displayCode";
import pageMarkdown from "./pageMarkdown";

export default function UseTransitionPage() {
  return (
    <main>
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
    </main>
  );
}
