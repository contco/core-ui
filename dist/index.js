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

function _templateObject$3() {
  var data = _taggedTemplateLiteralLoose(["\n  border-radius: 50%;\n  height: 20px;\n  width: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #fff;\n  // box-shadow: ", ";\n  float: right;\n  cursor: pointer;\n  & :hover {\n    opacity: 0.7;\n    transition: opacity 0.3s;\n  }\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}
var AddButton = styled.div(_templateObject$3(), function (_ref) {
  var theme = _ref.theme;
  return theme.toggleshadow;
});

var AddTask = function AddTask(_ref2) {
  var onClick = _ref2.onClick,
      Icon = _ref2.Icon;
  return React__default.createElement(AddButton, {
    onClick: onClick
  }, React__default.createElement(Icon, null));
};

function _templateObject$4() {
  var data = _taggedTemplateLiteralLoose(["\n  border-radius: 50%;\n  height: 50px;\n  width: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #fff;\n  box-shadow: 0 4px 4px 0 #e9e6e6;\n  cursor: pointer;\n  & :hover {\n    opacity: 0.7;\n    transition: opacity 0.3s;\n  }\n"]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}
var EditButton = styled.div(_templateObject$4());

var EditTask = function EditTask(_ref) {
  var onClick = _ref.onClick,
      Icon = _ref.Icon;
  return React__default.createElement(EditButton, {
    onClick: onClick
  }, React__default.createElement(Icon, null));
};

function _templateObject$5() {
  var data = _taggedTemplateLiteralLoose(["\n  padding: 16px 22px;\n  margin: 0.5rem 0rem;\n  width: 13rem;\n  background: transparent;\n  height: 50px;\n  width: 100px;\n  background-color: #050b21;\n  border-radius: 3px;\n  justifycontent: \"space-between\";\n"]);

  _templateObject$5 = function _templateObject() {
    return data;
  };

  return data;
}
var Button = styled.a(_templateObject$5());

function _templateObject$6() {
  var data = _taggedTemplateLiteralLoose(["\n  border-radius: 50%;\n  height: 50px;\n  width: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #fff;\n  box-shadow: ", ";\n  cursor: pointer;\n  & :hover {\n    opacity: 0.7;\n    transition: opacity 0.3s;\n  }\n"]);

  _templateObject$6 = function _templateObject() {
    return data;
  };

  return data;
}
var SwitchButton = styled.div(_templateObject$6(), function (_ref) {
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

exports.AddButton = AddTask;
exports.Box = BoxComponent;
exports.EditButton = EditTask;
exports.ExampleComponent = ExampleComponent;
exports.Flex = FlexComponent;
exports.LoginButton = Button;
exports.OvalButton = OvalButton;
exports.Text = TextComponent;
//# sourceMappingURL=index.js.map
