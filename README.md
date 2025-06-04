# Hello World DDD Example

This project demonstrates a very small example of applying Domain Driven Design (DDD) and Test Driven Development (TDD) practices in a JavaScript application. It renders a simple **Hello World** message in the browser while keeping domain logic separate from the UI.

## Project Goals

* Showcase a minimal DDD folder structure.
* Provide an entry point for a web application that displays "Hello World".
* Include a domain service encapsulating the greeting message.
* Supply unit tests for both domain logic and UI behaviour using Jest.

## DDD Layers

```
src/            # application entry point (presentation layer)
domain/         # domain models and services
infrastructure/ # infrastructure or external interfaces (empty for now)
tests/          # unit tests
```

The UI (in `src/`) relies on the domain layer to obtain the greeting message. Infrastructure is reserved for any future persistence or external APIs.

## Running the Application

Open `src/index.html` in a browser. It will load the script in `src/main.js` which uses the `GreetingService` from the domain layer to display the message inside the page.

## Running Tests

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the tests:
   ```bash
   npm test
   ```

The tests use [Jest](https://jestjs.io/) and cover both the domain service and a small piece of UI logic.

## Development Approach

Following a TDD style, tests are written for the `GreetingService` and the UI rendering function. The structure keeps the domain code separate from presentation logic in accordance with DDD guidelines, enabling future growth while maintaining clear boundaries.
