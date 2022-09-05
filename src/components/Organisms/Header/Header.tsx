import React from 'react'
import { defaultText } from '../../../utils/constants'
import { Title } from '../../Atoms/Title'
import { StyledHeader, StyledHeaderFlex } from './headerStyles'
export const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderFlex
        alignItems="center"
        justifyContent="space-between"
        margin="auto"
        maxWidth="1440px"
        width="100%"
      >
        <Title size="lg" font="secondary">
          {defaultText.tittle}
        </Title>
      </StyledHeaderFlex>
    </StyledHeader>
  )
}
