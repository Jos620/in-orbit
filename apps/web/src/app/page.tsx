import Image from 'next/image'
import { Plus, X } from 'lucide-react'

import fullLogo from './_assets/full-logo.svg'
import letsStartIllustration from './_assets/lets-start-illustration.svg'
import { Button } from '~/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '~/components/ui/dialog'
import { Label } from '~/components/ui/label'
import { Input } from '~/components/ui/input'
import {
  RadioGroup,
  RadioGroupIndicator,
  RadioGroupItem,
} from '~/components/ui/radio-group'

interface WeekRepetition {
  value: number
  emoji: string
}

export default function HomePage() {
  const repetitions: WeekRepetition[] = [
    { value: 1, emoji: '🥱' },
    { value: 2, emoji: '🙂' },
    { value: 3, emoji: '😎' },
    { value: 4, emoji: '😜' },
    { value: 5, emoji: '🤨' },
    { value: 6, emoji: '🤯' },
    { value: 7, emoji: '🔥' },
  ]

  return (
    <Dialog>
      <main className="h-screen flex flex-col items-center justify-center gap-8">
        <Image src={fullLogo} alt="in.orbit" />
        <Image src={letsStartIllustration} alt="lets start illustration" />

        <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
          Você ainda não cadastrou nenhuma meta, que tal cadastrar um agora
          mesmo?
        </p>

        <DialogTrigger asChild>
          <Button>
            <Plus className="size-4" />
            Cadastrar meta
          </Button>
        </DialogTrigger>
      </main>

      <DialogContent>
        <div className="flex flex-col gap-6 h-full">
          <div className="space-y-3">
            <div className="flex items-start justify-between">
              <DialogTitle>Cadastrar meta</DialogTitle>
              <DialogClose>
                <X className="size-5 text-zinc-600" />
              </DialogClose>
            </div>

            <DialogDescription>
              Adicione atividades que te fazem bem e que você quer continuar
              praticando toda semana.
            </DialogDescription>
          </div>

          <form className="flex flex-col justify-between flex-1">
            <div className="space-y-6">
              <div className="flex flex-col gap-2">
                <Label htmlFor="title">Qual a atividade?</Label>
                <Input
                  id="title"
                  autoFocus
                  placeholder="Praticar exercícios, meditar, etc..."
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label>Quantas vezes na semana?</Label>
                <RadioGroup>
                  {repetitions.map(repetition => (
                    <RadioGroupItem
                      key={repetition.value}
                      value={repetition.value.toString()}
                    >
                      <RadioGroupIndicator />
                      <span className="text-zinc-300 text-sm font-medium leading-none">
                        {repetition.value === 7
                          ? 'Todos dias da semana'
                          : `${repetition.value}x na semana`}
                      </span>
                      <span className="text-lg leading-none">
                        {repetition.emoji}
                      </span>
                    </RadioGroupItem>
                  ))}
                </RadioGroup>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <DialogClose asChild>
                <Button type="button" className="flex-1" variant="secondary">
                  Fechar
                </Button>
              </DialogClose>

              <Button className="flex-1">Salvar</Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}
