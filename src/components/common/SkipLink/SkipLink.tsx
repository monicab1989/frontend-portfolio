import type { AnchorHTMLAttributes } from 'react'

import { classNames } from '../../../utils/classNames'
import './SkipLink.css'

type SkipLinkProps = AnchorHTMLAttributes<HTMLAnchorElement>

function SkipLink({ className, ...props }: SkipLinkProps) {
  return <a className={classNames('skip-link', className)} {...props} />
}

export default SkipLink
