import Image from 'next/image'
import Herosection from './components/Herosection'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black" >
      <Herosection/>
    </main>
  )
}
