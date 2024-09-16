'use client'

import { useMemo } from 'react'
import dayjs from 'dayjs'
import ptBR from 'dayjs/locale/pt-br'
import { InOrbitIcon } from '~/components/icon/in-orbit'
import { CreateGoalButton } from './create-goal-button'
import { Progress, ProgressIndicator } from '~/components/ui/progress-bar'
import { Separator } from '~/components/ui/separator'
import { CheckCircle2 } from 'lucide-react'
import { useQuery } from '@tanstack/react-query'
import { getSummary } from '~/services/get-summary'
import { PendingGoals } from './pending-goals'

dayjs.locale(ptBR)

export function Summary() {
  const { data: summary } = useQuery({
    queryKey: ['summary'],
    queryFn: getSummary,
    staleTime: 1000 * 60, // 1 minute
  })

  const firstDayOfWeek = dayjs().startOf('week').format('D MMM')
  const lastDayOfWeek = dayjs().endOf('week').format('D MMM')

  const completedPercentage = useMemo(() => {
    if (!summary) return 0

    const percentage = (summary.completed / summary.total) * 100
    return Math.round(percentage)
  }, [summary])

  return (
    <div className="py-10 px-5 max-w-[30rem] mx-auto flex flex-col gap-6">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <InOrbitIcon />
          <span className="text-lg font-semibold capitalize">
            {firstDayOfWeek} - {lastDayOfWeek}
          </span>
        </div>

        <CreateGoalButton
          buttonProps={{
            size: 'sm',
          }}
        />
      </header>

      <main className="flex flex-col gap-3">
        <Progress value={summary?.completed} max={summary?.total}>
          <ProgressIndicator style={{ width: `${completedPercentage}%` }} />
        </Progress>

        <div className="flex items-center justify-between text-xs text-zinc-400">
          <span>
            Você completou{' '}
            <span className="text-zinc-100">{summary?.completed}</span> de{' '}
            <span className="text-zinc-100">{summary?.total}</span> metas nessa
            semana.
          </span>
          <span>{completedPercentage}%</span>
        </div>

        <Separator />

        <PendingGoals />

        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-medium">Sua semana</h2>

          {summary?.goalsPerDay &&
            Object.entries(summary.goalsPerDay).map(([date, goals]) => {
              const weekDay = dayjs(date).format('dddd')
              const formatedDate = dayjs(date).format('D[ de ]MMMM')

              return (
                <div key={date} className="flex flex-col gap-4">
                  <h3 className="font-medium">
                    <span className="capitalize">{weekDay}</span>{' '}
                    <span className="text-zinc-400 text-xs">
                      ({formatedDate})
                    </span>
                  </h3>

                  <ul className="flex flex-col gap-3">
                    {goals.map(goal => {
                      const completedAt = dayjs(goal.completedAt).format(
                        'HH:mm'
                      )

                      return (
                        <li key={goal.id} className="flex items-center gap-2">
                          <CheckCircle2 className="size-4 text-pink-500" />
                          <span className="text-sm text-zinc-400">
                            Você completou{' '}
                            <span className="text-zinc-100">
                              "{goal.title}"
                            </span>{' '}
                            às{' '}
                            <span className="text-zinc-100">{completedAt}</span>
                          </span>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              )
            })}
        </div>
      </main>
    </div>
  )
}
