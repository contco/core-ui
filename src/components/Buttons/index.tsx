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
      px='22px'
      py='16px'
      width='100px'
      height='20px'
      bg='#050b21'
      justifyContent='space-between'
      {...props}
    >
      {children}
    </Flex>
  )
)

// const Button1 = styled.a`
//   padding: 16px 22px;
//   margin: 0.5rem 0rem;
//   width: 13rem;
//   background: transparent;
//   height: 50px;
//   width: 100px;
//   background-color: #050b21;
//   border-radius: 3px;
//   justifycontent: 'space-between';
// `

export default Button
