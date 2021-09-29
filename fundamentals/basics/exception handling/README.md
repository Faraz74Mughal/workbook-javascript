# Javascript - Fundamentals - Basics

## Exception Handling


**Simple**

```javascript
try {
  // Some code here
}
catch(err) {
  // Error
}
```

**With Finally**

```javascript
try {
  // Some code here
}
catch(err) {
  // Error
}
finally {
  // Final Code
}
```

**Thowing & Catching Exceptions**

```javascript
try {
  let x = 2

  if( x < 2 ) {
    throw new SyntaxError("X is less than 2")
  } else if( x < 2 ) {
    throw new ReferenceError("X is less than 2")
  } else {
    throw new Error("X is 2")
  }
}
catch(err) {
  if( typeof(err) == "SyntaxError" ) {
    console.log("Syntax Error")
  } else if( typeof(err) == "ReferenceError" ) {
    onsole.log("Reference Error")
  } else if( typeof(err) == "Error" ) {
    console.log("Error")
  } else {
    console.log("Unknown Error")
  }
}
finally {
  console.log("Finish")
}
```


