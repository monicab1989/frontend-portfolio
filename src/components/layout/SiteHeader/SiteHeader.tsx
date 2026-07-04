import { NavLink } from 'react-router-dom'

import { navigationItems } from '../../../data/navigation'
import { profile } from '../../../data/profile'
import './SiteHeader.css'

function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__brand">
        <p className="site-header__eyebrow">Portfolio</p>
        <NavLink className="site-header__name" to="/">
          {profile.name}
        </NavLink>
      </div>

      <nav className="site-header__nav" aria-label="Navegación principal">
        {navigationItems.map((item) => (
          <NavLink
            key={item.href}
            className={({ isActive }) =>
              isActive ? 'site-header__link site-header__link--active' : 'site-header__link'
            }
            to={item.href}
          >
            {item.label.es}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

export default SiteHeader
