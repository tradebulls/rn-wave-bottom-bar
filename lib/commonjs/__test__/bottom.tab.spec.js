"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");
var _extends2 = _interopRequireDefault(
  require("@babel/runtime/helpers/extends")
);
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var renderer = _interopRequireWildcard(require("react-test-renderer"));
var _bottomTabs = require("@react-navigation/bottom-tabs");
var _native = require("@react-navigation/native");
var _bottom = require("../components/bottom.tab");
var _jsxFileName =
  "/home/travis/build/Jm-Zion/rn-wave-bottom-bar/src/__test__/bottom.tab.spec.tsx";
var tabBarIcon = function tabBarIcon(props) {
  return _react.default.createElement(
    _reactNative.View,
    (0, _extends2.default)({}, props, {
      __source: { fileName: _jsxFileName, lineNumber: 10, columnNumber: 36 }
    })
  );
};
var Tab = (0, _bottomTabs.createBottomTabNavigator)();
describe("FabTabBar", function () {
  it("Should render", function () {
    var tree = renderer.create(
      _react.default.createElement(
        _native.NavigationContainer,
        {
          __source: { fileName: _jsxFileName, lineNumber: 16, columnNumber: 7 }
        },
        _react.default.createElement(
          Tab.Navigator,
          {
            screenOptions: { tabBarActiveTintColor: "purple" },
            tabBar: function tabBar(props) {
              return _react.default.createElement(
                _bottom.FabTabBar,
                (0, _extends2.default)({ color: "purple" }, props, {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 21,
                    columnNumber: 35
                  }
                })
              );
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 17,
              columnNumber: 9
            }
          },
          _react.default.createElement(Tab.Screen, {
            options: { tabBarIcon: tabBarIcon },
            name: "Home",
            component: function component() {
              return _react.default.createElement(
                _reactNative.View,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27,
                    columnNumber: 15
                  }
                },
                _react.default.createElement(
                  _reactNative.Text,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 28,
                      columnNumber: 17
                    }
                  },
                  "Home"
                )
              );
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 11
            }
          }),
          _react.default.createElement(Tab.Screen, {
            options: { tabBarIcon: tabBarIcon },
            name: "Home",
            component: function component() {
              return _react.default.createElement(
                _reactNative.View,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36,
                    columnNumber: 15
                  }
                },
                _react.default.createElement(
                  _reactNative.Text,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 37,
                      columnNumber: 17
                    }
                  },
                  "Settings"
                )
              );
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 11
            }
          })
        )
      )
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
//# sourceMappingURL=bottom.tab.spec.js.map
