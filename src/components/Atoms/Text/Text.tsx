import * as React from 'react'

import { StyledText } from './textStyle'
import type { Size } from '../../../types'

export interface TextProps {
  children: React.ReactNode;
  size?: Size;
  lineHeight?: Size;
}

export const Text = ({
  children,
  lineHeight = 'md',
  size = 'md'
}: TextProps) => {
  return (
    <StyledText lineHeight={lineHeight} size={size}>
      {children}
    </StyledText>
  )
}


