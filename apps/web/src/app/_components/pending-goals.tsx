import { useQuery } from '@tanstack/react-query'
import { Plus } from 'lucide-react'
import { OutlineButton } from '~/components/ui/outline-button'
import { getPendingGoals } from '~/services/get-pending-goals'

export function PendingGoals() {
  const { data: pendingGoals } = useQuery({
    queryKey: ['pending-goals'],
    queryFn: getPendingGoals,
  })

  return (
    <div className="flex flex-wrap gap-3">
      {pendingGoals?.map(goal => (
        <OutlineButton
          key={goal.id}
          disabled={goal.completionCount >= goal.desiredWeeklyFrequency}
        >
          <Plus className="size-4 text-zinc-600" />
          {goal.title}
        </OutlineButton>
      ))}
    </div>
  )
}
