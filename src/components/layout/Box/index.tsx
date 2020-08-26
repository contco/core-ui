/* eslint-disable no-unused-vars */
import React, { forwardRef, Ref } from 'react'
import styled from 'styled-components'
import {
  color,
  ColorProps,
  space,
  SpaceProps,
  layout,
  LayoutProps
} from 'styled-system'

type BoxProps = ColorProps & SpaceProps & LayoutProps

const Box = styled.div<BoxProps>`
  box-sizing: border-box;
  min-width: 0;
  ${space};
  ${color};
  ${layout};
`

const BoxComponent = forwardRef((props: any, ref: Ref<HTMLDivElement>) => (
  <Box ref={ref} {...props} />
))

export default BoxComponent
