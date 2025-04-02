import { SkewedNavLink } from '@/components/ui/skewed-nav-link'
import { siteConfig } from '@/config/site'

const NavigationDesktop = (): React.ReactElement => (
  <div className="mr-0 hidden max-w-md -skew-x-20 rounded-lg p-2 md:flex md:flex-wrap md:justify-evenly md:gap-2 md:p-0">
    {siteConfig.nav.map((item) => (
      <div key={item.href} className="flex shrink grow skew-x-20 justify-evenly">
        <SkewedNavLink key={item.href} href={item.href}>
          {item.title}
        </SkewedNavLink>
      </div>
    ))}
  </div>
)
export default NavigationDesktop
