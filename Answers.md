1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

        .map(), .filter(), and .reduce() are all methods that we can use that do not mutate the array, they create a new array, therefore, there are no side-effects when using them.
        The spread operator (...) spreads the properties of an object into a new object.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

        The store is known as the single source of truth because it holds the state, which should never be mutated.
        Actions in redux hold action creators and action types. Whereas reducers, take in the actions and dispatch them. 

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

        Application state allows us to never have to question which of our components should hold state and which shouldn't, because action state is immutable, therefore,
        we never mutate the state we just make copies of it and do actions to the copies, not the original initial state. However, component state, allows components to all have state,
        if a programmer would want them too, which brings up issues of which should and which shouldn't? But if you use action state all of the state is handles in one spot.

1.  What is middleware?

        Middleware allows us to insert a function into a function that can intercept a process and then allows us to do something or perform an action before the function continues.
        Middleware can also be used to stop and function in mid-process if certain requirements are met.


1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

        Redux-thunk is middleware that allows us to perform async operations inside of our action creators.

1.  Which `react-redux` method links up our `components` with our `redux store`?

        Provider links our components with the redux store.
