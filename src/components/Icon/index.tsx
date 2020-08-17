import React, { FC, SVGProps } from "react";
import styled from "styled-components";


type Props = {
  svg: FC<SVGProps<SVGSVGElement>>;
  color?: string;
  className?: string;
};

const IconStyle = styled.svg`
  & use {
    //fill: ${props => props.theme.colors.icon} ;
  }
`;

const IconComponent: FC<Props> = ({ svg, color = "#000", className }) => {
  return <IconStyle as={svg} color={color} className={className} />;
}


export default IconComponent;