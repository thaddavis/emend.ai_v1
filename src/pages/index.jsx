import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Newsletter } from '@/components/Newsletter'
import { Schedule } from '@/components/Schedule'
import { Speakers } from '@/components/Speakers'

import { Issues } from '@/components/Issues'
import { Sponsors } from '@/components/Sponsors'

export default function Home() {
  return (
    <>
      <Head>
        <title>Emend.ai - Environment Insight</title>
        <meta
          name="description"
          content="Emend.ai leverages the latest in A.I. big data algorithms to provide unprecedented insight into our environment."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        {/* <Speakers /> */}
        <Issues />

        {/* <Schedule /> */}
        {/* <Sponsors /> */}
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
