import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import { Features } from '@/components/Features';
import Team from '@/components/Team';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>CURA</title>

        <meta
          name="description"
          content="CURA is a mobile app that assists in monitoring the health of elderly loved ones. Features heart rate monitoring, fall detection, and location tracking."
        />
        <link rel="canonical" href="https://www.cura-app.ca" />
        {/* Open Graph */}
        <meta property="og:url" content="https://www.cura-app.ca" />
        <meta property="og:title" content="CURA: Smart Wearable Health Monitoring App for Elderly Care" />
        <meta
          property="og:description"
          content="CURA is a mobile app that assists in monitoring the health of elderly loved ones. Features heart rate monitoring, fall detection, and location tracking."
        />
      </Head>
      <Header />
      <Hero />
      <Intro />
      <Features />
      <Team />
      <Contact />
      <Footer />
    </>
  );
}
