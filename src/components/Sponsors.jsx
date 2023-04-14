import Image from 'next/image'

import { Container } from '@/components/Container'
import BankUnited from '@/images/logos/BankUnited.jpeg'
import Kaseya from '@/images/logos/Kaseya.jpeg'
import MDC from '@/images/logos/MDC.png'

const sponsors = [
  { name: 'Bank United', logo: BankUnited },
  { name: 'Kaseya', logo: Kaseya },
  { name: 'Miami Dade College', logo: MDC }
]

export function Sponsors() {
  return (
    <section id="sponsors" aria-label="Sponsors" className="py-20 sm:py-32">
      <Container>
        <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl">
          Sponsors
        </h2>
        <div className="mx-auto mt-20 grid max-w-max grid-cols-1 place-content-center gap-x-32 gap-y-12 sm:grid-cols-3 md:gap-x-16 lg:gap-x-32">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="flex items-center justify-center"
            >
              {sponsor.name}
              {/* <Image src={sponsor.logo} alt={sponsor.name} unoptimized /> */}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
