import React from 'react'
import styled from 'styled-components'

type Props = {
  image?: string
  size?: string
  title?: string
  color?: string
  active?: boolean
}

type AvatarProps = {
  active?: boolean
}

const HoverContainer = styled.div`
  position: absolute;
  width: max-content;
  margin-top: 20px;
  display: none;
`
const Triangle = styled.div`
  width: 0;
  height: 0;
  border: solid 8px;
  border-color: transparent transparent #050b21 transparent;
  margin: 0 auto;
`

const Rectangle = styled.div`
  width: max-content;
  padding: 0px 5px;
  height: 20px;
  border-radius: 2px;
  background-color: #050b21;
  font-size: 8px;
  letter-spacing: 0.33px;
  color: #ffffff !important;
  align-items: center;
  justify-content: center;
  display: flex;
`

const Wrapper = styled.div`
  &:hover ${HoverContainer} {
    display: initial;
  }
  display: flex;
`
const AvatarImage = styled.div<AvatarProps>`
  border-radius: 50%;
  border: ${(props) => (props.active ? '1px solid #3498db;' : 'none;')};
`
const MediumAvatar = styled(AvatarImage)`
  height: 50px;
  width: 50px;
`
const SmallAvatar = styled(AvatarImage)`
  height: 20px;
  width: 20px;
  background: ${(props) => (props.color ? props.color : 'none')};
`
const MmAvatar = styled(AvatarImage)`
  height: 50px;
  width: 50px;
  margin: 15px;
`

const Avatar: React.FC<Props> = ({
  image = '',
  size = 'sm',
  title = '',
  color = '',
  active
}) => {
  if (size === 'md') {
    return (
      <Wrapper>
        {image ? (
          <MediumAvatar active={active} as='img' src={image} />
        ) : (
          <MediumAvatar active={active} color={color} />
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
          <MmAvatar active={active} as='img' src={image} />
        ) : (
          <MmAvatar active={active} color={color} />
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
          <SmallAvatar active={active} as='img' src={image} />
        ) : (
          <SmallAvatar active={active} color={color} />
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
