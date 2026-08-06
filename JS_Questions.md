## 1. What is Js? Different ways to use Js?

1. JavaScript is a single-threaded Language
2. Javascript is scripting and Programming Language.
3. Javascript is interpreted language used to make web pages interactive.
4. Originally browser-only, now runs everywhere via Node.js.
5. Javascript is Object Based Language.
6. Javascript has only 1 callstack.

There are 2 ways to use js:-

1. Internal Js
   ```
   <Script>
     console.log("Hello dev - Internal Js");
   </script>
   ```
2. External Js
   ```
       <script src="script.js"></script>
   ```

## 2. What is JRE?

To execute JS code we need an environment which is called JRE,

```
   JRE = JS-engine + event loop + call stack + Web APIs + callback queue + Microtask Queue.
```

## 3. What is the use of "async" and "defer" keyword in script tag?

#### async

```
  <script async src="analytics.js"></script>
```

- Script is fetched in parallel with HTML parsing
- Execution happens as soon as it downloads, interrupting parsing
- Order is NOT guaranteed - whichever downloads first runs first
- Only works on external scripts

#### defer

```
  <script defer src="app.js"></script>
```

- Script is fetched in parallel with HTML parsing
- Execution happens after HTML is fully parsed, before DOMContentLoaded.
- Order is guaranteed - multiple deferred scripts execute in document order
- Only works on external scripts

## 4. why we use crossorigin attribute in script tag?

The crossorigin attribute tells the browser to fetch a cross-origin script using a CORS request instead of a simple fetch.

```
// Sends CORS request with no credentials (no cookies, no auth headers)
<script crossorigin="anonymous" src="url" ></script>
```

```
// Sends CORS request with credentials
<script crossorigin="use-credentials" src="url" ></script>
```

## 5. Difference between "var" vs "let" vs "const"

1. var:-
   - Variable declared with var keyword goes to global scope.
   - Multiple time declarations.
   - Multiple time initializations.

2. let:-
   - Variable declared with let keyword goes to block scope.
   - One time declaration.
   - Multiple time initializations.

3. const:-
   - Variable declared with const keyword goes to block scope.
   - One time declaration.
   - One time initialization.

## 6. What is Scope and types of scope in js?

- Scope defines the visibility and accessibility of a variable.

- In js we have 2 types of scope
  1.  Global Scope
  2.  Block Scope (Local Scope or Function Scope)

---

## 7. What is Type Coercion or Type Coversion?

    To convert one type of data into another type with the help of js engine is know as type coercion.

    Types of Type Coercion:
    1. Implicit Type Coercion
        - To convert one type of data into another type automatically(implicity) by js engine  is know as type coercion.

    2. Explicit Type Coercion
    - To convert one type of data into another type forcefully(explicity) by js engine  is know as type coercion.

    - Here we use some inbuild methods
      - Number()
      - String()
      - BigInt()
      - Boolean()
      - Symbol()

## 8. What is truthy and falsy ?

1. **Truthy**: The values converted or treated as true is known as truthy values.
2. **Falsy**: The values converted or treated as false is known as falsy values.

+0
-0
0.0
0n
Nan
null
undefined
"" (empty string)

## 9. Difference between null and undefined

**1. null**

- null is an intentional absence of any object value.
- It is used when you want to explicitly say “there is no value”.

```
let user = null;       // intentionally no user
```

**2. undefined**

- A variable has been declared but has not been assigned any value.
- It represents the absence of value.

```
let a;
console.log(a);        // undefined

let b = undefined;     // explicitly set
console.log(b);        // undefined
```

## 10. Difference between undefined and not defined?

**1. undefined (Value)**

- It is a value that JavaScript assigns automatically.
- It means: "The variable is declared but not assigned any value yet."

**2. not defined (ReferenceError)**

- This is not a value, it's an error.
- It means: The variable is never declared in the current scope.

## 11. Difference between == (loose equality) and === (strict equality)?

**1. === Strict Equality (Recommended)**

