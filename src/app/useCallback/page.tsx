import PageContentLayout from '../components/PageContentLayout'
import displayCode from './displayCode'
import pageMarkdown from './pageMarkdown'

export default function UseCallbackPage() {
  return (
    <main>
      <h1>useCallback</h1>
      <p><em><strong>useCallback</strong> is a React Hook that lets you cache a <strong>function definition</strong> between re-renders.</em></p>
      <PageContentLayout displayCode={displayCode} pageMarkdown={pageMarkdown} />
    </main>
  )
}
