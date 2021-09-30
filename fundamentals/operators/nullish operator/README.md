# Javascript - Fundamentals - Operators

## Nullish Operator

**Serves as a backup to any variable, If that variable is not given or defined**

```javascript
const sum = (a, b) => {
    return ( a ?? 0 ) + ( b ?? 0 );
}

sum()
```