/* eslint-disable no-unused-vars */
import React, {
  ReactChild,
  ReactChildren,
  MutableRefObject,
  useEffect
} from 'react'
import Box from '../layout/Box'
import Flex from '../layout/Flex'
import styled from 'styled-components'


const Container = styled(Flex)`
position: fixed;
z-index: 1;
left: 0;
top: 0;
width: 100%;
height: 100%;
overflow: hidden;
background-color: rgba(0,0,0,0.4);
`;
const Content = styled(Box)`
background-color: white;
margin: auto;
border-radius: 20px;
overflow-y: auto;
&::-webkit-scrollbar {
  display: none;
}
`;

interface Props {
  isOpen: boolean
  children: ReactChild | ReactChildren
  onClose: (arg: boolean) => void
}
const Modal: React.FC<Props> = ({ isOpen, children, onClose }) => {
  const containerRef = React.useRef() as MutableRefObject<HTMLDivElement>

  useEffect(() => {
    document.addEventListener('mousedown', handleClick)

    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLElement> | MouseEvent) => {
    if (!containerRef.current.contains(e.target as Node)) {
      onClose(false)
    }
  }
  return (
    <Container justifyContent="center" display={!isOpen ? "none" : "flex"} onClick={handleClick}>
      <Content ref={containerRef}>
        {children}
      </Content>
    </Container >
  )
}

export default Modal
