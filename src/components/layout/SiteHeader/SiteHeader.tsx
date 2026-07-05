import { useEffect, useId, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'

import { navigationItems } from '../../../data/navigation'
import { profile } from '../../../data/profile'
import { classNames } from '../../../utils/classNames'
import './SiteHeader.css'

function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const menuId = useId()
  const menuRef = useRef<HTMLElement | null>(null)
  const toggleButtonRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return undefined
    }

    const { body } = document
    const previousOverflow = body.style.overflow
    body.style.overflow = 'hidden'

    return () => {
      body.style.overflow = previousOverflow
    }
  }, [isMobileMenuOpen])

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return undefined
    }

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target

      if (!(target instanceof Node)) {
        return
      }

      const clickedInsideMenu = menuRef.current?.contains(target)
      const clickedToggleButton = toggleButtonRef.current?.contains(target)

      if (!clickedInsideMenu && !clickedToggleButton) {
        setIsMobileMenuOpen(false)
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false)
        toggleButtonRef.current?.focus()
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isMobileMenuOpen])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((currentValue) => !currentValue)
  }

  return (
    <header className="site-header">
      <div className="site-header__brand">
        <p className="site-header__eyebrow">Portfolio</p>
        <NavLink className="site-header__name" to="/">
          {profile.name}
        </NavLink>
      </div>

      <button
        ref={toggleButtonRef}
        className={classNames(
          'site-header__menu-toggle',
          isMobileMenuOpen && 'site-header__menu-toggle--open',
        )}
        type="button"
        aria-expanded={isMobileMenuOpen}
        aria-label={isMobileMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
        aria-controls={menuId}
        onClick={toggleMobileMenu}
      >
        <span className="site-header__menu-toggle-line" />
        <span className="site-header__menu-toggle-line" />
        <span className="site-header__menu-toggle-line" />
      </button>

      <nav
        ref={menuRef}
        id={menuId}
        className={classNames(
          'site-header__nav',
          isMobileMenuOpen && 'site-header__nav--mobile-open',
        )}
        aria-label="Navegación principal"
      >
        {navigationItems.map((item) => (
          <NavLink
            key={item.href}
            className={({ isActive }) =>
              isActive ? 'site-header__link site-header__link--active' : 'site-header__link'
            }
            to={item.href}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {item.label.es}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

export default SiteHeader
