import React, { ReactChild, ReactChildren } from 'react'
import Box from '../layout/Box'
import styled from 'styled-components'


interface Props {
    isClosed: boolean;
    children: ReactChild | ReactChildren;
}  
const Modal: React.FC<Props> = ({ isClosed , children }) => {
   const Container = styled(Box)`
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    padding-top: 100px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
   `;
    
    
    return (
      <Container bg="yellow" display={isClosed ? "none" : "initial"}>
         {children}
      </Container>
    )
  }

export default Modal
