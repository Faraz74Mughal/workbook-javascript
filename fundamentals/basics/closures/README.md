# Javascript - Fundamentals - Basics

## Closures

It deals with the properties of External Function as Static Properties

```javascript
const add = (function () {
  let counter = 0;
  return function () {
    counter += 1; 
    return counter
  }
})();

add();
add();
add();
```