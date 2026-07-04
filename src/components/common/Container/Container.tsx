import type { HTMLAttributes } from 'react'

import { classNames } from '../../../utils/classNames'
import './Container.css'

type ContainerProps = HTMLAttributes<HTMLDivElement>

function Container({ className, ...props }: ContainerProps) {
  return <div className={classNames('container', className)} {...props} />
}

export default Container
