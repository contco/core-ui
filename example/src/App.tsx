import React from 'react'
import { LoginButton, Input, Flex, Box, Text } from '@contco/core-ui'

const App = () => {
  return (
    <div>
      <Flex
        height='100vh'
        pt={5}
        justifyContent='center'
        alignItems='center'
        flexDirection='column'
      >
        <Text fontSize='30px'>LOGIN PAGE</Text>
        <Box mb={3}>
          <Input placeholder='Username' />
        </Box>
        <Box mb={3}>
          <Input placeholder='Password' type='password' />{' '}
        </Box>
        <LoginButton color='white'><Text mx="23px">LOGIN</Text></LoginButton>
        <Flex justifyContent='center' alignContent='center' flex={1} mt={4}>
          <Text>Hello there</Text>
        </Flex>
      </Flex>
    </div>
  )
}

export default App
