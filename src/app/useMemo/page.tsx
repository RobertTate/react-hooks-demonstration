'use client'

import PageContentLayout from '../components/PageContentLayout'
import displayCode from './displayCode'
import pageMarkdown from './pageMarkdown'

export default function UseMemoPage() {
  return (
    <main>
      <h1>useMemo</h1>
      <p><em><strong>useMemo</strong> is a React Hook that lets you cache the result of a calculation between re-renders.</em></p>
      <PageContentLayout displayCode={displayCode} pageMarkdown={pageMarkdown} />
    </main>
  )
}
