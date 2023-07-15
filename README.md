# react-native-ultimate-icons

**React Native Ultimate Icons** is a lightweight and flexible library for rendering icons in React Native applications.
It
provides the flexibility to load only the icons you need and offers type safety and code completion with TypeScript.

## Installation

To use `react-native-ultimate-icons`, you need to install the following dependencies:

1. Install `react-native-svg` by following the instructions in
   the [react-native-svg repository](https://github.com/software-mansion/react-native-svg).
2. If you want to import SVGs as React components, set up `react-native-svg-transformer` by following the instructions
   in the [react-native-svg-transformer repository](https://github.com/kristerkari/react-native-svg-transformer). This
   step is optional, as you can also provide the SVG XML directly.

### Manual Configuration

There are a few manual configurations required when using `react-native-ultimate-icons`:

1. Ensure that the SVG files you use don't have the `width` and `height` properties to allow using them in different
   sizes.
2. The color of the icon is controlled by the `stroke` property in the SVG. Make sure the `stroke` property is present
   in the SVG file.

## Usage

Here's an example of how to use `react-native-ultimate-icons` in a React Native application:

### Initialization

Initialize the library by creating an instance of `UltimateIcons` and configuring
the `icons`, `sizes`, `colors`, `base SVG size`, `default size`, and `default color`:

```javascript
import { lazy } from 'react';
import { UltimateIcons } from 'react-native-ultimate-icons';

const icons = {
  'arrow-left': lazy(() => import('../assets/icons/arrow-left.svg')),
  'arrow-right': lazy(() => import('../assets/icons/arrow-right.svg')),
};

const sizes = {
  small: 24,
  medium: 32,
  xl: 48,
  xxl: 64,
};

const colors = {
  primary: 'blue',
  secondary: 'red',
};

const baseSvgSize = 24;
const defaultSize = 'small';
const defaultColor = 'primary';

export const { Icon } = new UltimateIcons({
  icons,
  sizes,
  colors,
  baseSvgSize,
  defaultSize,
  defaultColor,
});
```

### Usage

Use the `Icon` component in your React Native application

```tsx
<Icon name="arrow-right" size="small" color="secondary" />
```

### Multiple Instances

You can configure multiple instances of `UltimateIcons` with different icon sets within a single project. This is useful
if you want to use different icon sets in different parts of your application.

## What problem does it solve?

React Native Ultimate Icons addresses the following issues with existing icon libraries:

- **Heavy library size:** Many existing icon libraries bundle a large number of icons, leading to increased app size.
  React Native Ultimate Icons allows you to load only the icons you need, reducing the bundle size.
- **Lack of code completion:** Existing libraries often lack code completion for icon names, sizes, and colors. React
  Native Ultimate Icons provides type safety and code completion with TypeScript, making it easier to use and preventing
  runtime errors.
- **Lack of flexibility:** Some icon libraries have limited flexibility in terms of customization options. React Native
  Ultimate Icons allows you to configure icon sizes and colors according to your specific requirements.

## Motivation

The motivation behind developing React Native Ultimate Icons was to address the challenges we faced with existing icon
libraries. Our goals were:

- **Provide a lightweight and flexible solution:** We wanted a library that allowed us to load only the icons we needed,
  minimizing the app size and optimizing performance.
- **Simplify icon usage:** We aimed to create a library that was easy to use, with clear documentation and code that
  newcomers could easily understand.
- **Leverage TypeScript for type safety:** TypeScript offers valuable static type checking, which helps prevent bugs and
  improves code quality. We wanted to leverage TypeScript to provide type safety and real-time verification for
  developers.

## Unique Features

React Native Ultimate Icons offers the following unique features:

- **Flexibility and type safety:** You can load only the icons you need and configure sizes and colors according to your
  requirements. TypeScript provides type safety and real-time verification, ensuring that your code is correct.
- **Simplicity:** The library is designed to be simple to use, with a straightforward API that allows you to quickly
  integrate icons into your React Native application.
- **Freedom to choose:** React Native Ultimate Icons provides the freedom to select the icon set, sizes, and colors that
  best suit your project's needs. You can also create additional icon libraries using the Ultimate Icons framework.

## Additional Information

- **Installation Instructions:** Please refer to the installation instructions provided earlier in this document for the
  necessary steps to install and configure react-native-ultimate-icons.
- **Dependencies and Compatibility:** React Native Ultimate Icons depends on `react-native-svg`. Please ensure that you
  have installed and configured react-native-svg before using this library.
- **Contributing:** We welcome contributions to react-native-ultimate-icons. If you would like to contribute, please
  refer to the [contribution guidelines](CONTRIBUTING.md) (in progress) in the project's repository.

Thank you for using `react-native-ultimate-icons`! If you have any questions or encounter any issues, please don't
hesitate to reach out.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)

**disclaimer:** initial readme was generated using the help of our ChatGPT friend, it will be updated soon.