- Checks both value and data type.
- No type conversion happens.
- Returns true only if both sides are identical in value and type.

**2. == Loose Equality**

- Converts both sides to the same type (type coercion) before comparing.
- Only compares the value after conversion.

## 12. Difference between != (loose not equality) vs !== (strict not equality)?

**1. !== Strict Inequality (Recommended)**

- Returns true if value or type is different.
- No type coercion.

**2. != Loose Inequality**

- Converts both sides to the same type first, then compares.
- Returns true if they are not equal after conversion.

## 13. What is String? Types of String in JS?

A String in JavaScript is a primitive data type used to represent collection of characters.

Types of String:- It is of 2 types

1. Single Line String

- A single-line string is a string that is written in one line only.
- You can create it using: - Single quotes (' ') - Double quotes (" ")

2. Multi Line String (Template String)

- A multi-line string is a string that spans across multiple lines.
- You can create it using: - Backticks (``)

## 14. What is Hoisting?

- **Definition:** Hoisting is a JavaScript behavior of moving variable and function declarations to the top of their scope during the compilation phase
- Hoisting happens during the compilation phase, before the code starts running.
- Only declarations are hoisted, not initializations.
- variable declared with "var", "let" and "const" supports hoisting.

## 15. What is Temporal Dead Zone?

- **Definition:** It is the time frame between variable declaration and variable initializations. In this time frame we can not access a variable.

- variable declared with let and const belongs to temporal dead zone(tdz).

## 16. What is Function?

1. Function is a block of code which is used to perform some specific task.
2. Function is an Object or non-primitive (reference-based)type of data.
3. The main advantage of is we can achieve code reusability.
4. The name of a function is called function name, function reference or variable name.
5. To call a function we need function name and paranthesis.
   ```
      example:-     findSum()
   ```
6. The values passed during function call statement is known as arguments.
7. The variables defined in function defintion to store arguments is known as parameters.
8. The variable declared with var,let and const inside a function are local scope or function scope.

**Types of Function:-**

1. Function Declaration Statement
2. Function as Expression/ First Class Function
3. Immediately Invoked Function Expression (IIFE)
4. Arrow Function (=>)
5. Higher Order Function (HOF)
6. Callback Function (CF)

# 17. What is Arrow Function?

- Arrow Functions are a shorter way to write functions in JavaScript (introduced in ES6).
- They are especially popular for callbacks, array methods, and when you want shorter syntax.

**Types of Arrow Fucntion**

1. Implicit Return Type:

- When your function body is of a single line, you can remove the curly braces {} and the return keyword. The value is implicitly returned.

```
const add = (a, b) => a + b;
```

2. Explicit Return Type:

- When you use curly braces {}, you must use the return keyword (explicit return).

```
const add = (a, b) => {
    const sum = a + b;
    return sum;        // Explicit return required
};
```

# 18. What is Higher Order Function?

- The function which accepts another function as an argument.
- The function which returns another function.

# 19. What is Callback Function?

- The function which is passed to another function as an argument.
- The function which is returned by another function.

# 20. What is Closure? Disadvantage of closure?

A closure is a function which gives you access to an outer function’s scope from an inner function, even after the outer function has finished executing.

**Disadvantages**

1. High Memory Consumption
2. Memory Leaks
3. Slightly Slow Performance
4. Harder to Debug
5. Unexpected Behavior

# 21. What is Function Currying?

- Currying is a functional programming technique in which a function that takes multiple arguments is converted into a sequence of functions, each taking one argument at a time.
- Instead of calling a function like this:

```
add(2, 3, 4)
```

- You call it like this:

```
add(2)(3)(4)
```

**Syntax of Function Currying**

```
function add(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        }
    }
}

console.log(add(2)(3)(4)); // 9
```

## 22. What is Array in JS?

