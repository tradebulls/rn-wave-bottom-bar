import React from 'react';
import { Animated, StyleProp } from 'react-native';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
interface Props {
    index: number;
    isFocused: boolean;
    onPress: () => void;
    onLongPress: () => void;
    options: BottomTabNavigationOptions;
    inactiveTintColor?: string;
    activeTintColor?: string;
    springConfig?: Animated.SpringAnimationConfig;
    focusedButtonStyle?: StyleProp<any>;
}
export declare const defaultSpringConfig: {
    damping: number;
    mass: number;
    stiffness: number;
};
export declare const BarButton: React.FC<Props>;
export declare const TabBarButton: React.FC<Props>;
export default TabBarButton;
