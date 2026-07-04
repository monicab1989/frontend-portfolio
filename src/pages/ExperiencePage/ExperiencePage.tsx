import { motion } from 'framer-motion'

import SectionHeading from '../../components/home/SectionHeading/SectionHeading'
import { profile } from '../../data/profile'
import './ExperiencePage.css'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

function ExperiencePage() {
  const [mainExperience, academyExperience, previousExperience] = profile.experience

  return (
    <motion.div
      className="page page--experience"
      initial="hidden"
      animate="visible"
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
    >
      <motion.section variants={fadeUp} className="experience-section">
        <SectionHeading
          eyebrow="Experiencia"
          title="Experiencia profesional"
          description="Trayectoria en desarrollo frontend orientado a producto, mantenimiento evolutivo y construcción de interfaces responsive."
        />

        <article className="timeline-card timeline-card--primary">
          <div className="timeline-card__header">
            <div>
              <p className="timeline-card__eyebrow">Experiencia principal</p>
              <h3 className="timeline-card__title">{mainExperience.title}</h3>
              <p className="timeline-card__company">{mainExperience.company}</p>
            </div>
            <p className="timeline-card__period">{mainExperience.period}</p>
          </div>

          <ul className="timeline-card__list">
            {mainExperience.responsibilities.map((responsibility) => (
              <li key={responsibility}>{responsibility}</li>
            ))}
          </ul>

          <div className="timeline-card__stack">
            {mainExperience.stack.map((item) => (
              <span className="timeline-card__tag" key={item}>
                {item}
              </span>
            ))}
          </div>
        </article>

        <div className="experience-secondary">
          <article className="timeline-card">
            <div className="timeline-card__header">
              <div>
                <p className="timeline-card__eyebrow">Base formativa aplicada</p>
                <h3 className="timeline-card__title">{academyExperience.title}</h3>
                <p className="timeline-card__company">{academyExperience.company}</p>
              </div>
              <p className="timeline-card__period">{academyExperience.period}</p>
            </div>

            <ul className="timeline-card__list">
              {academyExperience.responsibilities.map((responsibility) => (
                <li key={responsibility}>{responsibility}</li>
              ))}
            </ul>
          </article>

          <article className="timeline-card timeline-card--compact">
            <div className="timeline-card__header">
              <div>
                <p className="timeline-card__eyebrow">Experiencia previa</p>
                <h3 className="timeline-card__title">{previousExperience.title}</h3>
                <p className="timeline-card__company">{previousExperience.company}</p>
              </div>
              <p className="timeline-card__period">{previousExperience.period}</p>
            </div>

            <ul className="timeline-card__list">
              {previousExperience.responsibilities.map((responsibility) => (
                <li key={responsibility}>{responsibility}</li>
              ))}
            </ul>
          </article>
        </div>
      </motion.section>
    </motion.div>
  )
}

export default ExperiencePage
