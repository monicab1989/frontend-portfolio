import './SectionHeading.css'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  id?: string
}

function SectionHeading({ eyebrow, title, description, id }: SectionHeadingProps) {
  return (
    <header className="section-heading" id={id}>
      <p className="section-heading__eyebrow">{eyebrow}</p>
      <h2 className="section-heading__title">{title}</h2>
      {description ? <p className="section-heading__description">{description}</p> : null}
    </header>
  )
}

export default SectionHeading
