import { InOrbitIcon } from '~/components/icon/in-orbit'
import { CreateGoalButton } from './create-goal-button'
import { Progress, ProgressIndicator } from '~/components/ui/progress-bar'
import { Separator } from '~/components/ui/separator'
import { OutlineButton } from '~/components/ui/outline-button'
import { CheckCircle2, Plus } from 'lucide-react'

interface CompletedGoal {
  date: string
  dayName: string
  goals: {
    name: string
    completedAt: string
  }[]
}

export function Summary() {
  const goalsCount = 15
  const completedGoalsCount = 8

  const goals: string[] = [
    'Meditar',
    'Nadar',
    'Praticar Exercícios',
    'Me alimentar bem',
  ]

  const completedGoals: CompletedGoal[] = [
    {
      date: '10 de Agosto',
      dayName: 'Domingo',
      goals: [
        { name: 'Acordar Cedo', completedAt: '08:13h' },
        { name: 'Acordar Cedo', completedAt: '08:13h' },
      ],
    },
    {
      date: '11 de Agosto',
      dayName: 'Segunda',
      goals: [{ name: 'Acordar Cedo', completedAt: '08:13h' }],
    },
  ]

  return (
    <div className="py-10 px-5 max-w-[30rem] mx-auto flex flex-col gap-6">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <InOrbitIcon />
          <span className="text-lg font-semibold">5 a 10 de Agosto</span>
        </div>

        <CreateGoalButton
          buttonProps={{
            size: 'sm',
          }}
        />
      </header>

      <main className="flex flex-col gap-3">
        <Progress value={completedGoalsCount} max={goalsCount}>
          <ProgressIndicator style={{ width: '50%' }} />
        </Progress>

        <div className="flex items-center justify-between text-xs text-zinc-400">
          <span>
            Você completou{' '}
            <span className="text-zinc-100">{completedGoalsCount}</span> de{' '}
            <span className="text-zinc-100">{goalsCount}</span> metas nessa
            semana.
          </span>
          <span>50%</span>
        </div>

        <Separator />

        <div className="flex flex-wrap gap-3">
          {goals.map(goal => (
            <OutlineButton key={goal}>
              <Plus className="size-4 text-zinc-600" />
              {goal}
            </OutlineButton>
          ))}
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-medium">Sua semana</h2>

          {completedGoals.map(completedGoal => (
            <div key={completedGoal.date} className="flex flex-col gap-4">
              <h3 className="font-medium">
                {completedGoal.dayName}{' '}
                <span className="text-zinc-400 text-xs">
                  ({completedGoal.date})
                </span>
              </h3>

              <ul className="flex flex-col gap-3">
                {completedGoal.goals.map(goal => (
                  <li
                    key={goal.completedAt}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle2 className="size-4 text-pink-500" />
                    <span className="text-sm text-zinc-400">
                      Você completou{' '}
                      <span className="text-zinc-100">"{goal.name}"</span> às{' '}
                      <span className="text-zinc-100">{goal.completedAt}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
