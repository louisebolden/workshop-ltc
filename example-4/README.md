# Learning to Code vs Coding at Work

## Demo/Example 4

This repo contains an example frontend app and an example backend app, to demo a separation of concerns and communication between the two.

### To Set Up This Project On Your Local Machine

1. Make sure you've forked the parent repo and cloned your fork, as described in [Example 1](../example-1/README.md)
2. From the cloned `workshop-ltc` directory on your machine, run `cd example-4` to navigate into this example's directory

#### To Run The Backend App

1. Make sure you have Node installed on your machine using a version manager like NVM ([instructions](https://github.com/nvm-sh/nvm#installation-and-update))
2. Run `node server.js` from the `./example-4/backend` directory

#### To Run The Frontend App

1. Run `yarn` from the `./example-4/frontend` directory
2. Run `yarn http-server` from the same directory
3. Visit http://localhost:8000 in your browser to view the project

### Learn & Do

Take a look at line 11 of `./example-4/frontend/components/button.js`, where it says "your work goes here".

How can you update the code in the frontend and backend projects to make the backend server send some data about products (or any data you'd like) to the client when requested?
