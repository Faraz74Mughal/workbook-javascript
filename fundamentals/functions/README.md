# Javascript - Fundamentals

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
const add = ( a = 0, b = 0 ) => {
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

**Callback Functions**

```javascript

const first = ( cb = null ) => {
  
  console.log("First Method")

  if( cb != null ) cb()
}

const second = () => {
  console.log("Second Method")
}

first( second() )
```

**Anonymous Functions**

```javascript
// ES5
(function(){
  console.log("Hello world")
})()

// ES6
(()=>{
  console.log("Helo world")
})()
```

**Function returning Function**

```javascript
const makeGreet = (type) => {
  return (name) => {
    return () => {
      if( type == 'morning' ) {
        return `Good Morning, ${name} !`
      } else {
        return `Good Night, ${name} !`
      }
    }
  }
}

const Greeter = makeGreet("night");
const Greet = Greeter("james")
const GreetingSentence = Greet()

console.log( GreetingSentence )
```

**Recursive Functions**

```javascript
const factorial = (num) => {
  if( num == 1 ) {
    return num;
  } else {
    return num * factorial( num - 1 )
  }
}

console.log( factorial(5) )
```

**Functional Objects**

```javascript
function Book(type, author) {
    this.type = type;
    this.author = author;
    this.getDetails = function () {
        return this.type + " written by " + this.author;
    }
}

Book.prototype.getType = function() {
  return `Book type is ${this.type}`;
}

var book = new Book("Fiction", "Peter King");

console.log(book.getDetails(), book.getType());
```

**Functional Class**

```javascript
var A = /** @class */ (function () {
    function A() {
        console.log("Created !");
    }
    A.prototype.getName = function () {
        return this.name;
    };
    A.prototype.setName = function (value) {
        this.name = value;
    };
    return A;
}());
var B = new A();
console.log(B.setName("james"));
```

**Chained Functions**

```javascript
const dog = {
  is: null,
  log: () => console.log(this.is),
  bark() {
    this.is = "woofing";
    this.log();
    return this;
  },
  walk() {
    this.is = "walking";
    this.log();
    return this;
  },
  eat() {
    this.is = "eating";
    this.log();
    return this;
  }
};

// Functions Chain
dog.bark().eat().walk();
```