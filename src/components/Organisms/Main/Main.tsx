import * as React from 'react'

import {
  Button,
  Icon,
  IconButton,
  Carcass,
  Spinner,
  Text
} from '../../Atoms'
import { DropDown, Flex, List } from '../../Molecules'
import { defaultItems, views } from '../../../utils/constants'
import { StyledArrowBtnWrapper, StyledContainer, StyledFilterFlex, StyledMain } from './mainStyles'


export const Main = () => {


  return (
    <StyledMain>
      <StyledContainer>
        <StyledFilterFlex
          justifyContent="center"
        >
          {views.map((view) => (
            <Button
              key={view}
            >
              {view}
            </Button>
          ))}
        </StyledFilterFlex>

        <DropDown
          items={[{ name: 'Select your news' }, ...defaultItems]}
          positionTopMenu="308px"
          positionLeftMenu="145px"
        />
          <>
            <List dataLi="hits">
                  <div >
                    <Carcass height="90px" />
                  </div>
            </List>
                <StyledArrowBtnWrapper>
                  <IconButton
                    active
                    shape="circle"
                    onClick={() =>
                      window.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: 'smooth'
                      })
                    }
                  >
                    <Icon name="arrowUp" />
                  </IconButton>
                </StyledArrowBtnWrapper>
         

            <div>
              <Flex justifyContent="center" columnGap="4px">
                  <>
                    <Text size="sm">Loading</Text>
                    <Spinner />
                  </>
                    
              </Flex>
            </div>
          </>
      </StyledContainer>
    </StyledMain>
  )
}


