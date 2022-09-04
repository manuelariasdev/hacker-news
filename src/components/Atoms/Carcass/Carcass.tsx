import * as React from 'react'

import { StyledCarcass } from './carcassStyle'

export type CarcassProps = React.CSSProperties;

export const Carcass = ({ height }: CarcassProps) => {
  return <StyledCarcass height={height} />
}


