/* eslint-disable no-unused-vars */
import React, { FC, forwardRef, Ref } from 'react'
import styled from 'styled-components'
import { color, ColorProps, typography, TypographyProps } from 'styled-system'

type HeadingProps = ColorProps & TypographyProps

const Heading = styled.div<HeadingProps>`
  ${color};
  ${typography};
  as='p'
  {...props}
`

const HeadingComponent: FC<any> = forwardRef(
  (props: any, ref: Ref<HTMLDivElement>) => (
    <Heading
      ref={ref}
      color={(theme: { colors: { text: String } }) =>
        theme.colors !== undefined ? theme.colors.text : '#050b21'
      }
      fontSize='36px'
      fontWeight='bold'
      textAlign='justify'
      {...props}
    />
  )
)

export default HeadingComponent
