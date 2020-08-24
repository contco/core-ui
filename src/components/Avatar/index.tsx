import React from 'react'
import styled from 'styled-components'
import Box from '../layout/Box'
import Flex from '../layout/Flex'

type Props = {
  image?: string
  size?: string
  title?: string
  color?: string
  active?: boolean
  name?: string
}

const HoverContainer = styled(Box)`
  position: absolute;
  width: max-content;
  margin-top: 20px;
  display: none;
`

const Rectangle = styled(Flex)`
  padding: 0px 5px;
  height: 20px;
  border-radius: 2px;
  background-color: #050b21;
  font-size: 8px;
  letter-spacing: 0.33px;
  color: #ffffff !important;
  align-items: center;
`

const Triangle = styled(Box)`
  width: 0;
  height: 0;
  border: solid 8px;
  border-color: transparent transparent #050b21 transparent;
  margin: 0 auto;
`

const Wrapper = styled(Flex)`
  &:hover ${HoverContainer} {
    display: initial;
  }
`
const AvatarComponent = styled(Box)<any>`
  border-radius: 50%;
  border: ${(props) => (props.active ? '1px solid #3498db;' : 'none;')};
`

const Avatar: React.FC<Props> = ({
  image = '',
  size = 'sm',
  title = '',
  color = '',
  name = 'John Doe',
  active
}) => {
  const nameSplit = name.split(' ')
  const initials =
    nameSplit[0].charAt(0).toUpperCase() + nameSplit[1].charAt(0).toUpperCase()

  if (size === 'md') {
    return (
      <Wrapper>
        {image ? (
          <AvatarComponent height={50} width={50} as='img' src={image} />
        ) : (
          <AvatarComponent
            height={50}
            width={50}
            active={active}
            bg='orange'
            color={color}
            alignItems='center'
          >
            <Flex justifyContent='center' mt={15}>
              {initials}
            </Flex>
          </AvatarComponent>
        )}
        {title ? (
          <HoverContainer>
            <Triangle />
            <Rectangle>{title}</Rectangle>
          </HoverContainer>
        ) : (
          ''
        )}
      </Wrapper>
    )
  } else if (size === 'mm') {
    return (
      <Wrapper>
        {image ? (
          <AvatarComponent height={50} width={50} m={15} as='img' src={image} />
        ) : (
          <AvatarComponent
            height={50}
            width={50}
            m={15}
            bg='orange'
            active={active}
            color={color}
          >
            <Flex justifyContent='center' mt={15}>
              {initials}
            </Flex>
          </AvatarComponent>
        )}
        {title ? (
          <HoverContainer>
            <Triangle />
            <Rectangle>{title}</Rectangle>
          </HoverContainer>
        ) : (
          ''
        )}
      </Wrapper>
    )
  } else {
    return (
      <Wrapper>
        {image ? (
          <AvatarComponent height={20} width={20} as='img' src={image} />
        ) : (
          <AvatarComponent
            height={20}
            width={20}
            active={active}
            color={color}
            bg='orange'
          >
            <Flex justifyContent='center' mt={1} style={{ fontSize: '8px' }}>
              {initials}
            </Flex>
          </AvatarComponent>
        )}
        {title ? (
          <HoverContainer>
            <Triangle />
            <Rectangle>{title}</Rectangle>
          </HoverContainer>
        ) : (
          ''
        )}
      </Wrapper>
    )
  }
}

export default Avatar
