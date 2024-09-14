import Image from 'next/image'
import { Plus } from 'lucide-react'

import fullLogo from './_assets/full-logo.svg'
import letsStartIllustration from './_assets/lets-start-illustration.svg'

export default function HomePage() {
  return (
    <main className="h-screen flex flex-col items-center justify-center gap-8">
      <Image src={fullLogo} alt="in.orbit" />
      <Image src={letsStartIllustration} alt="lets start illustration" />

      <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
        Você ainda não cadastrou nenhuma meta, que tal cadastrar um agora mesmo?
      </p>

      <button
        type="button"
        className="px-4 py-2.5 rounded-lg bg-violet-500 text-violet-50 flex items-center gap-2 text-sm font-medium tracking-tight hover:bg-violet-600"
      >
        <Plus className="size-4" />
        Cadastrar meta
      </button>
    </main>
  )
}
