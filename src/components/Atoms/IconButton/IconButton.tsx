import React from 'react'

import { StyledIconCircleButton, StyledIconSquareButton } from './IbuttonStyles'

export interface PropsIconButton {
    isData?: string;
    active?: boolean;
    children: React.ReactNode;
    onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    shape?: 'circle' | 'square';
  }

export const IconButton = ({
    active,
    children,
    isData: data,
    disabled,
    onClick,
    shape
  }: PropsIconButton) => {
    if (shape === 'circle') {
  return (
    <StyledIconCircleButton
        data-circle={data}
        active={active}
        onClick={onClick}
        type="button"
        disabled={disabled}
      >
        {children}
    </StyledIconCircleButton>
  )
    }
  return (
    <StyledIconSquareButton
      data-square={data}
      active={active}
      onClick={onClick}
      type="button"
      disabled={disabled}
    >
      {children}
    </StyledIconSquareButton>
  )
}
