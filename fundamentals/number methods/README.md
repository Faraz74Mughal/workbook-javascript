# Javascript - Fundamentals

## Number Methods

- .toString()
- .toExponential( digits ) `Scientific notation`
- .toFixed()

```javascript
var x = 9.656;
x.toFixed(0);           // returns 10
x.toFixed(2);           // returns 9.66
x.toFixed(4);           // returns 9.6560
x.toFixed(6);           // returns 9.656000
```

- .toPrecision( rate )

```javascript
var x = 9.656;
x.toPrecision();        // returns 9.656
x.toPrecision(2);       // returns 9.7
x.toPrecision(4);       // returns 9.656
x.toPrecision(6);       // returns 9.65600
```

- Converting to Numbers

`Number()` `parseInt()` `parseFloat()`

- Number Limits

`Number.MAX_VALUE` `Number.MIN_VALUE`
`POSITIVE_INFINITY` `POSITIVE_INFINITY`
`Number.NaN`



