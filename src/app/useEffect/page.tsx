import PageContentLayout from "../components/PageContentLayout";
import displayCode from "./displayCode";
import pageMarkdown from "./pageMarkdown";

export default function UseEffectPage() {
  return (
    <main>
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
    </main>
  );
}
