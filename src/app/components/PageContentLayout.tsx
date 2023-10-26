import Codespace from "./Codespace";
import Link from "next/link";
import Content from "./Content";

type PageContentLayoutProps = {
  displayCode: string;
  pageMarkdown: string;
};

export default function PageContentLayout({
  displayCode,
  pageMarkdown,
}: PageContentLayoutProps) {
  return (
    <>
      <Codespace code={displayCode} />
      <Link href={"/"}>
        <strong>Back to home</strong>
      </Link>
      <Content markdown={pageMarkdown} />
    </>
  );
}
