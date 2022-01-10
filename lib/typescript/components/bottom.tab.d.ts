import React from 'react';
import { Animated, StyleProp } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
export declare const defaultSpringConfig: {
    damping: number;
    mass: number;
    stiffness: number;
};
declare type CustomProps = {
    /**
     * Custom spring animation config
     */
    springConfig?: Animated.SpringAnimationConfig;
    /**
     * Custom style for bar
     */
    bottomBarContainerStyle?: StyleProp<any>;
    /**
     * Adding additional style for the focused tab button, such as a shadow.
     */
    focusedButtonStyle?: StyleProp<any>;
};
export declare const FabTabBar: React.FC<BottomTabBarProps & CustomProps>;
export default FabTabBar;
