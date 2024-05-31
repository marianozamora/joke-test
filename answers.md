1. What's a closure? Where in the code is there a closure?
A closure is a combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment) where it was declared. This allows the function to access and manipulate variables from the outer scope even after the outer function has finished executing.

In the provided code, closures can be found in several places, particularly in the methods defined within Vue components. For example, in the JokeItem.vue component, the rateJoke and removeJoke methods are closures because they access the joke object from the outer scope (the props passed to the component).

2. Which are the potential side-effects in any function? Could you point out any of these cases in your code? Are they expected? Can they be avoided?
Potential side-effects in any function include modifying external state, such as changing global variables or modifying objects passed by reference. In the provided code, some potential side-effects can be identified:

Modifying the jokes array directly within the sortJokes and removeJoke methods in the JokeList.vue component. These methods directly mutate the jokes array, which could have unintended consequences if other parts of the application rely on the original state.
Modifying the rating property of individual jokes within the rateJoke method in the JokeItem.vue component. This also modifies the state of the jokes array indirectly.
While these side-effects are expected in this specific application (as they are part of the intended functionality), they could potentially lead to bugs or unexpected behavior if not handled carefully. To minimize the risk of unintended side-effects, it's good practice to:

Use immutable data structures or make defensive copies of objects before modifying them.
Clearly document the intended behavior of functions and methods, especially if they have side-effects.
Separate concerns and keep functions and methods focused on specific tasks to reduce the likelihood of unintended side-effects.