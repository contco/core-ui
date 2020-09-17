import React, { ReactChild, ReactChildren } from 'react'
import Box from '../layout/Box'
import Flex from '../layout/Flex'
import styled from 'styled-components'


interface Props {
    isOpen: boolean;
    children: ReactChild | ReactChildren;
    onClose: (arg:boolean) => void
}  
const Modal: React.FC<Props> = ({ isOpen , children , onClose }) => {
   const Container = styled(Flex)`
      position: fixed; 
      z-index: 1; 
      left: 0;
      top: 0;
      width: 100%; 
      height: 100%; 
      overflow: hidden;
      background-color: rgb(0,0,0); 
      background-color: rgba(0,0,0,0.4);
   `;
   const Content = styled(Box)`
      background-color: white;
      margin: auto;
      padding: 20px;
      border-radius: 20px;
      width: 80%;
      overflow-y: auto;
      &::-webkit-scrollbar {
        display: none;
      }
   `;
    
    return (
      <Container justifyContent="center" display={!isOpen ? "none" : "flex"} onClick={()=>{onClose(!isOpen)}}>
        <Content maxHeight="600px" maxWidth="800px" onClick={()=>{onClose(isOpen)}}>
          {children}
        </Content>
      </Container>
    )
  }

export default Modal
