import React from 'react'
import Login from './components/Login'
import { Flex, Box } from '@contco/core-ui'
import Sidebar from './components/Sidebar'

const App = () => {
  return (
    <Flex>
      <Sidebar
        name='hello this world'
        profilePicture='https://randomuser.me/api/portraits/men/11.jpg'
      />
      <Box mx={200}>
        <Login />
      </Box>
    </Flex>
  )
}

export default App