1. Array is object in javascript.
2. It is non-primitive type of literal.
3. It is a block of memory which is used to store multiple type of value (any type of literal) in same memory block.
4. Array size is dynamic (size is not fixed like other languages) , it means we can store 'N' number of elements and JS engine will handle memory usage automatically.
5. Values stored inside array are refered as array elements.
6. Array elements are arranged in a sequence that is represented by integer number called as index.
7. We can access the array element with the help of array object reference , square brackets and index ( array_object_ref[index] ).
8. If we try to access the index that it greater than the array length we will get undefined.

**push** - Inserts one or more elements to the end of an array, mutates original, returns new length.
**pop** - removes the last element from an array, mutates original, returns the removed element.
**shift** - removes the first element from an array, mutates original, returns the removed element.
**unshift** - Inserts one or more elements to the beginning of an array, mutates original, returns new length.

## 23. Difference between map and forEach?

**forEach:-**

1. It is used to iterate over an array.
2. It is Higher Order Function.
3. It returns undefined.

**map:-**

1. It is used to iterate over an array.
2. It is Higher Order Function.
3. it returns a new transformed array of the same length.

## 24. Difference between map and filter?

**map:-**

1. It is used to iterate over an array and transform each element.
2. It is a Higher Order Function.
3. It always returns a new array of the same length.

**filter:-**

1. It is used to iterate over an array and select elements based on a condition.
2. It is a Higher Order Function.
3. It returns a new array that may be shorter than the original (returns empty array[] if no match is found).

## 25. Difference between find and filter?

**find:-**

1. It is used to iterate over an array and return the first element that satisfies the condition.
2. It is a Higher Order Function.
3. It returns a single element or undefined if no match is found.

**filter:-**

1. It is used to iterate over an array and return all elements that satisfy the condition.
2. It is a Higher Order Function.
3. It returns a new array (empty array[] if no match is found).

## 26. Difference between some and every?

**some:-**

1. It is used to check if at least one element in an array satisfies the condition.
2. It is a Higher Order Function.
3. It returns true if any one element passes the test, otherwise false.

**every:-**

1. It is used to check if all elements in an array satisfy the condition.
2. It is a Higher Order Function.
3. It returns true only if all elements pass the test, otherwise false.

## 27. What is reduce function?

1. It is used to iterate over an array and accumulate all elements into a single output value.
2. It is a Higher Order Function.
3. It takes a callback function with two arguments: accumulator and current value.
4. It returns a single value (number, string, object, or array)

## 28. what is reduceRight function?

1.  It is used to iterate over an array from right to left and accumulate all elements into a single output value.
2.  It works exactly like reduce, but processes elements in reverse order.

## 29. What is Object?

1. An Object is a block of memory which has state(variable) , behaviour(methods) and where we can store heterogenous data.
2. An object is a collection of key-value pairs that can contain various data types, such as numbers, strings, arrays, functions, and other objects.

## 30. What is Shallow Copy and Deep Copy?

**Shallow Copy**

1. The copy of object that is directly connected with original object is called as shallow object.
2. Here, we store reference of original object in a new varaiable , now new variable starts pointing to same memory block.

**Deep Copy**

1. The copy in which original object is not connected with it's copy , is called as Deep copy.
2. Here , we create separate empty object and after that we copy key-value pair of original object into new empty object.

## 31. What is Destructuring?

1. The process of extracting the values from the array or object into the variables is known as destructuring.
2. The two most used data structures in JavaScript are Object and Array, both allows us to unpack individual values into variables.

## 32. What is JSON?

1. JSON stands for javascript object notation.
2. It is data only format to represent values and objects.
3. It is used to transfer data between applications through apis.
4. JSON keys must be strings enclosed in double quotes.
5. It supports six data types: object, array, string, number, boolean, and null.
6. It supports nested structures, allowing objects and arrays to be nested within each other.

**1. JSON.stringify(value)**

- JSON.stringify() is a method that converts a JavaScript object or value into a JSON string.
- Returns JSON.
- It does not support : function properties,symbolic keys and values and Properties that store undefined.

**2. JSON.parse(value)**

- JSON.parse() is a method that converts JSON string into JavaScript object or value.
- Returns plain javascript object.

