# Javascript - Fundamentals

## DeStructuring

**Object Destructuring**

```javascript
var user = {
  name: "zaeem",
  age: 24
}
var { name, age } = user;
var { name as x, age as y } = user;
```

**Array Destructuring**

```javascript
var numbers = [ 2,5,9 ]
var [ x, y, z ] = numbers;
```

**Destructuring with Spread operator**

```javascript
var numbers = [ 2,5,9,3,6,3,6,8,3,6 ]
var [ x, y, z, ...a ] = numbers;
```

**Swapping Values using Destructuring**

```javascript
[guest, admin] = [admin, guest];
```

