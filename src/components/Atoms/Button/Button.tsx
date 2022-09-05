/* eslint-disable react/display-name */
import * as React from 'react'

import { StyledButton } from './buttonStyle'

export interface ButtonProps {
  active?: boolean;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

export const Button = React.memo(({ active, children, disabled, onClick }: ButtonProps) => {
  return (
    <StyledButton
      active={active}
      onClick={onClick}
      type="button"
      disabled={disabled}
    >
      {children}
    </StyledButton>
  )
})


