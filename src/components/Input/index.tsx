/* eslint-disable no-unused-vars */
import React, { FC, forwardRef, Ref } from 'react'
import Box from '../layout/Box'

const Input: FC<any> = forwardRef((props: any, ref: Ref<HTMLDivElement>) => (
  <Box
    ref={ref}
    as='input'
    height='50px'
    width='300px'
    bg='white'
    m='20px'
    {...props}
  />
))

export default Input

// const Input1 = styled.input`
//   height: 50px;
//   width: 300px;
//   background-color: white;
//   margin: 20px;
//   border: none;
// `
