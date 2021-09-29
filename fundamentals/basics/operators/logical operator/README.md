# Javascript - Fundamentals - Basics - Operators

##  Logical Operators

```javascript
let a = 5
let b = 10
let c = "apples"

// [AND] If `a` is equals to `5` and `c` is equals to "apples"
if( ( a == 5 ) && c == "apples" ) {
    console.log("a = 5", "c = `apples`")
}

// [OR] If `a` is equals to `10` or `c` is equals to "apples"
if( ( a == 10 ) || c == "apples" ) {
    console.log("a = 10", "c = `apples`")
} else {
    console.log("a != 10", "c != `apples`")
}

/*
 [XOR]
 either `a` is equals to 10 and `c` is not equals to "apples"
 or `a` is not equals to 10 and `c` is equals to "apples"
*/
if( ( a == 10 ) ^ c == "apples" ) {
    console.log("a = 10", "c = `apples`")
} else {
    console.log("a != 10", "c != `apples`")
}

```