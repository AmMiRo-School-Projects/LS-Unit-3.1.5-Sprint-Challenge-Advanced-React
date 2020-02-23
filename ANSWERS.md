- [x] Why would you use class component over function components (removing hooks from the question)?

  - If there are no hooks to consider, class components allow us to initialize, and use state and state logic for the functional components that will need that data passed to them.

- [x] Name three lifecycle methods and their purposes.

  1 - ComponentDidMount is a method that we use to use an element mounting to a page as a trigger for other actions.
  2 - ComponentDidUpdate is a method we use to use an element updating as a trigger for other actions.
  3 - ComponentWillUnmount is a method we use to use an element's unmounting as trigger for other actions.
  4 - Render is a method we use to change the DOM and display (or render) an element

- [x] What is the purpose of a custom hook?

  - A custom hook is used to take functional code that we will be using repeatedly and allow us to write it once and import it to be used in multiple components.

- [x] Why is it important to test our apps?

  - As developers we inevitably make assumptions about how our own code will behave. Testing allows us to evaluate our code against our bias.
