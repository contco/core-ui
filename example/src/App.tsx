import React from 'react'
import { ExampleComponent, Box, Flex, Text, OvalButton, Input} from '@contco/core-ui'
import { ReactComponent as Sun } from './dark-light-mode-icon.svg'
import '@contco/core-ui/dist/index.css'



const App = () => {
  return (
    <>
      <ExampleComponent text="Create React Library Example 😄" />
      <Box m={50}>Hello</Box>
      <Flex p={30}>World</Flex>
      <Text color={"red"}>Welcome to this library</Text>
      <OvalButton Icon={Sun}></OvalButton>
      <Input placeholder="First Name"></Input>
      
    </>

  )}

export default App
