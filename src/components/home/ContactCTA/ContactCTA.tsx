import './ContactCTA.css'

type ContactCTAProps = {
  title: string
  description: string
  email: string
}

function ContactCTA({ title, description, email }: ContactCTAProps) {
  return (
    <section className="contact-cta" aria-label="Contacto final">
      <div className="contact-cta__content">
        <p className="contact-cta__eyebrow">Contacto</p>
        <h2 className="contact-cta__title">{title}</h2>
        <p className="contact-cta__description">{description}</p>
      </div>

      <a className="contact-cta__button" href={`mailto:${email}`}>
        Enviar email
      </a>
    </section>
  )
}

export default ContactCTA
