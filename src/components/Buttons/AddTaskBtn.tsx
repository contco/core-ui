import React, { SVGProps } from "react";
import styled from "styled-components";
//import AddIcon from "../../assets/addtask.svg";

const AddButton = styled.div`
  border-radius: 50%;
  height: 20px;
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  // box-shadow: ${({ theme }) => theme.toggleshadow};
  float: right;
  cursor: pointer;
  & :hover {
    opacity: 0.7;
    transition: opacity 0.3s;
  }
`;

type Props = {
  onClick?: () => void;
  Icon: React.FC<SVGProps<SVGSVGElement>>;
};

const AddTask: React.FC<Props> = ({ onClick, Icon }) => {
  return (
    <AddButton onClick={onClick}>
      <Icon />
    </AddButton>
  );
};

export default AddTask;