import React, { SVGProps } from "react";
import styled from "styled-components";

const SwitchButton = styled.div`
  border-radius: 50%;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  box-shadow: ${({ theme }) => theme.toggleshadow};
  cursor: pointer;
  & :hover {
    opacity: 0.7;
    transition: opacity 0.3s;
  }
`;

type Props = {
  onClick?: () => void;
  Icon: React.FC<SVGProps<SVGSVGElement>>;
  IconWidth?: string;
  IconHeight?: string;
};

const OvalButton: React.FC<Props> = ({
  onClick,
  Icon,
  IconWidth,
  IconHeight,
}) => {
  return (
    <SwitchButton onClick={onClick}>
      {IconWidth || IconHeight ? (
        <Icon width={IconWidth} height={IconHeight} />
      ) : (
        <Icon />
      )}
    </SwitchButton>
  );
};

export default OvalButton;
