import CardAvatar from './components/CardAvatar'
import Navbar from './components/Navbar'
export default function Home() {
  return (
    <main>
      <div>
      <Navbar/>
      <div className="h-screen flex items-center justify-center">
        <CardAvatar />
      </div>
      </div>
    </main>
  )
}
