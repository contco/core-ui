import React, { FC } from "react";
import styled from "styled-components";
import {
  color,
  ColorProps,
  space,
  SpaceProps,
  layout,
  LayoutProps,
  flexbox,
  FlexProps,
} from "styled-system";

type FlexBoxProps = ColorProps & SpaceProps & LayoutProps & FlexProps;

const Flex = styled.div<FlexBoxProps>`
  boxsizing: "border-box";
  minwidth: 0;
  display: flex;
  ${color};
  ${space};
  ${layout};
  ${flexbox};
`;

const FlexComponent: FC<any> = (props) => {
  return <Flex {...props} />;
};

export default FlexComponent;
