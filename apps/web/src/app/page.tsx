import Image from 'next/image'
import { Plus } from 'lucide-react'

import fullLogo from './_assets/full-logo.svg'
import letsStartIllustration from './_assets/lets-start-illustration.svg'
import { Button } from '~/components/ui/button'

export default function HomePage() {
  return (
    <main className="h-screen flex flex-col items-center justify-center gap-8">
      <Image src={fullLogo} alt="in.orbit" />
      <Image src={letsStartIllustration} alt="lets start illustration" />

      <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
        Você ainda não cadastrou nenhuma meta, que tal cadastrar um agora mesmo?
      </p>

      <Button>
        <Plus className="size-4" />
        Cadastrar meta
      </Button>
    </main>
  )
}
