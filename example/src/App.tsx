import React from 'react'
import { LoginButton, Input, Flex, Box, Text } from '@contco/core-ui'

const App = () => {
  return (
    <div>
      <Flex
        height='100vh'
        justifyContent='center'
        alignItems='center'
        flexDirection='column'
      >
        <Text mb={4} fontSize={30}>LOGIN PAGE</Text>
        <Box mb={3}>
          <Input placeholder='Username' />
        </Box>
        <Box mb={3}>
          <Input placeholder='Password' type='password' />{' '}
        </Box>
        <LoginButton color='white' style={{cursor: 'pointer'}}>
          <Text mx={23}>LOGIN</Text>
        </LoginButton>
      </Flex>
    </div>
  )
}

export default App
