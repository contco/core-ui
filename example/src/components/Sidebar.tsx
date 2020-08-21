import React from 'react'
import { Flex, Avatar, Button } from '@contco/core-ui'
// import { Icon } from '@contco/core-ui'
// import SunIcon from '../dark-light-mode-icon.svg'

type Props = {
  profilePicture?: string
}

const Sidebar: React.FC<Props> = ({ profilePicture }) => {
  return (
    <Flex
      bg='left'
      flexDirection='column'
      pt='2.44%'
      justifyContent='space-between'
      alignItems='center'
      height='100vh'
      width='100px'
    >
      <Avatar title='manman' image={profilePicture} size='md' />
      <Flex height='12%' width={1} justifyContent='center' aligItems='center'>
        <Button bg='grey' height={15} width={5} style={{ borderRadius: '50%' }}>
          {/* <Icon svg={SunIcon}></Icon> */}
        </Button>
      </Flex>
    </Flex>
  )
}

export default Sidebar
