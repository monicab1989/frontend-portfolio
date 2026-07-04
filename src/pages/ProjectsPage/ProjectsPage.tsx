import { motion } from "framer-motion";

import screenshotForm from "../../assets/projects/saas-form-anon.svg";
import screenshotInvoices from "../../assets/projects/saas-invoices-anon.svg";
import ProjectCard from "../../components/home/ProjectCard/ProjectCard";
import SectionHeading from "../../components/home/SectionHeading/SectionHeading";
import { profile } from "../../data/profile";
import "./ProjectsPage.css";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const saasFeatures = [
  "Gestión de facturas",
  "Alta y edición de clientes",
  "Formularios complejos",
  "Validaciones",
  "Integración con APIs REST",
  "Navegación estructurada",
  "Diseño responsive",
  "Componentes reutilizables",
  "Gestión de estados y flujos de datos",
];

const saasChallenges = [
  "Diseño de interfaces complejas orientadas a productividad.",
  "Construcción de formularios avanzados con múltiples campos.",
  "Organización del frontend mediante componentes reutilizables.",
  "Integración frontend-backend mediante APIs REST.",
];

const saasLearnings = [
  "Organización escalable de una aplicación Next.js.",
  "Gestión de formularios complejos con TypeScript.",
  "Integración eficiente con APIs REST.",
  "Mejora de la experiencia de usuario en procesos administrativos.",
  "Desarrollo de una aplicación orientada a producto.",
];

const saasTechnologies = [
  "Next.js",
  "React",
  "TypeScript",
  "REST APIs",
  "GitHub",
  "HTML5",
  "CSS3",
];

const galleryItems = [
  {
    title: "Listado de facturas",
    description:
      "Vista de consulta con filtros, tabla estructurada y acceso rápido a operaciones.",
    src: screenshotInvoices,
    alt: "Vista anonimizada del listado de facturas de la aplicación SaaS",
  },
  {
    title: "Formulario de nueva factura",
    description:
      "Formulario complejo con datos administrativos, validaciones y estructura organizada.",
    src: screenshotForm,
    alt: "Vista anonimizada del formulario de creación de facturas de la aplicación SaaS",
  },
];

const saasProofPoints = [
  "Diseño de interfaces complejas",
  "Gestión de formularios avanzados",
  "Integración frontend-backend mediante APIs REST",
  "Organización de componentes reutilizables",
  "Gestión de datos y flujos de negocio",
  "Desarrollo de aplicaciones completas orientadas a producto",
];

function ProjectsPage() {
  const [, secondaryProject] = profile.projects;

  return (
    <motion.div
      className="page page--projects"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.08 } },
      }}
    >
      <motion.section variants={fadeUp} className="projects-section">
        <SectionHeading
          eyebrow="Proyectos"
          title="Proyecto principal"
          description="Proyecto destacado que demuestra experiencia práctica en desarrollo frontend con Next.js, React, TypeScript, APIs REST, formularios complejos y gestión de datos."
        />
      </motion.section>

      <motion.section variants={fadeUp} className="projects-section">
        <div className="project-detail">
          <header className="project-detail__header">
            <p className="project-detail__eyebrow">
              SaaS de Gestión y Facturación
            </p>
            <h2 className="project-detail__title">
              SaaS de Gestión y Facturación
            </h2>
            <p className="project-detail__description">
              Aplicación web desarrollada con Next.js, React y TypeScript para
              la gestión de clientes, facturación y operaciones administrativas,
              con foco en usabilidad, organización del frontend e integración
              con APIs REST.
            </p>
          </header>

          <div className="project-detail__grid">
            <section className="project-panel">
              <h3 className="project-panel__title">
                Funcionalidades principales
              </h3>
              <ul className="project-panel__list">
                {saasFeatures.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
            <section className="project-panel project-panel--compact">
              <h3 className="project-panel__title">Tecnologías utilizadas</h3>
              <div className="project-panel__tags">
                {saasTechnologies.map((item) => (
                  <span className="project-panel__tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </section>
          </div>

          <section
            className="project-gallery"
            aria-labelledby="saas-gallery-heading"
          >
            <div className="project-gallery__heading">
              <h3 id="saas-gallery-heading" className="project-panel__title">
                Galería de capturas
              </h3>
              <p className="project-gallery__note">
                Capturas anonimizadas para proteger emails, teléfonos, NIF/CIF y
                datos de clientes, manteniendo visibles los flujos principales
                de la aplicación.
              </p>
            </div>

            <div className="project-gallery__grid">
              {galleryItems.map((item) => (
                <figure className="project-shot" key={item.title}>
                  <img
                    className="project-shot__image"
                    src={item.src}
                    alt={item.alt}
                  />
                  <figcaption className="project-shot__caption">
                    <strong>{item.title}</strong>
                    <span>{item.description}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          <div className="project-detail__grid">
            <section className="project-panel">
              <h3 className="project-panel__title">Retos técnicos resueltos</h3>
              <ul className="project-panel__list">
                {saasChallenges.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="project-panel">
              <h3 className="project-panel__title">Aprendizajes obtenidos</h3>
              <ul className="project-panel__list">
                {saasLearnings.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          </div>

          <section className="project-proof">
            <h3 className="project-panel__title">Experiencia que demuestra</h3>
            <div className="project-proof__items">
              {saasProofPoints.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </section>
        </div>
      </motion.section>

      <motion.section
        variants={fadeUp}
        className="projects-section projects-section--secondary"
      >
        <SectionHeading
          eyebrow="Proyecto adicional"
          title="Base formativa aplicada"
          description="Proyecto secundario que refuerza la base técnica previa con React, maquetación responsive y APIs REST."
        />

        <div className="projects-secondary-card">
          <ProjectCard
            title={secondaryProject.title}
            period={secondaryProject.period}
            eyebrow={secondaryProject.eyebrow}
            description={secondaryProject.description}
            highlights={secondaryProject.highlights}
            stack={secondaryProject.stack}
          />
        </div>
      </motion.section>
    </motion.div>
  );
}

export default ProjectsPage;