## 33. What is ES Module?

- JavaScript's official module system (ES2015). Splits code across files using import and export.

**Named Export**
Exports multiple specific bindings from a file. The name must match exactly on import.

```
js// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
```

```
js// main.js
import { add, subtract } from './math.js';
```

One file can have many named exports.

**Default Export**
Exports a single primary value from a file. No curly braces on import. Importer can name it anything.

```
js// logger.js
export default function log(msg) {
  console.log(msg);
}
```

```
js// main.js
import log from './logger.js';
import printMessage from './logger.js'; // also valid, same thing
```

One file can have only one default export.

## 34. what is this keyword?

1. this is a keyword which refers to the current execution context of a function.
2. It is a variable , which holds the reference.
3. It is a local variable of every function in js, and holds the address of window object. Except in Arrow function (for arrow function is stores undefined).
4. Inside object methods, 'this' holds the reference of current object(not in arrow function).

## 35. What is call, apply and bind?

All three methods are used to set this keyword's value explicitly.

**call**: Invokes the function immediately. Arguments passed one by one.

**apply**: Invokes the function immediately. Arguments passed as an array.

**bind**: Does not invoke the function. Returns a new function with this permanently locked. You call it later.

## 36. What is DOM?

1. The Document Object Model (DOM) is a programming interface for web documents that represents the HTML or XML document as a tree structure, where each node represents an element, attribute, or piece of text in the document.
2. When a web page is loaded, the browser creates a DOM tree that represents the document's structure and content.

## 37. What is DOM API?

The DOM API (Application Programming Interface) is a set of programming interfaces and methods that allow developers to interact with the DOM tree and manipulate the content and structure of web documents.

## 38. What the difference dom selectors methods?

**1. getElementById('id_name')**
It returns reference of single element object where id_name matches.

**2. getElementsByClassName('class_name')**
It returns htmlcollection all elements matches with class name.

**3. getElementsByTagName('tag_name')**
It returns htmlcollection all elements matches with tag name.

**4. querySelector('css_selector')**
It returns reference of the first element that matches a specified CSS selector.

**5. querySelectorAll('css_selector')**
It returns Nodelist of all elements that matches a specified CSS selector.

## 39. What is the difference between append(element) and appendChild(element)?

**append(element)**
It is used to insert many element as last child.

**appendChild(element)**
It is used to insert only one element as last child.

## 40. What is Event?

The actions performed by the used is known as Events.

## 41. What is Event Object?

1. Event object is a object created by the browser when user perform some action.
2. It holds 2 things
   i) type of event (all information)
   ii) the element on which the event occurred.

## 42. What is Event Listeners?

Event listeners are functions that wait for a specific event to occur and then execute js code (callbacks) assigned to it.

## 43. What is Event Propagation?

Event Propagation is the mechanism by which an event travels (or "propagates") through the DOM tree when an event occurs on an element.

**1. Capture Phase (top-down)**
The event travels from window down to the target element.

**2. Target Phase**
The event reaches the element it was fired on.

**3. Bubble Phase (bottom-up)**
The event bubbles back up from the target to window.

## 44. Difference between stopPropagation() and stopImmediatePropagation() ?

**stopPropagation()**

1. Stops the event from bubbling up to parent elements
2. Other listeners on the same element still execute
3. Only blocks upward/downward DOM traversal

**stopImmediatePropagation()**

1. Stops bubbling up to parent elements
2. Also kills remaining listeners on the same element
3. Listener execution order depends on registration order
4. First listener to call it wins, rest are silenced

## 45. What is Event Delegation?

1. Event delegation is a js technique.
2. Instead of attaching an event listener to every individual child element, you attach a single event listener to a common parent element.

## 46. What is Local Storage?

LocalStorage is a web storage API that allows developers to store key-value pairs in a web browser with no expiration time. The data stored in LocalStorage persists even when the browser is closed and reopened.

1. localStorage.setItem("key","value")
2. localStorage.getItem("key")
3. localStorage.removeItem("key")
4. localStorage.clear()

