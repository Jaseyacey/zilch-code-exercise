# Zilch - A React Native Expense Tracker

## Overview

Zilch is a simple yet powerful React Native application designed to help users track their spending. It displays a list of transactions and provides insights into where users spend the most money and which stores they visit most frequently.

## Features

- **Global State Management**: Utilizes Redux and Redux Toolkit for efficient state management.
- **Dynamic Updates**: Allows users to update their debit card details, with immediate synchronization of the Redux state.
- **Responsive Design**: Fully responsive, providing an optimal experience on both iOS and Android devices.
- **Thorough Testing**: Comprehensive test coverage for each screen, addressing various edge cases and scenarios to ensure robustness.

## Setup and Configuration

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. **Clone the Repository**

    ```bash
    git clone https://github.com/Jaseyacey/zilch-code-exercise.git
    cd zilch
    ```

2. **Install Dependencies**

    ```bash
    npm install
    # or
    yarn install
    ```

3. **Run the App**

    For iOS:

    ```bash
    npm run ios
    # or
    yarn ios
    ```

    For Android:

    ```bash
    npm run android
    # or
    yarn android
    ```

### Running Tests

To run the tests, use the following command:

```bash
npm test
# or
yarn test
```

**Note**: There is a known issue with the `babel.config.js` that affects testing, particularly for the `DebitCardChangeScreen`. If you encounter issues with the Babel configuration, please review the troubleshooting section below.

## Troubleshooting

### Babel Configuration Issue

If you experience test failures related to Babel configuration, particularly with the `DebitCardChangeScreen`, consider the following steps:

1. **Check `babel.config.js`**

    Ensure your Babel configuration includes the necessary presets and plugins for React Native and TypeScript. The configuration should look something like this:

    ```js
    module.exports = function (api) {
      api.cache(true);
      return {
         presets: ["module:@react-native/babel-preset", "@babel/preset-typescript"],
      };
    };
    ```

2. **Update Dependencies**

    Ensure all relevant packages are up to date:

    ```bash
    npm update
    # or
    yarn upgrade
    ```

3. **Clear Jest Cache**

    Sometimes Jest's cache can cause issues. Clear the cache with:

    ```bash
    npx jest --clearCache
    ```

4. **Adjust Jest Configuration**

    Ensure your Jest configuration (`jest.config.js`) is set up to handle ES modules and TypeScript correctly. For example:

    ```js
    module.exports = {
      preset: "jest-expo",
      transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
      },
      transformIgnorePatterns: [
        "node_modules/(?!(react-redux|@react-native|react-navigation|expo-.*|@reduxjs/toolkit)/)",
      ],
      testPathIgnorePatterns: [
        "<rootDir>/node_modules/",
        "<rootDir>/.maestro/",
        "@react-native",
      ],
      testEnvironment: "react-native",
      setupFiles: ["<rootDir>/test/setup.ts"],
      setupFilesAfterEnv: ["<rootDir>/jest-setup-after-env.js"],
    };
    ```
