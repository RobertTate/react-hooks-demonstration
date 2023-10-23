import Link from 'next/link'

export default function NotFound() {
  return (
    <main>
      <h1>Uh oh! There's nothing here.</h1>
      <Link href={'/'}>Back to home</Link>
    </main>
  )
}
