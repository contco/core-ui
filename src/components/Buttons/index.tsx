/* eslint-disable no-unused-vars */
import React, { forwardRef, Ref, FC, SVGProps, ReactNode } from 'react'
import Flex from '../layout/Flex'

type Props = {
  onClick?: () => void
  Icon?: React.FC<SVGProps<SVGSVGElement>>
  name?: string
  children?: ReactNode
}

const Button: FC<any> = forwardRef(
  ({ Icon, name, children, ...props }: Props, ref: Ref<HTMLDivElement>) => (
    <Flex
      ref={ref}
      as='a'
      p={12}
      bg='#050b21'
      justifyContent='space-between'
      {...props}
    >
      {children}
    </Flex>
  )
)

export default Button
