import { Outlet } from 'react-router-dom'

import Container from '../components/common/Container/Container'
import SkipLink from '../components/common/SkipLink/SkipLink'
import { useScrollToTop } from '../hooks/useScrollToTop'
import SiteHeader from '../components/layout/SiteHeader/SiteHeader'
import './BaseLayout.css'

function BaseLayout() {
  useScrollToTop()

  return (
    <div className="app-shell">
      <SkipLink href="#main-content">Saltar al contenido</SkipLink>
      <Container>
        <SiteHeader />
      </Container>
      <main className="app-shell__main" id="main-content">
        <Container>
          <Outlet />
        </Container>
      </main>
    </div>
  )
}

export default BaseLayout
