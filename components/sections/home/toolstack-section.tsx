import { type ReactElement } from 'react'

import { Card, CardContent } from '@/components/ui/card'

export function ToolstackSection(): ReactElement {
  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="mb-4 text-xl font-semibold">
          My <span className="text-gradient-brand-light">toolstack</span>
        </h2>
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-muted px-3 py-1 text-sm">Articulate</span>
          <span className="rounded-full bg-muted px-3 py-1 text-sm">Captivate</span>
          <span className="rounded-full bg-muted px-3 py-1 text-sm">Miro</span>
          <span className="rounded-full bg-muted px-3 py-1 text-sm">Figma</span>
          <span className="rounded-full bg-muted px-3 py-1 text-sm">Notion</span>
          <span className="rounded-full bg-muted px-3 py-1 text-sm">Slack</span>
          <span className="rounded-full bg-muted px-3 py-1 text-sm">Asana</span>
          <span className="rounded-full bg-muted px-3 py-1 text-sm">Tableau</span>
        </div>
      </CardContent>
    </Card>
  )
}
