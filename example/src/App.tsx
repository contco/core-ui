import React from 'react'

import { ExampleComponent, Box, Flex, Text } from '@contco/core-ui'
import '@contco/core-ui/dist/index.css'

const App = () => {
  return (
    <>
      <ExampleComponent text="Create React Library Example 😄" />
      <Box m={50}>Hello</Box>
      <Flex p={30}>World</Flex>
      <Text color={"red"}>Welcome to this library</Text>
    </>

  )}

export default App
