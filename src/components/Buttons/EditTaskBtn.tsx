import React,{ SVGProps } from "react";
import styled from "styled-components";
//import EditIcon from "../../assets/edit.svg";

const EditButton = styled.div`
  border-radius: 50%;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 4px 4px 0 #e9e6e6;
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

const EditTask: React.FC<Props> = ({ onClick, Icon }) => {
  return (
    <EditButton onClick={onClick}>
      <Icon />
    </EditButton>
  );
};

export default EditTask;