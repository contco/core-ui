import React, {useState} from 'react'
import Login from './components/Login'
import { Flex, Box, Avatar, Text , Modal , Button} from '@contco/core-ui'
import Sidebar from './components/Sidebar'

const App = () => {
  const [isClosed, setIsClosed] = useState(true)
  return (
    <Flex>
      <Sidebar
        name='hello this world'
        profilePicture='https://randomuser.me/api/portraits/men/11.jpg'
      />
      <Box mx={200}>
        <Login />
      </Box>
      <Box my={10} pt={10}>
        <Text fontSize={25} fontWeight="bold" textAlign="center">Avatars </Text>
        <Flex mt={20}>
          <Avatar
            color="pink"
            title="Pink"
          />
          <Avatar
            size="md"
            color="green"
            title="Green Color"
          />
          <Avatar
            size="lg"
            color="Purple"
            title="Purple Color"
          />
          <Avatar
            name="Marcus Rashford"
          />
          <Avatar
            size="md"
            name='Gareth Bale'
            title='Gareth Bale'
          />
          <Avatar
            size="lg"
            name='Sergio Ramos'
            title='Sergio Ramos'
          />
          <Avatar
            name='hello this world'
            title='hello to this world'
            image='https://randomuser.me/api/portraits/men/12.jpg'
          />
          <Avatar
            size="md"
            name='this is hello'
            title='hello to this world'
            image='https://randomuser.me/api/portraits/men/15.jpg'
          />
          <Avatar
            size="lg"
            image='https://randomuser.me/api/portraits/men/24.jpg'
            title="Fahad Mahmood"
          />
        </Flex>
        <Button onClick={()=>{setIsClosed(!isClosed)}} color={"white"}>
          <Text mx={23}>OPEN MODAL</Text>
        </Button>
      </Box>
      <Modal  isClosed={isClosed}>
        <>
        <Text fontSize={25} fontWeight="bold" textAlign="center">Avatars </Text>
        <Text fontSize={25} fontWeight="bold" textAlign="center">Avatars </Text>
        </>
      </Modal>
    </Flex>
  )
}

export default App
