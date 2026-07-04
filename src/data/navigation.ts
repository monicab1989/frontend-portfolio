import { routePaths } from '../utils/routes'

export const navigationItems = [
  { label: { es: 'Inicio', en: 'Home' }, href: routePaths.home },
  { label: { es: 'Sobre mí', en: 'About' }, href: routePaths.about },
  { label: { es: 'Proyectos', en: 'Projects' }, href: routePaths.projects },
  { label: { es: 'Experiencia', en: 'Experience' }, href: routePaths.experience },
  { label: { es: 'Contacto', en: 'Contact' }, href: routePaths.contact },
] as const
