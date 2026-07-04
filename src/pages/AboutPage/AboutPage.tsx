import { motion } from 'framer-motion'
import {
  FaHeartPulse,
  FaPeopleGroup,
  FaPuzzlePiece,
  FaArrowRight,
} from 'react-icons/fa6'

import SectionHeading from '../../components/home/SectionHeading/SectionHeading'
import { profile } from '../../data/profile'
import './AboutPage.css'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const highlights = [
  {
    title: 'Mi trayectoria',
    text: 'De la Terapia Ocupacional al frontend, con una transición guiada por curiosidad técnica y ganas de construir soluciones digitales.',
    icon: FaArrowRight,
  },
  {
    title: 'Mi enfoque',
    text: 'Interfaces limpias, componentes reutilizables y una forma de trabajar ordenada, colaborativa y orientada a producto.',
    icon: FaPuzzlePiece,
  },
  {
    title: 'Lo que me motiva',
    text: 'Resolver problemas reales, seguir aprendiendo y ver cómo una idea se convierte en algo útil y bien resuelto.',
    icon: FaHeartPulse,
  },
  {
    title: 'Cómo aporto',
    text: 'Empatía, comunicación, análisis de necesidades, adaptabilidad y trabajo en equipo aplicados al día a día técnico.',
    icon: FaPeopleGroup,
  },
]

const timeline = [
  {
    period: '2008 - 2011',
    title: 'Formación en Terapia Ocupacional',
    text: 'Base profesional centrada en personas, observación y acompañamiento.',
  },
  {
    period: '2014 - 2022',
    title: 'Experiencia clínica y trabajo con personas',
    text: 'Desarrollo de habilidades transferibles que hoy aplico en producto y equipo.',
  },
  {
    period: '2019 - 2022',
    title: 'Formación técnica y salto al frontend',
    text: 'React Native, HTML, CSS, JavaScript, React, TypeScript y Redux como punto de inflexión.',
  },
  {
    period: '2022 - actualidad',
    title: 'Desarrollo web profesional',
    text: 'Trabajo en proyectos web y móviles con React, WordPress, Elementor, Git y SVN.',
  },
]

function AboutPage() {
  return (
    <motion.div
      className="page page--about"
      initial="hidden"
      animate="visible"
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
    >
      <motion.section variants={fadeUp} className="about-hero">
        <SectionHeading
          eyebrow="Sobre mí"
          title="Una transición profesional con propósito"
          description="Mi perfil mezcla base humana, sensibilidad por el detalle y una evolución clara hacia el desarrollo web."
        />

        <div className="about-intro">
          <p className="about-intro__text">
            Mi recorrido empieza en la Terapia Ocupacional. Esa etapa me enseñó a escuchar,
            observar necesidades reales y trabajar con método. Más adelante descubrí que disfrutaba
            creando soluciones digitales y resolviendo problemas con tecnología, y ese interés fue
            dando forma a mi transición hacia el frontend.
          </p>

          <div className="about-stats" aria-label="Resumen rápido">
            <article className="about-stat">
              <span className="about-stat__value">{profile.stack.length}</span>
              <span className="about-stat__label">tecnologías en el stack</span>
            </article>
            <article className="about-stat">
              <span className="about-stat__value">{profile.projects.length}</span>
              <span className="about-stat__label">proyecto real documentado</span>
            </article>
            <article className="about-stat">
              <span className="about-stat__value">{profile.education.length}</span>
              <span className="about-stat__label">itinerarios de formación</span>
            </article>
            <article className="about-stat">
              <span className="about-stat__value">15+</span>
              <span className="about-stat__label">años de trayectoria profesional</span>
            </article>
          </div>
        </div>
      </motion.section>

      <motion.section variants={fadeUp} className="about-section">
        <SectionHeading
          eyebrow="Trayectoria"
          title="Evolución profesional"
          description="Una línea temporal breve para entender el camino que me ha traído hasta el desarrollo web."
        />

        <div className="timeline timeline--visual">
          {timeline.map((item, index) => (
            <article className="timeline-item" key={item.period}>
              <div className="timeline-item__marker" aria-hidden="true">
                <span />
              </div>
              <div className="timeline-item__content">
                <p className="timeline-item__period">{item.period}</p>
                <h3 className="timeline-item__title">{item.title}</h3>
                <p className="timeline-item__text">{item.text}</p>
              </div>
              {index < timeline.length - 1 ? <div className="timeline-item__line" aria-hidden="true" /> : null}
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section variants={fadeUp} className="about-section">
        <SectionHeading
          eyebrow="Lo que me define"
          title="Fortalezas que se ven en el trabajo"
          description="Una lectura rápida de las cualidades que más valor aportan a mi perfil."
        />

        <div className="about-cards">
          {highlights.map((item) => {
            const Icon = item.icon

            return (
              <article className="about-card" key={item.title}>
                <span className="about-card__icon" aria-hidden="true">
                  <Icon />
                </span>
                <h3 className="about-card__title">{item.title}</h3>
                <p className="about-card__text">{item.text}</p>
              </article>
            )
          })}
        </div>
      </motion.section>

      <motion.section variants={fadeUp} className="about-section">
        <SectionHeading
          eyebrow="Tecnologías favoritas"
          title="Mi stack más cercano"
          description="Las herramientas con las que me siento especialmente cómoda en el día a día."
        />

        <div className="about-chips">
          {profile.focus.map((item) => (
            <span className="about-chips__item" key={item}>
              {item}
            </span>
          ))}
        </div>
      </motion.section>
    </motion.div>
  )
}

export default AboutPage
