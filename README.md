# To Do List

Author: Katy Roffe
Deployment:

## About

A web Application for securely managing a To Do list.

[Full Requirements](https://codefellows.github.io/code-401-javascript-guide/curriculum/apps-and-libraries/todo/)

## Phase 1

- Refactor the starter code
- Modularize the application into separate components
- Style the application using the [Blueprint Component API](https://blueprintjs.com/docs/#blueprint)
- Implement the Context API to make some basic applications setting available to components
  - how many to do items to show at once
  - whether or not to show completed items

## Phase 2

- Implement the Context API to make some basic application settings available to components
  - How many To Do Items to show at once
  - Whether or not to show completed items
- Provide the users with a form where they can change the values for those settings
  - This should be given in the form of a new component, perhaps linked to from the main navigation
  - Hint: Use Browser Router to create the page/route/component for this

## Phase 3

- As a user, I want to provide a way for other users to create new accounts
- As a user, I want to provide a way for all users to login to their account
- As a user, I want to make sure that my To Do items are only viewable to users that have logged in with a valid account.
- As a user, I want to ensure that only fellow users that are allowed to “create”, based on their user type, can add new To Do Items
- As a user, I want to ensure that only fellow users that are allowed to “update”, based on their user type, can mark To Do Items complete
- As a user, I want to ensure that only fellow users that are allowed to “delete”, based on their user type, can delete new To Do Items

## Phase 4

- Alter the Add, Toggle Complete, and Delete functions within your to do application to use your API instead of in memory state.
  - Fetch the current list of items from the database on application start
  - Whenever you add/update/delete an item, refresh the state so the user can instantly see the change
    - Consider: Do you re-fetch from the server every time you make a change?
      - If so, how?
      - If not, how will you stay in sync?
- Alter the Login Context to use the server to login users instead of our mock users list.
  - Be sure to store the token in state as well as in a cookie so you can reference it later.
