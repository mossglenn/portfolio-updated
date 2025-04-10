import { Target, Lightbulb, Users, CheckCircle } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { ReactElement } from 'react'

export function ExpertiseSection(): ReactElement {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex grow flex-col">
          <h2 className="mb-4 text-xl font-semibold">
            My <span className="gradient-text-ochre">expertise</span>
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <Target className="mt-0.5 size-5 text-primary" />
              <div>
                <div className="font-medium">Needs Analysis</div>
                <div className="text-muted-foreground text-sm">
                  Identifying the real problems behind learning requests
                </div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Lightbulb className="mt-0.5 size-5 text-primary" />
              <div>
                <div className="font-medium">Learning Design</div>
                <div className="text-muted-foreground text-sm">
                  Creating engaging, effective learning experiences
                </div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Users className="mt-0.5 size-5 text-secondary" />
              <div>
                <div className="font-medium">Team Leadership</div>
                <div className="text-muted-foreground text-sm">
                  Guiding cross-functional teams to deliver results
                </div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="mt-0.5 size-5 text-primary" />
              <div>
                <div className="font-medium">Impact Measurement</div>
                <div className="text-muted-foreground text-sm">
                  Evaluating learning effectiveness and ROI
                </div>
              </div>
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