**Medium Link:** https://medium.com/@shankavieducationalinstitute/leveraging-localstorage-and-sessionstorage-in-react-278698d42097

## 47. What is Session Storage?

Similar to LocalStorage, SessionStorage is a web storage API that stores data as key-value pairs. However, the key difference is that SessionStorage data is only accessible during the lifetime of a page session. Once the browser tab is closed, the stored data is cleared.

1. sessionStorage.setItem("key","value")
2. sessionStorage.getItem("key")
3. sessionStorage.removeItem("key")
4. sessionStorage.clear()

## 48. What is Debouncing?

Debouncing ensures that a function is only executed after a specified delay has passed since the last time it was invoked. If the event fires again before the delay ends, the timer is reset.

**In simple terms:**
It waits for the user to "stop" doing something before running the function.
It's like waiting for someone to finish typing before searching.

**Use Cases:**
Search input fields (don't search on every keystroke)
Form validation
Window resizing
Button clicks (prevent double submission)

## 49. What is Throttling?

Throttling ensures that a function is executed at most once in a given time interval, no matter how many times it's triggered.

**In simple terms:**
It limits the function to run at regular intervals (e.g., maximum once every 200ms).
Even if the event fires 100 times in 200ms, the function runs only once in that period.

Use Cases:
Scroll events (infinite scrolling, parallax effects)
Mouse movement tracking
Game loops
API calls during rapid user interaction

## 50. What is Event Loop?

The Event Loop is the core mechanism in JavaScript that allows it to be asynchronous despite being single-threaded.

**Working**
The Event Loop continuously checks whether the Call Stack is empty. If it is, it takes tasks from the Microtask Queue and Macrotask Queue and pushes them to the Call Stack for execution.

## 51. What is Micro Task Queue (Job Queue)?

Micro Task Queue is a queue that holds high-priority tasks that should be executed as soon as possible, right after the current synchronous code finishes, but before the next macrotask.

**Tasks that go into Microtask Queue:**
Promise callbacks (.then(), .catch(), .finally())
queueMicrotask()
MutationObserver
process.nextTick() (in Node.js)

## 52. What is Macro Task Queue (Task Queue)?

Macro Task Queue contains lower-priority tasks that represent actions that should happen after the current execution context and all microtasks are done.

## 53. What are the drawbacks of callback?

**1. Callback Hell:**
Callback Hell (also known as Pyramid of Doom) is a common anti-pattern in asynchronous JavaScript (especially Node.js) where multiple nested callbacks make the code extremely hard to read, debug, and maintain.

**2. Inversion of Control:**

- Inversion of Control is a design principle where the control of program flow is handed over from the main code to a framework, container, or another piece of code.

- Instead of your code calling everything directly, external code (framework/library) calls your code at the

## 54. What is Promise?

Promise is special type of object which represents eventual completion (or failure) of an asynchronous operation.

Promise has 3 states/ Promise life cycle methods

1. pending: initial state, neither fulfilled nor rejected.
2. fulfilled: meaning that the operation was completed successfully.
3. rejected: meaning that the operation failed.

## 55. What is async await?

async/await is a syntactic sugar (cleaner way of writing) for working with Promises. It makes asynchronous code look and behave more like synchronous code.

async: Declares a function as asynchronous. An async function always returns a Promise.
await: Pauses the execution of the async function until the Promise is resolved (or rejected). Can only be used inside an async function.

```
async function myFunction() {
  try {
    const result = await somePromise();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
```

## 56. What is fetch?

fetch is a modern, built-in browser API used to make HTTP requests (GET, POST, PUT, DELETE, etc.) to servers.

- It is a function that returns a Promise.
- It replaces the older, more complicated XMLHttpRequest.
- It is used to fetch data from APIs or send data to a server.

```
fetch(url, options)
  .then(response => response.json())  // or .text(), .blob(), etc.
  .then(data => console.log(data))
  .catch(error => console.error(error));
```
