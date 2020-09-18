import React, { ReactChild, ReactChildren, MutableRefObject, useEffect } from 'react'
import Box from '../layout/Box'
import Flex from '../layout/Flex'
import styled from 'styled-components'


interface Props {
    isOpen: boolean;
    children: ReactChild | ReactChildren;
    onClose: (arg:boolean) => void
}  
const Modal: React.FC<Props> = ({ isOpen , children , onClose }) => {
  const containerRef = React.useRef() as MutableRefObject<HTMLDivElement>;

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
      overflow-y: auto;
      &::-webkit-scrollbar {
        display: none;
      }
   `;

    useEffect(() => {
      document.addEventListener("mousedown", handleClick);

      return () => {
        document.removeEventListener("mousedown", handleClick);
      };
    }, []);

    const handleClick = (e:any) => {
      if (containerRef.current.contains(e.target)) {
        //inside
        return;
      }
      // outside click
       onClose(!isOpen); 
    };
    return (
      <Container  justifyContent="center" display={!isOpen ? "none" : "flex"} onClick={(e:any)=>handleClick(e)}>
        <Content ref={containerRef} maxHeight="600px" maxWidth="800px" minWidth="400px">
          {children}
        </Content>
      </Container>
    )
  }

export default Modal
