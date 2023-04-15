import Image from 'next/image'
import { useRouter } from 'next/router'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background.jpg'

export function Hero() {
  const router = useRouter()

  return (
    <div className="relative pb-20 pt-10 sm:py-24">
      <div className="absolute inset-x-0 -bottom-14 -top-48 overflow-hidden bg-indigo-50">
        {/* <Image
          className="absolute left-0 top-0 translate-x-[-55%] translate-y-[-10%] -scale-x-100 sm:left-1/2 sm:translate-x-[-98%] sm:translate-y-[-6%] lg:translate-x-[-106%] xl:translate-x-[-122%]"
          src={backgroundImage}
          alt=""
          width={918}
          height={1495}
          priority
          unoptimized
        /> */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-display text-5xl font-bold tracking-tighter text-blue-600 sm:text-7xl">
            Emend.ai
          </h1>
          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-blue-900">
            <p>
              The next generation of humans will use A.I. to have unprecedented
              insight into their environment. Emend.ai is here to give you a
              glimpse into this future.
            </p>
            <p>
              Enter the app to experience environmental insight like never
              before.
            </p>
          </div>
          <Button
            onClick={() => {
              router.push('/app')
            }}
            className="mt-10 w-full sm:hidden"
          >
            Enter App
          </Button>
        </div>
      </Container>
    </div>
  )
}
