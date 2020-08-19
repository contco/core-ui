/* eslint-disable no-unused-vars */
import React, { SVGProps, forwardRef, Ref } from 'react'
import styled from 'styled-components'
import Flex from '../layout/Flex'

const SwitchButton = styled(Flex)`
  border-radius: 50%;
  //box-shadow: ${({ theme }) => theme.toggleshadow};
  cursor: pointer;
  & :hover {
    opacity: 0.7;
    transition: opacity 0.3s;
  }
`

type Props = {
  onClick?: () => void
  Icon: React.FC<SVGProps<SVGSVGElement>>
  IconWidth?: string
  IconHeight?: string
}

const OvalButton: React.FC<Props> = forwardRef(
  ({ onClick, Icon, IconWidth, IconHeight, ...props }, ref: Ref<Props>) => (
    <SwitchButton
      height='50px'
      width='50px'
      justifyContent='center'
      alignItems='center'
      bg='#fff'
      onClick={onClick}
      ref={ref}
      {...props}
    >
      {IconWidth || IconHeight ? (
        <Icon width={IconWidth} height={IconHeight} />
      ) : (
        <Icon />
      )}
    </SwitchButton>
  )
)

export default OvalButton
