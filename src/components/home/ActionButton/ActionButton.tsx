import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import { Link } from 'react-router-dom'

import { classNames } from '../../../utils/classNames'
import './ActionButton.css'

type ActionButtonProps =
  | (AnchorHTMLAttributes<HTMLAnchorElement> & {
      href?: string
      to?: string
      as?: 'a'
      variant?: 'primary' | 'secondary'
    })
  | (ButtonHTMLAttributes<HTMLButtonElement> & {
      as: 'button'
      variant?: 'primary' | 'secondary'
    })

function ActionButton(props: ActionButtonProps) {
  const { as = 'a', variant = 'primary', className, ...rest } = props

  if (as === 'button') {
    const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>

    return (
      <button
        type={buttonProps.type ?? 'button'}
        className={classNames('action-button', `action-button--${variant}`, className)}
        {...buttonProps}
      />
    )
  }

  const linkProps = rest as AnchorHTMLAttributes<HTMLAnchorElement> & {
    to?: string
    href?: string
  }

  if (linkProps.to) {
    const { to, ...anchorLikeProps } = linkProps

    return (
      <Link className={classNames('action-button', `action-button--${variant}`, className)} to={to}>
        {anchorLikeProps.children}
      </Link>
    )
  }

  return (
    <a
      className={classNames('action-button', `action-button--${variant}`, className)}
      {...linkProps}
    />
  )
}

export default ActionButton
