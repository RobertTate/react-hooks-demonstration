import Codespace from '../components/Codespace'
import Link from 'next/link'
import displayCode from './displayCode';

export default function UseStatePage() {
  return (
    <main>
      <Codespace code={displayCode} />
      <Link href={'/'}>Back to home</Link>
    </main>
  )
}
