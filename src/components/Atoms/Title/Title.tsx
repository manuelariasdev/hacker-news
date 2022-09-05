import React from 'react'
import { StyledTitle } from './titleStyles'
import type { Font, Size } from '../../../types'

export interface TitleProps {
    size?: Size;
    font?: Font;
    children?: React.ReactNode;
  }

export const Title = ({ children, font = 'primary', size = 'md' }: TitleProps) => {
  return (
    <StyledTitle font={font} size={size}>
      {children}
    </StyledTitle>
  )
}
