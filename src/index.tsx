import type { FC, LazyExoticComponent } from 'react';
import React, { Suspense } from 'react';
import { View } from 'react-native';
import type { SvgProps } from 'react-native-svg';

export type IconsMap = Record<string, LazyExoticComponent<FC<SvgProps>>>;
export type IconsSizeMap = Record<string, number>;
export type IconsColorMap = Record<string, string>;
export type BaseSvgSize = number;

export type IconProps<
  Icons extends IconsMap,
  Sizes extends IconsSizeMap,
  Colors extends IconsColorMap
> = {
  name: keyof Icons;
  color?: keyof Colors;
  size?: keyof Sizes;
  onPress?: () => void;
};

export type UltimateIconsOptions<
  Icons extends IconsMap,
  Sizes extends IconsSizeMap,
  Colors extends IconsColorMap
> = {
  icons: Icons;
  sizes: Sizes;
  colors: Colors;
  baseSvgSize: BaseSvgSize;
  defaultSize: keyof Sizes;
  defaultColor: keyof Colors;
};

export class UltimateIcons<
  Icons extends IconsMap,
  Sizes extends IconsSizeMap,
  Colors extends IconsColorMap
> {
  static displayName = 'UltimateIcons';

  private icons: Icons;
  private sizes: Sizes;
  private colors: Colors;
  private baseSvgSize: BaseSvgSize;
  private defaultSize: keyof Sizes;
  private defaultColor: keyof Colors;

  constructor(options: UltimateIconsOptions<Icons, Sizes, Colors>) {
    this.icons = options.icons;
    this.sizes = options.sizes;
    this.colors = options.colors;
    this.baseSvgSize = options.baseSvgSize;
    this.defaultSize = options.defaultSize;
    this.defaultColor = options.defaultColor;
  }

  Icon: FC<IconProps<Icons, Sizes, Colors>> = ({
    name,
    color,
    size,
    onPress,
  }) => {
    const { icons, sizes, defaultSize, defaultColor, colors } = this;

    const SvgIcon = icons[name];
    const defaultSizeValue = sizes[defaultSize];
    const iconSize = sizes[size ?? defaultSize] ?? defaultSizeValue;
    const iconColor = colors[color ?? defaultColor] ?? defaultColor;
    const containerStyle = {
      width: iconSize,
      height: iconSize,
    };

    return (
      // TODO: Add a fallback component
      <Suspense fallback={null}>
        <View style={containerStyle}>
          {/* TODO: Check out why this TS error */}
          <SvgIcon
            onPress={onPress}
            stroke={iconColor}
            preserveAspectRatio="xMidYMid meet"
            // TODO: Check out why the scale is not working
            // transform={`scale(${scale})`}
          />
        </View>
      </Suspense>
    );
  };
}
