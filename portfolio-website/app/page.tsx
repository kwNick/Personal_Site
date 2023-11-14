import Image from 'next/image'
import Navbar from './components/Navbar'
import Link from 'next/link'
import ButtonNext from './components/ButtonNext'

export default function Home() {
  return (
    <main>
      <div>
      <Navbar/>
      <Link href="/next">nextJS</Link>
      </div>
    </main>
  )
}
