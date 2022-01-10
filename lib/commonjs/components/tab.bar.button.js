"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default =
  exports.TabBarButton =
  exports.BarButton =
  exports.defaultSpringConfig =
    void 0;
var _defineProperty2 = _interopRequireDefault(
  require("@babel/runtime/helpers/defineProperty")
);
var _slicedToArray2 = _interopRequireDefault(
  require("@babel/runtime/helpers/slicedToArray")
);
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _tabBarButton = require("../styles/tab.bar.button.styles");
var _jsxFileName =
  "/home/travis/build/Jm-Zion/rn-wave-bottom-bar/src/components/tab.bar.button.tsx";
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        (0, _defineProperty2.default)(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key)
        );
      });
    }
  }
  return target;
}
var AnimatedTouchable = _reactNative.Animated.createAnimatedComponent(
  _reactNative.TouchableOpacity
);
var defaultSpringConfig = { damping: 30, mass: 0.7, stiffness: 250 };
exports.defaultSpringConfig = defaultSpringConfig;
var BarButton = (0, _react.memo)(function (_ref) {
  var isFocused = _ref.isFocused,
    options = _ref.options,
    onPress = _ref.onPress,
    onLongPress = _ref.onLongPress,
    inactiveTintColor = _ref.inactiveTintColor,
    springConfig = _ref.springConfig;
  var _useState = (0, _react.useState)(new _reactNative.Animated.Value(0)),
    _useState2 = (0, _slicedToArray2.default)(_useState, 1),
    animationValueThreshold = _useState2[0];
  (0, _react.useEffect)(
    function () {
      _reactNative.Animated.spring(
        animationValueThreshold,
        _objectSpread(
          _objectSpread(
            { toValue: isFocused ? 0 : 1 },
            springConfig || defaultSpringConfig
          ),
          {},
          { useNativeDriver: true }
        )
      ).start();
    },
    [isFocused, animationValueThreshold]
  );
  return _react.default.createElement(
    _reactNative.View,
    {
      style: _tabBarButton.style.wrapper,
      __source: { fileName: _jsxFileName, lineNumber: 48, columnNumber: 7 }
    },
    _react.default.createElement(
      AnimatedTouchable,
      {
        accessibilityRole: "button",
        accessibilityLabel: options.tabBarAccessibilityLabel,
        testID: options.tabBarTestID,
        onPress: onPress,
        style: [
          _tabBarButton.style.unfocusedButton,
          { opacity: animationValueThreshold },
          {
            transform: [
              {
                scale: animationValueThreshold.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 1]
                })
              }
            ]
          }
        ],
        onLongPress: onLongPress,
        __source: { fileName: _jsxFileName, lineNumber: 49, columnNumber: 9 }
      },
      _react.default.createElement(
        _reactNative.View,
        {
          style: { zIndex: 12 },
          __source: { fileName: _jsxFileName, lineNumber: 70, columnNumber: 11 }
        },
        options.tabBarIcon && !isFocused
          ? options.tabBarIcon({
              focused: isFocused,
              color: inactiveTintColor || "white",
              size: 28
            })
          : _react.default.createElement(_reactNative.View, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 15
              }
            })
      )
    )
  );
});
exports.BarButton = BarButton;
var TabBarButton = (0, _react.memo)(function (_ref2) {
  var isFocused = _ref2.isFocused,
    options = _ref2.options,
    onPress = _ref2.onPress,
    onLongPress = _ref2.onLongPress,
    activeTintColor = _ref2.activeTintColor,
    springConfig = _ref2.springConfig,
    focusedButtonStyle = _ref2.focusedButtonStyle;
  var _useState3 = (0, _react.useState)(new _reactNative.Animated.Value(0)),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 1),
    animationValueThreshold = _useState4[0];
  (0, _react.useEffect)(
    function () {
      _reactNative.Animated.spring(
        animationValueThreshold,
        _objectSpread(
          _objectSpread(
            { toValue: isFocused ? 0 : 1 },
            springConfig || defaultSpringConfig
          ),
          {},
          { useNativeDriver: true }
        )
      ).start();
    },
    [isFocused, animationValueThreshold]
  );
  return _react.default.createElement(
    _reactNative.View,
    {
      style: _tabBarButton.style.wrapper,
      __source: { fileName: _jsxFileName, lineNumber: 108, columnNumber: 7 }
    },
    _react.default.createElement(
      AnimatedTouchable,
      {
        accessibilityRole: "button",
        accessibilityComponentType: "Button",
        accessibilityLabel: options.tabBarAccessibilityLabel,
        testID: options.tabBarTestID,
        onPress: onPress,
        style: [
          _objectSpread(
            _objectSpread({}, _tabBarButton.style.focusedButton),
            {},
            {
              backgroundColor: activeTintColor || "white",
              transform: [
                {
                  translateY: animationValueThreshold.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-18, 100]
                  })
                }
              ]
            }
          ),
          isFocused ? focusedButtonStyle : {}
        ],
        onLongPress: onLongPress,
        __source: { fileName: _jsxFileName, lineNumber: 109, columnNumber: 9 }
      },
      options.tabBarIcon
        ? options.tabBarIcon({ focused: isFocused, color: "white", size: 28 })
        : null
    )
  );
});
exports.TabBarButton = TabBarButton;
var _default = TabBarButton;
exports.default = _default;
//# sourceMappingURL=tab.bar.button.js.map
