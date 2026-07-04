import type { IconType } from 'react-icons'

import './SocialLink.css'

type SocialLinkProps = {
  href: string
  label: string
  Icon: IconType
}

function SocialLink({ href, label, Icon }: SocialLinkProps) {
  return (
    <a className="social-link" href={href} target="_blank" rel="noreferrer noopener">
      <Icon aria-hidden="true" focusable="false" />
      <span>{label}</span>
    </a>
  )
}

export default SocialLink
