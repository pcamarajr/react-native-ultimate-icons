import type { FC, LazyExoticComponent, ReactNode } from 'react';
import React, { createContext } from 'react';
import type { SvgProps } from 'react-native-svg';

type IconsMap = {
  [iconName: string]: LazyExoticComponent<FC<SvgProps>>;
};
type IconsSizeMap = Record<string, number>;
type IconsColorMap = Record<string, string>;
type BaseSvgSize = number;

export type IconContextType<
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

export type IconProviderProps<
  Icons extends IconsMap,
  Sizes extends IconsSizeMap,
  Colors extends IconsColorMap
> = {
  children: ReactNode;
} & IconContextType<Icons, Sizes, Colors>;

export const IconContext = createContext<IconContextType<any, any, any>>({
  icons: {},
  sizes: {},
  colors: {},
  baseSvgSize: 24,
  defaultSize: 'small',
  defaultColor: 'black',
});
IconContext.displayName = 'UltimateIconContext';

export const IconProvider = ({
  icons,
  sizes,
  colors,
  baseSvgSize,
  defaultSize,
  defaultColor,
  children,
}: IconProviderProps<IconsMap, IconsSizeMap, IconsColorMap>) => (
  <IconContext.Provider
    value={{
      icons,
      sizes,
      colors,
      baseSvgSize,
      defaultSize,
      defaultColor,
    }}
  >
    {children}
  </IconContext.Provider>
);
