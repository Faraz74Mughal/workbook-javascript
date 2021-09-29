# Javascript - Fundamentals - Basics

## Conditional Statements

**If Statement**

```javascript
age = 25

if( age < 30 ) {
    console.log("Person is Young")
}
```

**If/Else Statement**

```javascript
age = 25

if( age < 30 ) {
    console.log("Person is Young")
} else {
    console.log("Person is not Young")
}
```

**If/ElseIf/Else Statement**

```javascript
age = 25

if( age < 30 ) {
    console.log("Person is Young")
} else if( age > 30 ) {
    console.log("Person is Old")
} else {
    console.log("Person is in his/her golden age")
}
```

**Switch Statement**

```javascript
age = 25

switch(age) {
    case 10:
        {
            console.log("silver age")
        }
        break;
    case 20:
        {
            console.log("golden age")
        }
        break
    default: 
    {
        console.log("Extra Life Time")
    }
}
```

**Terenery Operator**

```javascript
const x = ( 2 == 4 )
const result = x ? "Yes" : "No"

console.log("Result: ", result)
```
