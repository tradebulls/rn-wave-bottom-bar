var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.FabTabBar = exports.defaultSpringConfig = void 0;
var _defineProperty2 = _interopRequireDefault(
  require("@babel/runtime/helpers/defineProperty")
);
var _slicedToArray2 = _interopRequireDefault(
  require("@babel/runtime/helpers/slicedToArray")
);
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _reactNativeSafeAreaContext = require("react-native-safe-area-context");
var _reactNativeSvg = require("react-native-svg");
var _bottomTab = require("../styles/bottom.tab.styles");
var _tabBar = _interopRequireWildcard(require("./tab.bar.button"));
var _tab = require("./tab.shape");
var _jsxFileName =
  "/home/travis/build/Jm-Zion/rn-wave-bottom-bar/src/components/bottom.tab.tsx";
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
var AnimatedSvg = _reactNative.Animated.createAnimatedComponent(
  _reactNativeSvg.Svg
);
var tabWidth = 110;
var defaultSpringConfig = { damping: 30, mass: 0.7, stiffness: 250 };
exports.defaultSpringConfig = defaultSpringConfig;
var FabTabBar = function FabTabBar(_ref) {
  var state = _ref.state,
    descriptors = _ref.descriptors,
    navigation = _ref.navigation,
    springConfig = _ref.springConfig,
    bottomBarContainerStyle = _ref.bottomBarContainerStyle,
    focusedButtonStyle = _ref.focusedButtonStyle;
  //   console.log({ state: state, descriptors: descriptors });
  var _useState = (0, _react.useState)({
      width: _reactNative.Dimensions.get("window").width,
      height: _reactNative.Dimensions.get("window").height
    }),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    _useState2$ = _useState2[0],
    width = _useState2$.width,
    height = _useState2$.height,
    setDimensions = _useState2[1];
  var _useSafeAreaInsets = (0, _reactNativeSafeAreaContext.useSafeAreaInsets)(),
    bottom = _useSafeAreaInsets.bottom;
  var d = (0, _tab.getTabShape)(
    width,
    height,
    tabWidth,
    _bottomTab.TAB_BAR_HEIGHT
  );
  var tabsWidthValue = _react.default.useMemo(
    function () {
      return width / state.routes.length;
    },
    [width, state.routes]
  );
  var tabsRealWidth = width / state.routes.length;
  var _useState3 = (0, _react.useState)(
      new _reactNative.Animated.Value(-width + tabsWidthValue * state.index)
    ),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 1),
    animatedValueLength = _useState4[0];
  var offset =
    tabsRealWidth < tabWidth
      ? tabWidth - tabsRealWidth
      : (tabsRealWidth - tabWidth) * -1;
  (0, _react.useEffect)(
    function () {
      var newValue = -width + tabsWidthValue * state.index;
      _reactNative.Animated.spring(
        animatedValueLength,
        _objectSpread(
          _objectSpread(
            { toValue: newValue - offset / 2 },
            springConfig || defaultSpringConfig
          ),
          {},
          { useNativeDriver: true }
        )
      ).start();
    },
    [width, height, state, tabsWidthValue, offset, animatedValueLength]
  );
  var _useState5 = (0, _react.useState)(new _reactNative.Animated.Value(0)),
    _useState6 = (0, _slicedToArray2.default)(_useState5, 1),
    animationValueThreshold = _useState6[0];
  (0, _react.useEffect)(
    function () {
      _reactNative.Animated.spring(
        animationValueThreshold,
        _objectSpread(
          _objectSpread(
            { toValue: state.index },
            springConfig || defaultSpringConfig
          ),
          {},
          { useNativeDriver: true }
        )
      ).start();
    },
    [animationValueThreshold, state.index]
  );
  return _react.default.createElement(
    _reactNative.View,
    {
      onLayout: function onLayout(_ref2) {
        var _ref2$nativeEvent$lay = _ref2.nativeEvent.layout,
          lHeight = _ref2$nativeEvent$lay.height,
          lWidth = _ref2$nativeEvent$lay.width;
        setDimensions({ width: lWidth, height: lHeight });
      },
      style: [
        _bottomTab.style.container,
        { marginBottom: bottom, height: _bottomTab.TAB_BAR_HEIGHT },
        bottomBarContainerStyle
      ],
      __source: { fileName: _jsxFileName, lineNumber: 96, columnNumber: 5 }
    },
    bottom > 0 &&
      _react.default.createElement(_reactNative.View, {
        style: [
          {
            height: bottom,
            backgroundColor:
              Object.values(descriptors)[state.index].options
                .tabBarActiveBackgroundColor,
            bottom: bottom * -1
          },
          _bottomTab.style.bottomFill
        ],
        __source: { fileName: _jsxFileName, lineNumber: 114, columnNumber: 9 }
      }),
    _react.default.createElement(
      _reactNative.View,
      {
        style: _bottomTab.style.fabButtonsContainer,
        __source: { fileName: _jsxFileName, lineNumber: 127, columnNumber: 7 }
      },
      state.routes.map(function (route, index) {
        var options = descriptors[route.key].options;
        var isFocused = state.index === index;
        var onPress = function onPress() {
          var event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        var onLongPress = function onLongPress() {
          navigation.emit({ type: "tabLongPress", target: route.key });
        };
        return _react.default.createElement(_tabBar.default, {
          key: route.key,
          options: options,
          onPress: onPress,
          onLongPress: onLongPress,
          tabName: route.name,
          index: index,
          isFocused: isFocused,
          activeTintColor: options.tabBarActiveTintColor,
          inactiveTintColor: options.tabBarInactiveTintColor,
          tabLabelFontSize: options.tabLabelFontSize,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 13
          }
        });
      })
    ),
    _react.default.createElement(
      _reactNative.View,
      {
        style: [
          _reactNative.StyleSheet.absoluteFill,
          { elevation: 11, zIndex: 0, backgroundColor: "transparent" }
        ],
        __source: { fileName: _jsxFileName, lineNumber: 165, columnNumber: 7 }
      },
      _react.default.createElement(
        AnimatedSvg,
        {
          width: width * 2.5,
          height: height + bottom,
          style: {
            width: "100%",
            backgroundColor: "transparent",
            color: "transparent",
            transform: [{ translateX: animatedValueLength }]
          },
          __source: { fileName: _jsxFileName, lineNumber: 171, columnNumber: 9 }
        },
        _react.default.createElement(_reactNativeSvg.Path, {
          d: d,
          fill:
            Object.values(descriptors)[state.index].options
              .tabBarActiveBackgroundColor || "#FF5252",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 181,
            columnNumber: 11
          }
        })
      )
    ),
    state.routes.map(function (route, index) {
      var options = descriptors[route.key].options;
      var isFocused = state.index === index;
      var onPress = function onPress() {
        var event = navigation.emit({
          type: "tabPress",
          target: route.key,
          canPreventDefault: true
        });
        if (!isFocused && !event.defaultPrevented) {
          navigation.navigate(route.name);
        }
      };
      var onLongPress = function onLongPress() {
        navigation.emit({ type: "tabLongPress", target: route.key });
      };
      return _react.default.createElement(_tabBar.BarButton, {
        focusedButtonStyle: focusedButtonStyle,
        key: route.key,
        options: options,
        onPress: onPress,
        onLongPress: onLongPress,
        tabName: route.name,
        index: index,
        isFocused: isFocused,
        activeTintColor: options.tabBarActiveTintColor,
        inactiveTintColor: options.tabBarInactiveTintColor,
        tabLabelFontSize: options.tabLabelFontSize,
        __source: { fileName: _jsxFileName, lineNumber: 214, columnNumber: 11 }
      });
    })
  );
};
exports.FabTabBar = FabTabBar;
var _default = FabTabBar;
exports.default = _default;
//# sourceMappingURL=bottom.tab.js.map
