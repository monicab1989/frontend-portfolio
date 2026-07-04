import { motion } from 'framer-motion'
import {
  FaCodeBranch,
  FaGithub,
  FaLinkedinIn,
  FaMobileScreenButton,
  FaReact,
} from 'react-icons/fa6'
import { SiCss, SiGit, SiHtml5, SiJavascript, SiRedux, SiTypescript } from 'react-icons/si'

import profilePhoto from '../../assets/fotoPerfil.png'
import ActionButton from '../../components/home/ActionButton/ActionButton'
import ContactCTA from '../../components/home/ContactCTA/ContactCTA'
import ProjectCard from '../../components/home/ProjectCard/ProjectCard'
import SectionHeading from '../../components/home/SectionHeading/SectionHeading'
import SocialLink from '../../components/home/SocialLink/SocialLink'
import TechCard from '../../components/home/TechCard/TechCard'
import { profile } from '../../data/profile'
import './HomePage.css'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

const credibilityItems = [
  'Experiencia profesional desde 2022',
  'React · TypeScript · REST APIs',
  'Aplicaciones web y móviles',
  'Trabajo en entornos colaborativos',
]

const techCards = [
  {
    title: 'React',
    description: 'Desarrollo de interfaces modernas y componentes reutilizables con foco en producto.',
    Icon: FaReact,
  },
  {
    title: 'TypeScript',
    description: 'Tipado sólido para construir código más mantenible, claro y escalable.',
    Icon: SiTypescript,
  },
  {
    title: 'JavaScript',
    description: 'Base del trabajo diario en interfaces, lógica de UI y conexión con servicios.',
    Icon: SiJavascript,
  },
  {
    title: 'React Native',
    description: 'Experiencia en aplicaciones móviles dentro del ecosistema React.',
    Icon: FaMobileScreenButton,
  },
  {
    title: 'REST APIs',
    description: 'Integración de servicios y datos para construir flujos funcionales y escalables.',
    Icon: FaCodeBranch,
  },
  {
    title: 'Redux',
    description: 'Gestión de estado para aplicaciones con lógica frontend más estructurada.',
    Icon: SiRedux,
  },
  {
    title: 'HTML5',
    description: 'Estructura semántica y base sólida para interfaces accesibles y mantenibles.',
    Icon: SiHtml5,
  },
  {
    title: 'CSS3 / SCSS',
    description: 'Maquetación responsive y consistencia visual entre pantallas y dispositivos.',
    Icon: SiCss,
  },
  {
    title: 'Git',
    description: 'Control de versiones y colaboración continua dentro de equipos técnicos.',
    Icon: SiGit,
  },
]

function HomePage() {
  const featuredProject = profile.projects[0]

  return (
    <motion.div
      className="home-page"
      initial="hidden"
      animate="visible"
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
    >
      <motion.section className="home-hero" variants={fadeUp} transition={{ duration: 0.55 }}>
        <div className="home-hero__content">
          <p className="home-hero__eyebrow">Portfolio Frontend</p>
          <h1 className="home-hero__title">{profile.name}</h1>
          <p className="home-hero__role">{profile.role.es}</p>
          <p className="home-hero__description">
            Frontend Developer con experiencia profesional desde 2022 desarrollando aplicaciones
            web y móviles con React, TypeScript y JavaScript. Trabajo con foco en interfaces
            responsive, integración de APIs REST y soluciones mantenibles alineadas con negocio.
          </p>

          <ul className="home-hero__credibility" aria-label="Puntos clave del perfil">
            {credibilityItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="home-hero__actions" aria-label="Acciones principales">
            <ActionButton to="/projects" variant="primary">
              Ver proyectos
            </ActionButton>
            <ActionButton to="/contact" variant="secondary">
              Contactar
            </ActionButton>
          </div>

          <div className="home-hero__social" aria-label="Redes profesionales">
            <SocialLink href={profile.contact.github} label="GitHub" Icon={FaGithub} />
            <SocialLink href={profile.contact.linkedin} label="LinkedIn" Icon={FaLinkedinIn} />
          </div>
        </div>

        <motion.aside className="home-hero__panel" variants={fadeUp} transition={{ duration: 0.55 }}>
          <div className="home-hero__photo-frame">
            <img
              className="home-hero__photo"
              src={profilePhoto}
              alt="Retrato profesional de Mónica Bartolomé González"
            />
          </div>

          <div className="home-hero__panel-card">
            <p className="home-hero__panel-eyebrow">Stack prioritario</p>
            <ul className="home-hero__focus-list">
              {profile.focus.slice(0, 5).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </motion.aside>
      </motion.section>

      <motion.section
        className="home-section home-section--about"
        aria-labelledby="about-heading"
        variants={fadeUp}
        transition={{ duration: 0.5 }}
      >
        <SectionHeading
          id="about-heading"
          eyebrow="Perfil"
          title="Frontend orientado a producto y mantenimiento evolutivo"
          description="Experiencia profesional en desarrollo de interfaces, evolución de funcionalidades y colaboración con equipos multidisciplinares."
        />

        <div className="home-about">
          <p className="home-about__text">{profile.overview.es}</p>
          <ul className="home-about__points" aria-label="Fortalezas profesionales">
            <li>Desarrollo frontend con foco en React, TypeScript y experiencia de usuario.</li>
            <li>Trabajo sobre productos digitales en evolución, con contexto técnico y funcional.</li>
            <li>Capacidad para colaborar, adaptarme y construir soluciones claras y mantenibles.</li>
          </ul>
        </div>
      </motion.section>

      <motion.section
        className="home-section"
        aria-labelledby="tech-heading"
        variants={fadeUp}
        transition={{ duration: 0.5 }}
      >
        <SectionHeading
          id="tech-heading"
          eyebrow="Tecnologías"
          title="Stack destacado"
          description="Tecnologías que mejor representan mi posicionamiento actual como Frontend Developer."
        />

        <div className="home-tech-grid">
          {techCards.map((tech) => (
            <TechCard key={tech.title} {...tech} />
          ))}
        </div>
      </motion.section>

      <motion.section
        className="home-section"
        aria-labelledby="projects-heading"
        variants={fadeUp}
        transition={{ duration: 0.5 }}
      >
        <SectionHeading
          id="projects-heading"
          eyebrow="Proyectos"
          title="Proyecto destacado"
          description="Selección del proyecto que mejor encaja con mi posicionamiento actual en frontend y contexto de negocio."
        />

        <ProjectCard
          title={featuredProject.title}
          period={featuredProject.period}
          eyebrow={featuredProject.eyebrow}
          description={featuredProject.description}
          highlights={featuredProject.highlights}
          stack={featuredProject.stack}
          featured
        />
      </motion.section>

      <motion.section
        className="home-section home-section--contact"
        aria-labelledby="contact-heading"
        variants={fadeUp}
        transition={{ duration: 0.5 }}
      >
        <ContactCTA
          title="¿Hablamos de tu próximo proyecto?"
          description="Si buscas una desarrolladora frontend con experiencia real en React, TypeScript y productos digitales, podemos hablar."
          email={profile.contact.email}
        />
      </motion.section>
    </motion.div>
  )
}

export default HomePage
