import { motion } from 'framer-motion'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'

import ContactCTA from '../../components/home/ContactCTA/ContactCTA'
import SectionHeading from '../../components/home/SectionHeading/SectionHeading'
import SocialLink from '../../components/home/SocialLink/SocialLink'
import { profile } from '../../data/profile'
import './ContactPage.css'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

function ContactPage() {
  return (
    <motion.div
      className="page page--contact"
      initial="hidden"
      animate="visible"
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
    >
      <motion.section variants={fadeUp}>
        <SectionHeading
          eyebrow="Contacto"
          title="Hablemos"
          description="Canales directos de contacto extraídos del CV y preparados para una futura ampliación."
        />
        <ContactCTA
          title="Escríbeme si buscas una desarrolladora frontend"
          description="Puedes contactarme por email o revisar mis perfiles profesionales."
          email={profile.contact.email}
        />
      </motion.section>

      <motion.section variants={fadeUp}>
        <div className="contact-links">
          <SocialLink href={profile.contact.github} label="GitHub" Icon={FaGithub} />
          <SocialLink href={profile.contact.linkedin} label="LinkedIn" Icon={FaLinkedinIn} />
        </div>
      </motion.section>
    </motion.div>
  )
}

export default ContactPage
