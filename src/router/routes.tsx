import type { RouteObject } from 'react-router-dom'

import AboutPage from '../pages/AboutPage/AboutPage'
import ContactPage from '../pages/ContactPage/ContactPage'
import ExperiencePage from '../pages/ExperiencePage/ExperiencePage'
import HomePage from '../pages/HomePage/HomePage'
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage'
import ProjectsPage from '../pages/ProjectsPage/ProjectsPage'
import SkillsPage from '../pages/SkillsPage/SkillsPage'
import BaseLayout from '../layouts/BaseLayout'
import { routeSegments } from '../utils/routes'

export const routes: RouteObject[] = [
  {
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: routeSegments.about,
        element: <AboutPage />,
      },
      {
        path: routeSegments.skills,
        element: <SkillsPage />,
      },
      {
        path: routeSegments.projects,
        element: <ProjectsPage />,
      },
      {
        path: routeSegments.experience,
        element: <ExperiencePage />,
      },
      {
        path: routeSegments.contact,
        element: <ContactPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]
