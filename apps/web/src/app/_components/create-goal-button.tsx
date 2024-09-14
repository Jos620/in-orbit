import { Plus } from 'lucide-react'
import { Button, type ButtonProps } from '~/components/ui/button'
import { DialogTrigger } from '~/components/ui/dialog'

interface CreateGoalButtonProps {
  buttonProps?: ButtonProps
}

export function CreateGoalButton({ buttonProps }: CreateGoalButtonProps) {
  return (
    <DialogTrigger asChild>
      <Button {...buttonProps}>
        <Plus className="size-4" />
        Cadastrar meta
      </Button>
    </DialogTrigger>
  )
}
