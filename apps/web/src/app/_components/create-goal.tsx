'use client'

import { X } from 'lucide-react'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
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
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createGoal } from '~/services/create-goal'

interface WeekRepetition {
  value: number
  emoji: string
}

const repetitions: WeekRepetition[] = [
  { value: 1, emoji: '🥱' },
  { value: 2, emoji: '🙂' },
  { value: 3, emoji: '😎' },
  { value: 4, emoji: '😜' },
  { value: 5, emoji: '🤨' },
  { value: 6, emoji: '🤯' },
  { value: 7, emoji: '🔥' },
]

const createGoalSchema = z.object({
  title: z.string().min(1, 'Informe a atividade que deseja realizar'),
  desiredWeeklyFrequency: z.coerce.number().min(1).max(7),
})

type CreateGoalForm = z.infer<typeof createGoalSchema>

export function CreateGoal() {
  const queryClient = useQueryClient()

  const { register, control, handleSubmit, formState, reset } =
    useForm<CreateGoalForm>({
      resolver: zodResolver(createGoalSchema),
    })

  const { mutate: handleCreateGoal } = useMutation({
    mutationKey: ['create-goal'],
    mutationFn: async (data: CreateGoalForm) => {
      await createGoal(data)

      queryClient.invalidateQueries({ queryKey: ['summary'] })
      queryClient.invalidateQueries({ queryKey: ['pending-goals'] })

      reset()
    },
  })

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

      <form
        className="flex flex-col justify-between flex-1"
        onSubmit={handleSubmit(data => handleCreateGoal(data))}
      >
        <div className="space-y-6">
          <div className="flex flex-col gap-2">
            <Label htmlFor="title">Qual a atividade?</Label>
            <Input
              id="title"
              autoFocus
              placeholder="Praticar exercícios, meditar, etc..."
              {...register('title')}
            />

            {formState.errors.title && (
              <p className="text-red-400 text-sm">
                {formState.errors.title.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <Label>Quantas vezes na semana?</Label>

            <Controller
              control={control}
              name="desiredWeeklyFrequency"
              defaultValue={3}
              render={({ field }) => {
                return (
                  <RadioGroup
                    value={String(field.value)}
                    onValueChange={field.onChange}
                  >
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
                )
              }}
            />
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
