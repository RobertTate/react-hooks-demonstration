'use client'

import PageContentLayout from '../components/PageContentLayout'
import displayCode from './displayCode'
import pageMarkdown from './pageMarkdown'

export default function UseReducerPage() {
  return (
    <main>
      <h1>useReducer</h1>
      <p><em><strong>useReducer</strong> is a React Hook that lets you add a reducer to your component.</em></p>
      <PageContentLayout displayCode={displayCode} pageMarkdown={pageMarkdown} />
    </main>
  )
}
