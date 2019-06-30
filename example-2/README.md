# Learning to Code vs Coding at Work

## Demo/Example 2

This repo contains some example code and some tasks as a simple intro to unit testing.

### To Run This Project

1. Clone this example project with `git clone git@github.com:louiseswift/workshop-ltc-2.git`
2. Run `cd workshop-ltc-2` to navigate into the project root directory
3. Run `yarn install` from the project root directory
4. Install http-server and run `http-server -p 1234` from the project root directory
5. Visit http://localhost:1234 in your browser to view the project

### Learn & Do

1. Review the code in `index.html` and `js/index.js`
2. Uncomment and examine the last line in `js/index.js`
3. Uncomment and examine all lines in `tests/fancySum.test.js`
4. Run `yarn test` from the project root directory to see the result
5. Update this example project to have a new component that multiplies values in inputs, and write a new test to check that your `fancyMultiply` function does what you expect it to do
6. Review the code in `cypress/integration/index.spec.js`, and run `./node_modules/.bin/cypress open` to see the integration test result
7. Add an integration test for the new multiply component
