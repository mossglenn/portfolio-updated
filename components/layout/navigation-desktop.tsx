import { SkewedNavLink } from '@/components/ui/skewed-nav-link'
import { siteConfig } from '@/config/site'

const NavigationDesktop = (): React.ReactElement => (
  <div className="mr-0 hidden -skew-x-20 rounded-lg bg-card p-2 md:flex">
    {siteConfig.nav.map((item) => (
      <div key={item.href} className="skew-x-20">
        <SkewedNavLink key={item.href} href={item.href}>
          {item.title}
        </SkewedNavLink>
      </div>
    ))}
  </div>
)
export default NavigationDesktop
