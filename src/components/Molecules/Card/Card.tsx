import * as React from 'react'

import { Icon, IconButton, Link, Text } from '../../Atoms'
import { Flex } from '../Flex'
import { StyledCard } from './cardStyle'
import type { Hit } from '../../../types'

export interface CardProps {
  data: Hit;
  dataCard: string;
}

export const Card = React.memo(({ data, dataCard }: CardProps) => {

  return (
    <StyledCard
      data-card={dataCard}
      disabled={
        !data.author || !data.created_at || !data.story_title || !data.story_url
      }
    >
      <Flex justifyContent="space-between" height="90px">
        <Link
          href={data.story_url ?? ''}
          disabled={
            !data.author ||
            !data.created_at ||
            !data.story_title ||
            !data.story_url
          }
        >
          <Flex flexDirection="column" padding="14px 16px 14px 26px">
            <Flex columnGap="8px">
              <Icon name="time" />
              <Text size="xs">
                Algo aqui
              </Text>
            </Flex>
            <main>
              <Text size="sm" lineHeight="lg">
                {data.story_title ?? '---'}
              </Text>
            </main>
          </Flex>
        </Link>

        <Flex
          padding="0px 22px"
          alignItems="center"
          borderTopRightRadius="6px"
          borderBottomRightRadius="6px"
          smoked
        >
          {!data.is_fav
            ? (
            <IconButton
              disabled={
                !data.author ||
                !data.created_at ||
                !data.story_title ||
                !data.story_url
              }
              shape="circle"
            >
              <Icon name="favoriteOutlined" />
            </IconButton>
              )
            : (
            <IconButton
              shape="circle"
            >
              <Icon name="favoriteFilled" />
            </IconButton>
              )}
        </Flex>
      </Flex>
    </StyledCard>
  )
})

