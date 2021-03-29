# # Explain HOF WITH EXAMPLE

HOF is an abbreviation for "HIGHER-ORDER FUNCTIONS". Higher order functions are functions that operate on other functions, either by taking them as argument or by returning them as an output. In simple words, A Higher-Order function is a function that receives a function as an argument or returns the function as output. 
For example, Array.prototype.map, Array.prototype.filter and Array.prototype.reduce are some of the Higher-Order functions built into the language.

# # # EXAMPLE
```
const strArray = ['JavaScript', 'Python', 'PHP', 'Java', 'C'];
function mapForEach(arr, fn) {
  const newArray = [];
  for(let i = 0; i < arr.length; i++) {
    newArray.push(
      fn(arr[i])
    );
  }
  return newArray;
}
const lenArray = mapForEach(strArray, function(item) {
  return item.length;
});
// prints [ 10, 6, 3, 4, 1 ]
console.log(lenArray);
```

# # # MAP METHOD WITH EXAMPLE
    Array.prototype.map
The map() method creates a new array by calling the callback function provided as an argument on every element in the input array. The map() method will take every returned value from the callback function and creates a new array using those values.
The callback function passed to the map() method accepts 3 arguments: element, index, and array.

# # # EXAMPLE
Let’s look at some examples:

```
const birthYear = [1975, 1997, 2002, 1995, 1985];
const ages = birthYear.map(year => 2018 - year);
// prints [ 43, 21, 16, 23, 33 ]
console.log(ages);

```
```
const products =[
  {
  name: 'laptop',
  amount: 7000,
  count: 5
  },
  {
    name: 'desktop',
    amount:3000,
    count: 7
    },
    {
      name: 'phone',
    amount:3000,
    count: 10
    }
  ];
  const totalProductsValue = products.map(item => ({
    name: item.name,
    totalValue: item.amount * item.count
  }));

  console.log(totalProductsValue);
  [ { name: 'laptop', totalValue: 35000 },
  { name: 'desktop', totalValue: 21000 },
  { name: 'phone', totalValue: 30000 } ] //RESULT/PRINTS
   
  ```

  # # # REDUCE METHOD WITH EXAMPLE
The reduce method executes the callback function on each member of the calling array which results in a single output value. The reduce method accepts two parameters: 
1) The reducer function (callback)
2) and an optional initialValue.

The reducer function (callback) accepts four parameters: accumulator, currentValue, currentIndex, sourceArray.
If an initialValue is provided, then the accumulator will be equal to the initialValue and the currentValue will be equal to the first element in the array.
If no initialValue is provided, then the accumulator will be equal to the first element in the array and the currentValue will be equal to the second element in the array.

# # # EXAMPLE

```
const euros = [29.76, 41.85, 46.5];

const average = euros.reduce((total, amount, index, array) => {
  total += amount;
  if( index === array.length-1) { 
    return total/array.length;
  }else { 
    return total;
  }
});

average // 39.37

```
//MARKUP LINK
https://adefisayo247.github.io/responsive-markup/responsive%20markup/index.html

//CODEALONG FOR 2020 MODULE THREE OBJECTS
https://adefisayo247.github.io/module3-object/

//Creating my Higher-Order Function

