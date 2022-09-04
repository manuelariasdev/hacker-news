import * as React from 'react'


import { Icon, Text } from '../../Atoms'
import { Flex } from '..'

import {
  StyledDropDown,
  StyledDropDownBtn,
} from './dropdownStyles'
import type { Direction } from '../../../types'

export interface DropDownProps {
  items: Array<{
    name: string;
  }>;
  positionTopMenu?: string;
  positionLeftMenu?: string;
  scrollDirection?: Direction;
  scrolledToTop?: boolean;
}


export const DropDown = ({
  scrollDirection,
  scrolledToTop
}: DropDownProps) => {
  
  return (
    <StyledDropDown
      scrollDirection={scrollDirection}
      scrolledToTop={scrolledToTop}
    >
      <StyledDropDownBtn
        data-cy="dropdown-button"
        type="button"
      >
        <Flex justifyContent="space-between">
          <Flex alignItems="center" columnGap="4px">
            <Icon width={24} heigth={24} name={'angular'} />
            <Text size="sm" lineHeight="lg">
              {"text"}
            </Text>
          </Flex>
          <Icon name="arrowDown" />
        </Flex>
      </StyledDropDownBtn>
    </StyledDropDown>
  )
}

export default React.memo(DropDown)
