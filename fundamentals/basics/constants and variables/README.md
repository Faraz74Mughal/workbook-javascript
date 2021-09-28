# Javascript - Fundamentals - Basics

## Constants and Variables

`Constants`

```javascript
const x = 'hello word'
const y = 125
const z = false
const a = { name: 'john', age: 22 }
```

`Variables`

```javascript
let x = 'hello word'
var y = 125
let z = false
var a = { name: 'john', age: 22 }
```

`let` vs `var`

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
