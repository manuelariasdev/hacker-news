import * as React from 'react'

import { StyledEnsign } from './ensignStyles'

interface BadgeProps {
  children: React.ReactNode;
}

export const Ensign = ({ children }: BadgeProps) => {
  return <StyledEnsign>{children}</StyledEnsign>
}


