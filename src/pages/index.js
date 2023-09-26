import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen ${inter.className} justify-center items-center flex-col`}
    >
      <h1 className='text-5xl'>This site is a work in progress.</h1>
      <p className='text-xl'>Team Cura 2023</p>
    </main>
  )
}
