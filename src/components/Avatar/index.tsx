import React, { useState, useLayoutEffect } from "react";
import styled from "styled-components";
type Props = {
  image?: string;
  size?: string;
  title?: string;
  color?: string;
  active?: boolean;
};

type AvatarProps = {
  active?: boolean;
};
type HoverProps = {
  width?: number;
};



const HoverContainer = styled.div<HoverProps>`
  z-index: 1;
  position: absolute;
  min-width: ;
  width: ${props => props.width}px;
  visibility: hidden;
  top: 100%;
  left: 50%;
  margin-left: -${props => props.width && props.width/2}px;
`;
const Triangle = styled.div`
  width: 0;
  height: 0;
  border: solid 8px;
  border-color: transparent transparent #050b21 transparent;
  margin: 0 auto;
`;

const Rectangle = styled.div`
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

const Wrapper = styled.div`
  &:hover ${HoverContainer} {
    visibility: visible;
  }
  position: relative;
  display: flex;
`;
const AvatarImage = styled.div<AvatarProps>`
  border-radius: 50%;
  border: ${(props) => (props.active ? "1px solid #3498db;" : "none;")};
`;
const MediumAvatar = styled(AvatarImage)`
  height: 50px;
  width: 50px;
`;
const SmallAvatar = styled(AvatarImage)`
  height: 20px;
  width: 20px;
  background: ${(props) => (props.color ? props.color : "none")};
`;
const MmAvatar = styled(AvatarImage)`
  height: 50px;
  width: 50px;
  margin: 15px;
`;

const Avatar: React.FC<Props> = ({
  image = "",
  size = "sm",
  title = "",
  color = "",
  active,
  
}) => {

  const [width, setWidth] = useState(0);
  const containerRef = React.useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (containerRef.current) {
      if (width !== containerRef.current.scrollWidth) {
        setWidth(containerRef.current.scrollWidth);
      }
    }
  });

  if (size === "md") {
    return (
      <Wrapper >
        {image ? (
          <MediumAvatar active={active} as="img" src={image} />
        ) : (
            <MediumAvatar active={active} color={color} />
          )}
        {title ? (
          <HoverContainer>
            <Triangle></Triangle>
            <Rectangle>{title}</Rectangle>
          </HoverContainer>
        ) : (
            ""
          )}
      </Wrapper>
    );
  } else if (size === "mm") {
    return (
      <Wrapper>
        {image ? (
          <MmAvatar active={active} as="img" src={image} />
        ) : (
            <MmAvatar active={active} color={color} />
          )}
        {title ? (
          <HoverContainer>
            <Triangle></Triangle>
            <Rectangle>{title}</Rectangle>
          </HoverContainer>
        ) : (
            ""
          )}
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        {image ?
          <SmallAvatar active={active} as="img" src={image} />
          :
          <SmallAvatar active={active} color={color} />
        }
        {title ? (
          <HoverContainer width={width} key={title}>
            <Triangle></Triangle>
            <Rectangle ref={containerRef}>{title}</Rectangle>
          </HoverContainer>
        ) : null}
      </Wrapper>
    );
  }
};

export default Avatar;