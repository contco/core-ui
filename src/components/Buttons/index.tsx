/* eslint-disable no-unused-vars */
import React, { forwardRef, Ref, FC, SVGProps, ReactNode } from 'react'
import Flex from '../layout/Flex'
import styled from 'styled-components'
import { color, space, layout, flexbox } from 'styled-system'

type Props = {
  onClick?: () => void
  Icon?: React.FC<SVGProps<SVGSVGElement>>
  name?: string
  children?: ReactNode
}

const ButtonStyle = styled(Flex)`
  ${color};
  ${space};
  ${layout};
  ${flexbox};
  as: a;
  background-color: ${({ theme }) =>
    theme.colors !== undefined ? theme.colors.text : '#050b21'};
`

const Button: FC<any> = forwardRef(
  ({ Icon, name, children, ...props }: Props, ref: Ref<HTMLDivElement>) => (
    <ButtonStyle ref={ref} p={12} justifyContent='space-between' {...props}>
      {children}
    </ButtonStyle>
  )
)

export default Button
