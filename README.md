

# Test One

You will be required to write the aswers to the questions below.
```
> Concept of linting 
```
Linting is a tool that analyzes code to flag errors, bugs or style errors.
Usually included with IDE programs.

```
> Understanding of promises and at least an idea of async/await and why they're used over promises
```
In traditional Javascript, we rely heavily on Callbacks, but those can be a bit un-intuitive.
If code gets too nested, or callbacks go too deep, you can end up in callback hell.
Promises are used for deffered or asynchronous computations. 
A promise represents an operation that hasn't completed yet, but is expected in the future.

With Promises you are able to run asynchronous, but you can set certain orders to certain things… i.e. "Don't do this certain thing until you get this file back"
Other things will be occuring during this process, but you can define what occurs and when.

Async/Await is the new/better way to write asynchronous code. It's built on top of promises. 
It's more popular because it's cleaner, with less code to write than promises. It also allows conditionals to be written without deep nesting and can handle both asynchronous and synchronous errors.

```
> Why do we need states in applications? 
```
State is where all the component's data is stored.
State can be modified through actions. 
In React, State is mutable, unlike Props which should remain unmutable.
```
> Why do we need global state management with something like Redux
```
Global State allows for Redux to provide a "single source of truth". The State of the entire app gets stored within a single "store". It then becomes read-only, and you can only change state by triggering an action. Those actions or changes should only be made by pure functions, i.e. a reducer.
```
> What is cascading in CSS and what problem does styled components or similar CSS in JS solutions solve
```
CSS means Cascading Style Sheets, the term Cascading in this context means that because more than one stylesheet line of code could apply to an element in HTML, there has to be a way of determining which specific rule will affect the piece of HTML.
So CSS relies on general rules that "cascade down" and allows for the most specific rule to be applied.

Good practice is to have your CSS component in a separate file, outside your JS or HTML, so you can control which elements are affected more easily.
```
> What is scoping in JS? 
```
Scope is how accessible/where/how visible something (a variable, etc) is.
There's Local Scope and Global Scope.
Scope is always visible upwards (or outwards).
```
> What is lexical scope?
```
Lexical scope in Javascript means that variables which are declared outside a function can be accessed inside another function. But the opposite is not true; variables inside a function cannot be accessed outside that function.
It's a concept based around closures.
```javascript
For example:
let ten = 10;

let add = () => {
  let twenty = 20;
  return ten + twenty;
};
```
if you call add() it will return 30.

This is because the add() function can access or "see" the `ten` variable (on the global scope), which is defined before the function add().
Functions in Javascript will look up variables in the context where they are defined, and not in the scope that immediately surround them.
```
> What is the idea of immutability or immutable state
```
Because you never want to mutate (change) an array in React, you should treat props as immutable.
Any changes you make should return a new array, and not mutate the original array.


# Test Two found at: 
[165.227.11.32](http://165.227.11.32)
It is responsive for desktop and tablet, not for mobile (since there is a mobile app already).

