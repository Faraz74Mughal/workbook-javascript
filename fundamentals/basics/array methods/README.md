# Javascript - Fundamentals - Basics

## Array Methods


```javascript
var numbers = [ 1, 2, 3, 4 ]
var numbers = new Array( 1, 2, 3, 4 )
```

- list.length()
- list.sort()
- list.forEach( function )

- list.push()
- list.pop()
- list.shift()
- list.unshift()

- join( seperator )
- splice()

```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
```

- concat()

```javascript
var myGirls = ["Cecilie", "Lone"];
var myBoys = ["Emil", "Tobias", "Linus"];
var myChildren = myGirls.concat(myBoys);   // Concatenates (joins) myGirls and myBoys
```

```javascript
var arr1 = ["Cecilie", "Lone"];
var arr2 = ["Emil", "Tobias", "Linus"];
var arr3 = ["Robin", "Morgan"];
var myChildren = arr1.concat(arr2, arr3);   // Concatenates arr1 with arr2 and arr3
```

- slice( digit )
- toString()
- sort()
- reverse()
- map()

```javascript
var numbers1 = [45, 4, 9, 16, 25];
var numbers2 = numbers1.map( function(value, index, array) {
  return value * 2;
} );
```

```javascript
let filteredArr = arr.filter(item => item >= 10);
```

Checks

```javascript
var arr = []
typeof arr
```

```javascript
Array.isArray(fruits);   // returns true
```

```javascript
fruits instanceof Array;   // returns true
```

```javascript
Object.keys(user) = ["name", "age"]
Object.values(user) = ["John", 30]
Object.entries(user) = [ ["name","John"], ["age",30] ]
```

```javascript
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

alert( matrix[1][1] ); // 5, the central element
```

**Array/List Reductions using `Reduce`**

```javascript
array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
```

```javascript
var array = [36, 25, 6, 15];

array.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, 0); // 36 + 25 + 6 + 15 = 82
```


