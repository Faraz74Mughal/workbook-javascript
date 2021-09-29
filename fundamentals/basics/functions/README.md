# Javascript - Fundamentals - Basics

## Functions

**ES5 Functions**

`Syncronous`

```javascript
function Multiply( p1, p2 ) {
  return p1 * p2; 
}

var x = Multiply( 5, 10 );
```

`Asyncronous`

```javascript
async function action() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000)
  });

  // wait until the promise resolves (*)
  let result = await promise;

  console.log(result)
}

action()
```

**ES6 Functions**

`() => {}` Lambda Functions

`Syncronous`

```javascript
const add = ( a, b ) => {
    return a + b;
}
var x = add( 2, 7 );
```

`Asyncronous`

```javascript
const action = async () => {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000)
  });

  // wait until the promise resolves (*)
  let result = await promise;

  console.log(result)
}

action()
```