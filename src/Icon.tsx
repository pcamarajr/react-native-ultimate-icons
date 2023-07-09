import type { FC } from 'react';
import React, { Suspense, useContext } from 'react';
import { View } from 'react-native';
import { IconContext } from './IconProvider';

/**
 * All declarations and constants declared here will be replaced by the
 *  values provided in the IconProvider - in progress...
 */
export type IconSize = 'xsmall' | 'small' | 'medium' | 'large';
export type IconColor = string;
export type IconName = string;
export const BASE_SVG_SIZE = 24;
export const DEFAULT_SIZE = 'small';
export const DEFAULT_COLOR = 'black';
/**
 * End of declarations and constants declared here will be replaced by the
 *  values provided in the IconProvider - in progress...
 */

export type IconProps = {
  name: IconName;
  color?: IconColor;
  size?: IconSize;
  onPress?: () => void;
};

export const Icon: FC<IconProps> = ({
  name,
  color = DEFAULT_COLOR,
  size = DEFAULT_SIZE,
  onPress,
}) => {
  const { icons, sizes, defaultSize } = useContext(IconContext);

  const SvgIcon = icons[name];
  const defaultSizeValue = sizes[defaultSize];
  const iconSize = sizes[size] ?? defaultSizeValue;
  // const scale = iconSize / BASE_SVG_SIZE;
  const containerStyle = {
    width: iconSize,
    height: iconSize,
    backgroundColor: 'skyblue',
  };

  return (
    <Suspense fallback={null}>
      <View style={containerStyle}>
        <SvgIcon
          onPress={onPress}
          stroke={color}
          preserveAspectRatio="xMidYMid meet"
          // TODO: Check out why the scale is not working
          // transform={`scale(${scale})`}
        />
      </View>
    </Suspense>
  );
};
