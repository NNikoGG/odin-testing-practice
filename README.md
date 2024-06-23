# Jest Testing Practice

This project is designed to practice writing tests with Jest. Testing is a critical component of software development, ensuring that functions perform as expected and making it easier to maintain and refactor code with confidence.

## Setup for ES6 Import Statements with Jest

Jest requires additional setup to use ES6 import statements. You'll need Babel for Jest to understand ES6 modules. Follow these steps to configure your project:

1. Install Babel dependencies:

```bash
   npm install --save-dev @babel/core @babel/preset-env babel-jest
```

2. Create a Babel configuration file babel.config.js with:

```bash
module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}]
  ],
};
```

3. Ensure your Jest configuration in package.json includes:

```bash
"jest": {
  "transform": {
    "^.+\\.js$": "babel-jest"
  }
}
```

## Tests Written

1. **Capitalize Function**
   Tests if the function properly capitalizes the first letter of a string and leaves the rest of the string unchanged.

2. **Reverse String Function**
   Verifies that the function correctly reverses the characters of a string without altering the original string's content.

3. **Calculator Object**
   Contains tests for each arithmetic operation (add, subtract, divide, and multiply), ensuring correct calculations and handling of edge cases like division by zero.

4. **Caesar Cipher Function**
   Tests the cipher's functionality to:

   - Shift characters by a specified amount.
   - Wrap from 'z' to 'a' and preserve letter cases.
   - Leave punctuation and spaces unchanged.

5. **Analyze Array Function**
   Tests the function to calculate and return the average, minimum, maximum, and length of an array of numbers. Additional tests verify behavior with empty and non-array inputs.

## Running the Tests

Execute the tests by running:

```bash
npm test
```

This command initiates Jest to execute all test suites, validating each function's behavior as specified in the tests.
