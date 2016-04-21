# Testing in Javascript

To see step by step refactors just checkout the code at each commit. They loosely follow the order in the Tips section below.

## How to run tests

To run the server:

  rake jasmine

To run the automated CI task with PhantomJS:

  rake jasmine:ci

## Tips:
- using 'when' for context
- assert exceptions
- make asserts specific
- custom assertions: consolidating compound assertions in helper method
- private methods
- using submethods for long setups
