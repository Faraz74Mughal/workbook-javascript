# Javascript - Fundamentals - Basics

## String Formats and Concatination

```javascript
let name = 'keven'
let sentence = 'My name is ' + name
```

```javascript
let name = 'keven'
let sentence = `My name is ${name}`
```

```javascript
const getSentence = (name, age) => {
  let sentence = `My name is ${name} and I am ${age} years old.`
  return sentence
}

getSentence('jimmy', 20)
```
