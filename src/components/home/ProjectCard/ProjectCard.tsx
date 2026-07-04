import type { ReactNode } from 'react'

import './ProjectCard.css'

type ProjectCardProps = {
  title: string
  period: string
  description: string
  highlights?: readonly string[]
  stack: readonly string[]
  eyebrow?: string
  featured?: boolean
  footer?: ReactNode
}

function ProjectCard({
  title,
  period,
  description,
  highlights,
  stack,
  eyebrow = 'Proyecto destacado',
  featured = false,
  footer,
}: ProjectCardProps) {
  return (
    <article className={featured ? 'project-card project-card--featured' : 'project-card'}>
      <div className="project-card__header">
        <div>
          <p className="project-card__eyebrow">{eyebrow}</p>
          <h3 className="project-card__title">{title}</h3>
        </div>
        <p className="project-card__period">{period}</p>
      </div>

      <p className="project-card__description">{description}</p>

      {highlights?.length ? (
        <ul className="project-card__list">
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}

      <div className="project-card__stack" aria-label="Tecnologías del proyecto">
        {stack.map((item) => (
          <span className="project-card__tag" key={item}>
            {item}
          </span>
        ))}
      </div>

      {footer ? <div className="project-card__footer">{footer}</div> : null}
    </article>
  )
}

export default ProjectCard
