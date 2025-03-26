import { ChevronRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { ReactElement } from 'react'

export default function ButtonIcon(): ReactElement {
  return (
    <Button variant="outline" size="icon">
      <ChevronRight />
    </Button>
  )
}
