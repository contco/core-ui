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
    _t$3,
    _t2,
    _t3,
    _t4,
    _t5,
    _t6,
    _t7,
    _t8;
const HoverContainer = styled.div(_t$3 || (_t$3 = _$3`
  position: absolute;
  width: max-content;
  margin-top: 20px;
  display: none;
`));
const Triangle = styled.div(_t2 || (_t2 = _$3`
  width: 0;
  height: 0;
  border: solid 8px;
  border-color: transparent transparent #050b21 transparent;
  margin: 0 auto;
`));
const Rectangle = styled.div(_t3 || (_t3 = _$3`
  width: max-content;
  padding: 0px 5px;
  height: 20px;
  border-radius: 2px;
  background-color: #050b21;
  font-size: 8px;
  letter-spacing: 0.33px;
  color: #ffffff !important;
  align-items: center;
  justify-content: center;
  display: flex;
`));
const Wrapper = styled.div(_t4 || (_t4 = _$3`
  &:hover ${0} {
    display: initial;
  }
  display: flex;
`), HoverContainer);
const AvatarImage = styled.div(_t5 || (_t5 = _$3`
  border-radius: 50%;
  border: ${0};
`), props => props.active ? "1px solid #3498db;" : "none;");
const MediumAvatar = styled(AvatarImage)(_t6 || (_t6 = _$3`
  height: 50px;
  width: 50px;
`));
const SmallAvatar = styled(AvatarImage)(_t7 || (_t7 = _$3`
  height: 20px;
  width: 20px;
  background: ${0};
`), props => props.color ? props.color : "none");
const MmAvatar = styled(AvatarImage)(_t8 || (_t8 = _$3`
  height: 50px;
  width: 50px;
  margin: 15px;
`));

const Avatar = ({
  image: _image = "",
  size: _size = "sm",
  title: _title = "",
  color: _color = "",
  active
}) => {
  if (_size === "md") {
    return React__default.createElement(Wrapper, null, _image ? React__default.createElement(MediumAvatar, {
      active: active,
      as: "img",
      src: _image
    }) : React__default.createElement(MediumAvatar, {
      active: active,
      color: _color
    }), _title ? React__default.createElement(HoverContainer, null, React__default.createElement(Triangle, null), React__default.createElement(Rectangle, null, _title)) : "");
  } else if (_size === "mm") {
    return React__default.createElement(Wrapper, null, _image ? React__default.createElement(MmAvatar, {
      active: active,
      as: "img",
      src: _image
    }) : React__default.createElement(MmAvatar, {
      active: active,
      color: _color
    }), _title ? React__default.createElement(HoverContainer, null, React__default.createElement(Triangle, null), React__default.createElement(Rectangle, null, _title)) : "");
  } else {
    return React__default.createElement(Wrapper, null, _image ? React__default.createElement(SmallAvatar, {
      active: active,
      as: "img",
      src: _image
    }) : React__default.createElement(SmallAvatar, {
      active: active,
      color: _color
    }), _title ? React__default.createElement(HoverContainer, null, React__default.createElement(Triangle, null), React__default.createElement(Rectangle, null, _title)) : "");
  }
};

let _$4 = t => t,
    _t$4;
const Input = styled.input(_t$4 || (_t$4 = _$4`
  height: 50px;
  width: 300px;
  background-color: white;
  margin: 20px;
  border: none;
`));

let _$5 = t => t,
    _t$5;
const IconStyle = styled.svg(_t$5 || (_t$5 = _$5`
  & use {
    //fill: ${0} ;
  }
`), props => props.theme.colors.icon);

const IconComponent = ({
  svg,
  color: _color = "#000",
  className
}) => {
  return React__default.createElement(IconStyle, {
    as: svg,
    color: _color,
    className: className
  });
};

let _$6 = t => t,
    _t$6;
const Button = styled.a(_t$6 || (_t$6 = _$6`
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

let _$7 = t => t,
    _t$7;
const SwitchButton = styled.div(_t$7 || (_t$7 = _$7`
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

export { Avatar, BoxComponent as Box, ExampleComponent, FlexComponent as Flex, IconComponent as Icon, Input, Button as LoginButton, OvalButton, TextComponent as Text };
//# sourceMappingURL=index.modern.js.map
