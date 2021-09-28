# Javascript - Fundamentals - Basics

## Constants, Variables and DataTypes

`Constants`

```javascript
// String
const x = 'hello word'

// Number
const y = 125

// Boolean
const z = false

// Date
const c = new Date()

// Object
const a = { name: 'john', age: 22 }

// Array
const b = [1, 2, 3, 4, 5, 6]

// Function
const doSomething = () => {
  return 'Hello World'
}
```

`Variables`

```javascript
// String
let x = 'hello word'

// Number
var y = 125

// Boolean
let z = false

// Date
var c = new Date()

// Object
var a = { name: 'john', age: 22 }

// Array
let b = [1, 2, 3, 4, 5, 6]

// Function
let doSomething = () => {
  return 'Hello World'
}
```

`let` vs `var`

`var` variables are accessible outside ther scope

```javascript
function action() {
  let a = 10
  console.log(a)
}

action()
```

```javascript
function action() {
  var a = 10
  console.log(a)
}

action()
console.log(a)
```
