import { Menu } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { SkewedNavLink } from '@/components/ui/skewed-nav-link'
import { siteConfig } from '@/config/site'

const NavigationMobile = (): React.ReactElement => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <div className="mr-1 -skew-x-20 rounded-md bg-slate-light pl-1 shadow-md hover:bg-accent hover:text-card">
            <div className="skew-x-20">
              <Button className="mr-2" size="sm" variant="none">
                <Menu className="ml-1" strokeWidth={3} />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </div>
          </div>
        </SheetTrigger>
        <SheetContent className="w-[80vw] sm:w-[350px]" side="right">
          <SheetHeader>
            <SheetTitle className="sr-only">Menu</SheetTitle>
          </SheetHeader>
          <div className="mt-8 flex flex-col space-y-6">
            {siteConfig.nav.map((item, index) => (
              <SkewedNavLink
                key={item.href}
                className="animate-slide-in-from-right"
                href={item.href}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </SkewedNavLink>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
export default NavigationMobile
