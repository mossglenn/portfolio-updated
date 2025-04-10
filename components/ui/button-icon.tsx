import { ChevronRight } from 'lucide-react'
import { type ReactElement } from 'react'

import { Button } from '@/components/ui/button'

export default function ButtonIcon(): ReactElement {
  return (
    <Button size="icon" variant="outline">
      <ChevronRight />
    </Button>
  )
}
