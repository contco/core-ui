import React__default, { createElement } from 'react';
import styled from 'styled-components';
import { space, color, layout, flexbox, typography } from 'styled-system';

var styles = {"test":"_styles-module__test__3ybTi"};

let _ = t => t,
    _t;
const Box = styled.div(_t || (_t = _`
  box-sizing: border-box;
  min-width: 0;
  ${0};
  ${0};
  ${0};
`), space, color, layout);

const BoxComponent = props => {
  return React__default.createElement(Box, Object.assign({}, props));
};

let _$1 = t => t,
    _t$1;
const Flex = styled.div(_t$1 || (_t$1 = _$1`
  boxsizing: "border-box";
  minwidth: 0;
  display: flex;
  ${0};
  ${0};
  ${0};
  ${0};
`), color, space, layout, flexbox);

const FlexComponent = props => {
  return React__default.createElement(Flex, Object.assign({}, props));
};

let _$2 = t => t,
    _t$2;
const Text = styled.div(_t$2 || (_t$2 = _$2`
  ${0};
  ${0};
`), color, typography);

const TextComponent = props => {
  return React__default.createElement(Text, Object.assign({}, props));
};

let _$3 = t => t,
    _t$3;
const AddButton = styled.div(_t$3 || (_t$3 = _$3`
  border-radius: 50%;
  height: 20px;
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  // box-shadow: ${0};
  float: right;
  cursor: pointer;
  & :hover {
    opacity: 0.7;
    transition: opacity 0.3s;
  }
`), ({
  theme
}) => theme.toggleshadow);

const AddTask = ({
  onClick,
  Icon
}) => {
  return React__default.createElement(AddButton, {
    onClick: onClick
  }, React__default.createElement(Icon, null));
};

let _$4 = t => t,
    _t$4;
const EditButton = styled.div(_t$4 || (_t$4 = _$4`
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
`));

const EditTask = ({
  onClick,
  Icon
}) => {
  return React__default.createElement(EditButton, {
    onClick: onClick
  }, React__default.createElement(Icon, null));
};

let _$5 = t => t,
    _t$5;
const Button = styled.a(_t$5 || (_t$5 = _$5`
  padding: 16px 22px;
  margin: 0.5rem 0rem;
  width: 13rem;
  background: transparent;
  height: 50px;
  width: 100px;
  background-color: #050b21;
  border-radius: 3px;
  justifycontent: "space-between";
`));

let _$6 = t => t,
    _t$6;
const SwitchButton = styled.div(_t$6 || (_t$6 = _$6`
  border-radius: 50%;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  box-shadow: ${0};
  cursor: pointer;
  & :hover {
    opacity: 0.7;
    transition: opacity 0.3s;
  }
`), ({
  theme
}) => theme.toggleshadow);

const OvalButton = ({
  onClick,
  Icon,
  IconWidth,
  IconHeight
}) => {
  return React__default.createElement(SwitchButton, {
    onClick: onClick
  }, IconWidth || IconHeight ? React__default.createElement(Icon, {
    width: IconWidth,
    height: IconHeight
  }) : React__default.createElement(Icon, null));
};

const ExampleComponent = ({
  text
}) => {
  return createElement("div", {
    className: styles.test
  }, "Example Component: ", text);
};

export { AddTask as AddButton, BoxComponent as Box, EditTask as EditButton, ExampleComponent, FlexComponent as Flex, Button as LoginButton, OvalButton, TextComponent as Text };
//# sourceMappingURL=index.modern.js.map
