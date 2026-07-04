import type { IconType } from 'react-icons'

import './TechCard.css'

type TechCardProps = {
  title: string
  description: string
  Icon: IconType
}

function TechCard({ title, description, Icon }: TechCardProps) {
  return (
    <article className="tech-card">
      <span className="tech-card__icon" aria-hidden="true">
        <Icon />
      </span>
      <h3 className="tech-card__title">{title}</h3>
      <p className="tech-card__description">{description}</p>
    </article>
  )
}

export default TechCard
