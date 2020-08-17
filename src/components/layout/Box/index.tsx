import React, { FC } from "react";
import styled from "styled-components";
import {
  color,
  ColorProps,
  space,
  SpaceProps,
  layout,
  LayoutProps,
} from "styled-system";

type BoxProps = ColorProps & SpaceProps & LayoutProps;

const Box = styled.div<BoxProps>`
  box-sizing: border-box;
  min-width: 0;
  ${space};
  ${color};
  ${layout};
`;

const BoxComponent: FC<any> = (props) => {
  return <Box {...props} />;
};

export default BoxComponent;
