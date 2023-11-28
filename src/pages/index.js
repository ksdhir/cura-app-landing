import Image from 'next/image';
import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Intro /> */}
      <Contact />
    </>
  );
}
