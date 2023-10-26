'use client'

import PageContentLayout from '../components/PageContentLayout'
import displayCode from './displayCode'
import pageMarkdown from './pageMarkdown'

export default function UseRefPage() {
  return (
    <main>
      <h1>useRef</h1>
      <p><em><strong>useRef</strong> is a non-reactive React Hook, that lets you reference a value that can be updated without causing the component to re-render.</em></p>
      <PageContentLayout displayCode={displayCode} pageMarkdown={pageMarkdown} />
    </main>
  )
}
