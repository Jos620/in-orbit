import { Label } from '~/components/ui/label'
import {
  RadioGroup,
  RadioGroupIndicator,
  RadioGroupItem,
} from '~/components/ui/radio-group'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import {
  DialogClose,
  DialogDescription,
  DialogTitle,
} from '~/components/ui/dialog'
import { X } from 'lucide-react'

interface WeekRepetition {
  value: number
  emoji: string
}

export function CreateGoal() {
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
  )
}