```
const footballTeams = [
  { name: "liverpool", yearEstablished: 1889, league: 'premiership', title: 24 },
  { name: "arsenal", yearEstablished: 1899, league: 'premiership', title: 12 },
  { name: "tottenham", yearEstablished: 1889, league: 'premiership', title: 30 },
  { name: "frankfurt", yearEstablished: 1924, league: 'bundesliga', title: 10 },
  { name: "juventus", yearEstablished: 1905, league: 'seriaA', title: 37 },
  { name: "sevilla", yearEstablished: 1936, league: 'laLiga', title: 24 },
  { name: "galatasary", yearEstablished: 1930, league: 'turkish', title: 40 },
  { name: "ajax", yearEstablished: 1905, league: 'eredivisie', title: 24 },
];

const pigInStyle = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for(let i = 0; i < footballTeams.length; i++) {
//   console.log(footballTeams[i]);
// }

// forEach

// footballTeams.forEach(function(name) {
//   console.log(name.yearEstablished);
// });

// filter

// Get 30pigs and more or less

// let eachStyles = [];
// for(let i = 0; i < pigInStyle.length; i++) {
//   if(pigInStyle[i] >= 27) {
//     eachStyles.push(pigInStyle[i]);
//   }
// }
// console.log(eachStyles)

// const eachStyles = pigInStyle.filter(function(pigs) {
//   if(pigs <= 27) {
//     return true;
//   }
// });
// console.log(eachStyles)

// const eachStyles = pigInStyle.filter(pigs => pigs <= 21);
// console.log(eachStyles)

// Filter premiership teams

// const premiershipTeams = footballTeams.filter(function(name) {
//   if(name.league === 'premiership') {
//     return true;
//   }
// });
// console.log(premiershipTeams);

// const premiershipTeams = footballTeams.filter(name => name.league === 'premiership');
// console.log(premiershipTeams);

// Get 19th-20th century teams

// const ninetiesTeams = footballTeams.filter(name => (yearEstablished.league >= 1889));

// console.log(ninetiesTeams);
// Get teams in the range of years placed in

// const teamYears = footballTeams.filter(name => (name.yearEstablished >= 1912));
// console.log(teamYears);

//map function

// Create array of footballTeams names
// const teamNames = footballTeams.map(function(name) {
//   return name.name;
// });
// console.log(teamNames);

// const yearOfTeams = footballTeams.map(function(name) {
//   return name.yearEstablished;
// });
// console.log(yearOfTeams);

// const pigry = pigInStyle
//   .map(pigs => Math.sqrt(pigs))
//   .map(pigs => pigs * 2);
// console.log(pigry);

// sort

// Sort teams by start year

// const sortedTeams  = footballTeams.sort(function(c1, c2) {
//   if(c1.yearEstablished < c2.yearEstablished) {
//     return 1;
//   } else {
//     return -1;
//   }
// });
// console.log(sortedTeams)

// const sortedTeams = footballTeams.sort((a, b) => (a.yearEstablished > b.yearEstablished ? 1 : -1));
// console.log(sortedTeams)

// Sort league
// const sortleagues = footballTeams.sort((a, b) => b - a);
// console.log(sortleagues)

// Get averageTeamTrophy

// const averageTeamTrophy = footballTeams.reduce(function(total, name) {
//   return total + (name.yearEstablished / name.title);
// }, 0);
// console.log(averageTeamTrophy)

// const averageTeamTrophy = footballTeams.reduce((total, name) => total + (name.yearEstablished / name.title), 0);
// console.log(averageTeamTrophy)

```
# # Explain the settimeout function with example
setTimeout()
Execute a specified block of code once after a specified time has elapsed. 
A function to run, or a reference to a function defined elsewhere. A number representing the time interval in milliseconds (1000 milliseconds equals 1 second) to wait before executing the code. If you specify a value of 0 (or omit the value), the function will run as soon as possible. (See the note below on why it runs "as soon as possible" and not "immediately".) More on why you might want to do this later. Zero or more values that represent any parameters you want to pass to the function when it is run.
As a consequence, code like setTimeout(fn, 0) will execute as soon as the stack is empty, not immediately. If you execute code like setTimeout(fn, 0) but then immediately after run a loop that counts from 1 to 10 billion, your callback will be executed after a few seconds.

// With a named function
let myGreeting = setTimeout(function sayHi() {
  alert('Hello, Mr. Universe!');
}, 2000)

// With a function defined separately
function sayHi() {
  alert('Hello Mr. Universe!');
}

let myGreeting = setTimeout(sayHi, 2000);

# # Explain promises with examples
A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

A Promise is in one of these states:

pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed. A pending promise can either be fulfilled with a value or rejected with a reason (error). When either of these options happens, the associated handlers queued up by a promise's then method are called. If the promise has already been fulfilled or rejected when a corresponding handler is attached, the handler will be called, so there is no race condition between an asynchronous operation completing and its handlers being attached.

As the Promise.prototype.then() and Promise.prototype.catch() methods return promises, they can be chained.

```
let myFirstPromise = new Promise((resolve, reject) => {
  // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
  // In this example, we use setTimeout(...) to simulate async code.
  // In reality, you will probably be using something like XHR or an HTML5 API.
  setTimeout( function() {
    resolve("Success!")  // Yay! Everything went well!
  }, 250)
})

myFirstPromise.then((successMessage) => {
  // successMessage is whatever we passed in the resolve(...) function above.
  // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
  console.log("Yay! " + successMessage)
});

```
# # What are side effects in programming? Examples of side effects in JS

Side effects are the easier concept. A "pure function" is a function that maps its input value(s) into an output value function plus(x, y) { return x + y; }. A "side effect" is any effect other than that return value. So, for instance:
```
function plusWithSideEffects(x, y) { alert("This is a side effect"); return x + y; } 

```
has the side effect of raising an alert dialog (and requiring user interaction). Every code function has some side effects (they all consume memory and take time, if nothing else), but when people talk about side effects, they are often most concerned with either IO (like the alert dialog above) or the writing of state that lives beyond the execution period of the function. The challenge with side effects is that they make functions harder to reason about and to reuse. (It's much easier to reason and reuse functions that are as close to "pure functions" as possible, since they tend to "do one thing well.")

Functions with side effects do something other than returning a value (though they may do that as well). If you can replace all function calls for given arguments with the value for those arguments and the program has the same behavior, there are no side effects. This requires that the function always return the same value for given arguments. That is, suppose f(1,2) == 12. If you can always replace f(1,2) with 12 and the program behaves the same way, then f has no side effects for those arguments. On the other hand, if in one place f(1,2) == 12 and another f(1,2) == 13, then f has side effects. Similarly, if the program stopped sending an email after replacing f(1,2) with 12, then f has side effects. Generally, if f(x,y) == z (where z depends on x and y) and you can always replace every f(x,y) call with z, then f has no side effects.

Some simple functions with side effects:

```
// doesn't always return the same value
function counter() {
    // globals are bad
    return ++x;
}
// omitting calls to `say` change logging behavior
function say(x) {
    console.log(x);
    return x;
}
```

