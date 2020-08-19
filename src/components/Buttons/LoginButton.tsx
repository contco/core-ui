/* eslint-disable no-unused-vars */
import React, { forwardRef, Ref, FC } from 'react'
import Flex from '../layout/Flex'

const Button: FC<any> = forwardRef((props: any, ref: Ref<HTMLDivElement>) => (
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
  />
))

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
