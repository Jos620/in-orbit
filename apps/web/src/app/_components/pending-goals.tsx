import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Plus } from 'lucide-react'
import { OutlineButton } from '~/components/ui/outline-button'
import { completeGoal } from '~/services/complete-goal'
import { getPendingGoals } from '~/services/get-pending-goals'

export function PendingGoals() {
  const queryClient = useQueryClient()

  const { data: pendingGoals } = useQuery({
    queryKey: ['pending-goals'],
    queryFn: getPendingGoals,
  })

  const completeGoalMutation = useMutation({
    mutationKey: ['complete-goal'],
    mutationFn: async (goalId: string) => {
      await completeGoal(goalId)

      queryClient.invalidateQueries({ queryKey: ['summary'] })
      queryClient.invalidateQueries({ queryKey: ['pending-goals'] })
    },
  })

  return (
    <div className="flex flex-wrap gap-3">
      {pendingGoals?.map(goal => (
        <OutlineButton
          key={goal.id}
          disabled={goal.completionCount >= goal.desiredWeeklyFrequency}
          onClick={() => completeGoalMutation.mutate(goal.id)}
        >
          <Plus className="size-4 text-zinc-600" />
          {goal.title}
        </OutlineButton>
      ))}
    </div>
  )
}
