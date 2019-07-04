# Learning to Code vs Coding at Work

## Demo/Example 6: Build Tools

Here, we have a small example of using the Webpack build tool to compile two JavaScript files (containing ES6 syntax) into one minified ES5 file.

If you followed [Example 4](https://github.com/louiseswift/workshop-ltc/tree/master/example-4), you'll notice it's essentially the same mini-app. The key difference here is that we're transpiling the JavaScript. This means converting any modern ES6 syntax into ES5 syntax that will work on a greater variety of browsers.

### Learn & Do

If needed, install Yarn first. [Instructions here](https://yarnpkg.com/lang/en/docs/install/#mac-stable) - recommend going with the `brew install yarn` option if you're on a Mac.

Then:

1. Run `yarn` from the `./example-6` directory
2. Run `yarn http-server` from the same directory
3. Visit http://localhost:8000 in your browser to view the project and check the browser console - has the page loaded successfully or do you see an error? (Note: The error isn't very helpful but it's showing because removing the `type="module"` attribute from the `<script>` tag in `index.html` means that your browser now cannot execute the `import` statement in `index.js`)
4. Take a look at the `webpack.config.js` file in this project - what does this configuration seem designed to do?
5. Move `index.js` into the `src/` subdirectory, and update the path of its `import` statement accordingly
6. Now run `npx webpack` from the project directory and notice the appearance of the `/dist` subdirectory and its contents - does the output of the command you ran let you know what has been generated there?
6. Make sure to update the `<script>` tag in `index.html` to point to the newly transpiled `dist/main.js` file
7. Reload the project in your browser to make sure the page now loads successfully

Webpack is a powerful build tool, with lots of capabilities and good documentation nowadays! Try [adding a Watch mode](https://webpack.js.org/guides/development#using-watch-mode) to have Webpack automatically re-run when you save changes to your files. With [webpack-dev-server](https://webpack.js.org/guides/development#using-webpack-dev-server), you can even have the page automatically refresh to show your changes.
