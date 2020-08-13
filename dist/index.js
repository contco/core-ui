function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var styled = _interopDefault(require('styled-components'));
var styledSystem = require('styled-system');

var styles = {"test":"_styles-module__test__3ybTi"};

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  box-sizing: border-box;\n  min-width: 0;\n  ", ";\n  ", ";\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var Box = styled.div(_templateObject(), styledSystem.space, styledSystem.color, styledSystem.layout);

var BoxComponent = function BoxComponent(props) {
  return React__default.createElement(Box, Object.assign({}, props));
};

function _templateObject$1() {
  var data = _taggedTemplateLiteralLoose(["\n  boxsizing: \"border-box\";\n  minwidth: 0;\n  display: flex;\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var Flex = styled.div(_templateObject$1(), styledSystem.color, styledSystem.space, styledSystem.layout, styledSystem.flexbox);

var FlexComponent = function FlexComponent(props) {
  return React__default.createElement(Flex, Object.assign({}, props));
};

function _templateObject$2() {
  var data = _taggedTemplateLiteralLoose(["\n  ", ";\n  ", ";\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var Text = styled.div(_templateObject$2(), styledSystem.color, styledSystem.typography);

var TextComponent = function TextComponent(props) {
  return React__default.createElement(Text, Object.assign({}, props));
};

function _templateObject8() {
  var data = _taggedTemplateLiteralLoose(["\n  height: 50px;\n  width: 50px;\n  margin: 15px;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteralLoose(["\n  height: 20px;\n  width: 20px;\n  background: ", ";\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteralLoose(["\n  height: 50px;\n  width: 50px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteralLoose(["\n  border-radius: 50%;\n  border: ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteralLoose(["\n  &:hover ", " {\n    display: initial;\n  }\n  display: flex;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n  width: max-content;\n  padding: 0px 5px;\n  height: 20px;\n  border-radius: 2px;\n  background-color: #050b21;\n  font-size: 8px;\n  letter-spacing: 0.33px;\n  color: #ffffff !important;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 0;\n  height: 0;\n  border: solid 8px;\n  border-color: transparent transparent #050b21 transparent;\n  margin: 0 auto;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$3() {
  var data = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  width: max-content;\n  margin-top: 20px;\n  display: none;\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}
var HoverContainer = styled.div(_templateObject$3());
var Triangle = styled.div(_templateObject2());
var Rectangle = styled.div(_templateObject3());
var Wrapper = styled.div(_templateObject4(), HoverContainer);
var AvatarImage = styled.div(_templateObject5(), function (props) {
  return props.active ? "1px solid #3498db;" : "none;";
});
var MediumAvatar = styled(AvatarImage)(_templateObject6());
var SmallAvatar = styled(AvatarImage)(_templateObject7(), function (props) {
  return props.color ? props.color : "none";
});
var MmAvatar = styled(AvatarImage)(_templateObject8());

var Avatar = function Avatar(_ref) {
  var _ref$image = _ref.image,
      image = _ref$image === void 0 ? "" : _ref$image,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? "sm" : _ref$size,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? "" : _ref$title,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? "" : _ref$color,
      active = _ref.active;

  if (size === "md") {
    return React__default.createElement(Wrapper, null, image ? React__default.createElement(MediumAvatar, {
      active: active,
      as: "img",
      src: image
    }) : React__default.createElement(MediumAvatar, {
      active: active,
      color: color
    }), title ? React__default.createElement(HoverContainer, null, React__default.createElement(Triangle, null), React__default.createElement(Rectangle, null, title)) : "");
  } else if (size === "mm") {
    return React__default.createElement(Wrapper, null, image ? React__default.createElement(MmAvatar, {
      active: active,
      as: "img",
      src: image
    }) : React__default.createElement(MmAvatar, {
      active: active,
      color: color
    }), title ? React__default.createElement(HoverContainer, null, React__default.createElement(Triangle, null), React__default.createElement(Rectangle, null, title)) : "");
  } else {
    return React__default.createElement(Wrapper, null, image ? React__default.createElement(SmallAvatar, {
      active: active,
      as: "img",
      src: image
    }) : React__default.createElement(SmallAvatar, {
      active: active,
      color: color
    }), title ? React__default.createElement(HoverContainer, null, React__default.createElement(Triangle, null), React__default.createElement(Rectangle, null, title)) : "");
  }
};

function _templateObject$4() {
  var data = _taggedTemplateLiteralLoose(["\n  height: 50px;\n  width: 300px;\n  background-color: white;\n  margin: 20px;\n  border: none;\n"]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}
var Input = styled.input(_templateObject$4());

function _templateObject$5() {
  var data = _taggedTemplateLiteralLoose(["\n  & use {\n    //fill: ", " ;\n  }\n"]);

  _templateObject$5 = function _templateObject() {
    return data;
  };

  return data;
}
var IconStyle = styled.svg(_templateObject$5(), function (props) {
  return props.theme.colors.icon;
});

var IconComponent = function IconComponent(_ref) {
  var svg = _ref.svg,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? "#000" : _ref$color,
      className = _ref.className;
  return React__default.createElement(IconStyle, {
    as: svg,
    color: color,
    className: className
  });
};

function _templateObject$6() {
  var data = _taggedTemplateLiteralLoose(["\n  padding: 16px 22px;\n  margin: 0.5rem 0rem;\n  width: 13rem;\n  background: transparent;\n  height: 50px;\n  width: 100px;\n  background-color: #050b21;\n  border-radius: 3px;\n  justifycontent: \"space-between\";\n"]);

  _templateObject$6 = function _templateObject() {
    return data;
  };

  return data;
}
var Button = styled.a(_templateObject$6());

function _templateObject$7() {
  var data = _taggedTemplateLiteralLoose(["\n  border-radius: 50%;\n  height: 50px;\n  width: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #fff;\n  box-shadow: ", ";\n  cursor: pointer;\n  & :hover {\n    opacity: 0.7;\n    transition: opacity 0.3s;\n  }\n"]);

  _templateObject$7 = function _templateObject() {
    return data;
  };

  return data;
}
var SwitchButton = styled.div(_templateObject$7(), function (_ref) {
  var theme = _ref.theme;
  return theme.toggleshadow;
});

var OvalButton = function OvalButton(_ref2) {
  var onClick = _ref2.onClick,
      Icon = _ref2.Icon,
      IconWidth = _ref2.IconWidth,
      IconHeight = _ref2.IconHeight;
  return React__default.createElement(SwitchButton, {
    onClick: onClick
  }, IconWidth || IconHeight ? React__default.createElement(Icon, {
    width: IconWidth,
    height: IconHeight
  }) : React__default.createElement(Icon, null));
};

var ExampleComponent = function ExampleComponent(_ref) {
  var text = _ref.text;
  return React.createElement("div", {
    className: styles.test
  }, "Example Component: ", text);
};

exports.Avatar = Avatar;
exports.Box = BoxComponent;
exports.ExampleComponent = ExampleComponent;
exports.Flex = FlexComponent;
exports.Icon = IconComponent;
exports.Input = Input;
exports.LoginButton = Button;
exports.OvalButton = OvalButton;
exports.Text = TextComponent;
//# sourceMappingURL=index.js.map
