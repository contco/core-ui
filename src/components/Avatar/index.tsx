import React, { useState, useRef, useLayoutEffect ,useEffect } from "react";
import styled from "styled-components";
import Box from '../layout/Box';
import Flex from '../layout/Flex';
import Text from "../Text/index";

import randomColors from './colors';
type Props = {
  image?: string;
  size?: string;
  title?: string;
  color?: string;
  active?: boolean;
  name?: string
};



const HoverContainer = styled(Box)`
  z-index: 1;
  position: absolute;
  min-width: ;
  width: ${props => props.width}px;
  visibility: hidden;
  top: 100%;
  left: 50%;
  margin-left: -${props => props.width / 2}px;
`;
const Triangle = styled.div`
  width: 0;
  height: 0;
  border: solid 8px;
  border-color: transparent transparent #050b21 transparent;
  margin: 0 auto;
`;

const Rectangle = styled(Box)`
  width: max-content;
  min-width: 10px;
  text-align:center;
  padding: 3px 5px;
  height: 20px;
  border-radius: 2px;
  background-color: #050b21;
  font-size: 8px;
  letter-spacing: 0.33px;
  color: #ffffff !important;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const AvatarComponent = styled(Flex) <any>`
  border-radius: 50%;
  border: ${(props) => (props.active ? '1px solid #3498db;' : 'none;')}
  height: 20px;
  width: 20px;
  &.lg {
    height: 70px;
    width: 70px;
  }
  &.md {
    height: 50px;
    width: 50px;
  }
`

const Wrapper = styled(Box)`
  &:hover ${HoverContainer} {
    visibility: visible;
  }
  position: relative;
  display: flex;
`;
const NameText = styled(Text)`
  font-size: 9px;
  &.md {
    font-size: 16px;
  }
  &.lg {
  font-size: 25px;
  }
`

const Avatar: React.FC<Props> = ({
  image = '',
  size = 'sm',
  title = '',
  color = '',
  name,
  active
}) => {
  const [width, setWidth] = useState<number>(0)
  const [randomColor, setRandomColor] = useState<string>('#555')
  const [userName, setUserName] = useState<string>('')
  const containerRef = useRef<HTMLDivElement>();

  const generateColor = (initials: string): string => {
    const charIndex = initials.charCodeAt(0) - 65;
    const colorIndex = charIndex % 19;
    return randomColors[colorIndex];
  };

  const generateInitials = (name: string): string => {
    const nameSplit = name.trim().split(' ');
    let initials = '';
    if (nameSplit.length === 1) {
      initials = nameSplit[0].charAt(0).toUpperCase()
    } else {
      initials =
        nameSplit[0].charAt(0).toUpperCase() +
        nameSplit[nameSplit.length - 1].charAt(0).toUpperCase()
    }
    return initials;
  }

  useEffect(() => {
    if (name) {
      const initials = generateInitials(name);
      const initialsColor = generateColor(initials);
      setRandomColor(initialsColor);
      setUserName(initials);
    }
  }, [name]);

  useLayoutEffect(() => {
    if (containerRef.current) {
      if (width !== containerRef.current.scrollWidth) {
        setWidth(containerRef.current.scrollWidth);
      }
    }
  });


  return (
    <Box>
      <Wrapper>
        {image ?
          <AvatarComponent active={active} className={size} as='img' alt="avatar" src={image} />
          : (
            <AvatarComponent
              className={size}
              active={active}
              bg={name ? randomColor : color}
              alignItems='center'
              justifyContent="center"
            >
              {userName !== "" ?
                <NameText className={size} color="#fff" fontWeight="bold">{userName}</NameText>
                : null}
            </AvatarComponent>
          )}
        {title ? (
          <HoverContainer width={width} key={title}>
            <Triangle />
            <Rectangle ref={containerRef}>{title}</Rectangle>
          </HoverContainer>
        ) : null}
      </Wrapper>
    </Box>
  )
}

export default Avatar