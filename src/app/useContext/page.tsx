import PageContentLayout from '../components/PageContentLayout'
import displayCode from './displayCode'
import pageMarkdown from './pageMarkdown'

export default function UseContextPage() {
  return (
    <main>
      <h1>useContext</h1>
      <p><em><strong>useContext</strong> is a React Hook that lets you read and subscribe to context from your component.</em></p>
      <PageContentLayout displayCode={displayCode} pageMarkdown={pageMarkdown} />
    </main>
  )
}
