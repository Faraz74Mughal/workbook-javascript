# Javascript - Fundamentals - Basics

## Json Methods

### Json File to List/Object

**JSON** `data.json`

```json
{
  "employees": [
      {
        "firstName":"John",
        "lastName":"Doe"
      },
      {
          "firstName":"Anna",
          "lastName":"Smith"
      },
      {
          "firstName":"Peter",
          "lastName":"Jones"
      }
  ]
}
```

**JAVASCRIPT** `script.js`

```javascript
// Import Data in Standard JavaScript Object Format
const data = require("./data.json")

// Display/Print Data
console.log(data.employees)
```

### JSON/JS Object Parsing & Stringifying

**JS Object to Stringified Object**

```javascript
const person = {
  name: "sarutobi",
  age: 34
}

// Object to Stringified Object
const stringifiedData = JSON.stringify( person )

// Parsing back to Js Object from Stringified Data Object
const parsedData = JSON.parse( stringifiedData )
```



