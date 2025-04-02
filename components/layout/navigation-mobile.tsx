import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { SkewedNavLink } from '@/components/ui/skewed-nav-link'
import { siteConfig } from '@/config/site'
import { Menu } from 'lucide-react'
import { useState } from 'react'

const NavigationMobile = (): React.ReactElement => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <div className="mr-1 -skew-x-20 rounded-md bg-slate-light pl-1 shadow-md hover:bg-accent hover:text-card">
            <div className="skew-x-20">
              <Button variant="none" size="sm" className="mr-2">
                <Menu strokeWidth={3} className="ml-1" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </div>
          </div>
        </SheetTrigger>
        <SheetContent side="right" className="w-[80vw] sm:w-[350px]">
          <SheetHeader>
            <SheetTitle className="sr-only">Menu</SheetTitle>
          </SheetHeader>
          <div className="mt-8 flex flex-col space-y-6">
            {siteConfig.nav.map((item, index) => (
              <SkewedNavLink
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="animate-slide-in-from-right"
                style={{ animationDelay: `${index * 100}ms` }}
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
