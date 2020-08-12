import React, { FC } from "react";
import styled from "styled-components";
import { color, ColorProps, typography, TypographyProps } from "styled-system";

type TextProps = ColorProps & TypographyProps;

const Text = styled.div<TextProps>`
  ${color};
  ${typography};
`;

const TextComponent: FC<any> = (props) => {
  return <Text {...props} />;
};

export default TextComponent;
