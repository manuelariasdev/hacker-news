import * as React from 'react'

import { StyledList } from './listStyle'

interface ListProps {
  children: React.ReactNode;
  dataLi?: string;
}

export const List = React.memo(({ children, dataLi = 'list' }: ListProps) => {
  return <StyledList data-li={dataLi}>{children}</StyledList>
})


