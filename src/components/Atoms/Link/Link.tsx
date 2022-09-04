import * as React from 'react'

import { StyledLink } from './linkStyle'

export interface LinkProps {
  children: React.ReactNode;
  href: string;
  disabled?: boolean
}

export const Link = ({ children, href, disabled = false }: LinkProps) => {
  return (
    <StyledLink target="_blank" href={href} rel="noopener noreferrer" disabled={disabled}>
      {children}
    </StyledLink>
  )
}


