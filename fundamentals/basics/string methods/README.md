# Javascript - Fundamentals - Basics

## String Methods

**String Concatination**

```javascript
var x = "Hello";
var y = "World";
var z = x + " " + y;
```

**String Complicated Symbols**

`/'` **Single Quote**

`/"` **Double Quote**

`//` **Slash**

`/b` **Backspace**

`/n` **New-line**

**Literal String**

```javascript
var word = "hello world";
```

**Object String**

```javascript
var word = new String("hello world");
```

**String Equality**

- `TRUE` Literal String == Object String
- `FALSE` Literal String === Object String

**String length**

```javascript
var x = word.length;
```

**Index of Position of First Occurance**

```javascript
var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate");
```

Search with starting position in second parameter

```javascript
var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate",15);
```

**Index of Position of Last Occurance**

```javascript
var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("locate");
```

Search with starting position in second parameter

```javascript
var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("locate",15);
```

**Note:** `-1` Means Text was not found !

**Search position**

```javascript
var str = "Please locate where 'locate' occurs!";
var pos = str.search("locate");
```

**Sub String Extraction**

```javascript
slice( start, end )
substring( start, end )
substr( start, length )
```

```javascript
var str = "Apple, Banana, Kiwi";
var res = str.slice(7, 13);
```

**Note:** `Negative-Value` Means to count from the end

```javascript
var str = "Apple, Banana, Kiwi";
var res = str.substring(7, 13);
```

```javascript
var str = "Apple, Banana, Kiwi";
var res = str.substr(7, 6);
```

**Replacing String / Sub String**

```javascript
str = "Please visit Microsoft!";
var n = str.replace("Microsoft", "W3Schools");
```

**Insensitive - Replacements**

```javascript
str = "Please visit Microsoft!";
var n = str.replace(/MICROSOFT/i, "W3Schools");
```

**All Replacements**

```javascript
str = "Please visit Microsoft and Microsoft!";
var n = str.replace(/Microsoft/g, "W3Schools");
```

**Case-Transform**

- .toUpperCase()
- .toLowerCase()

Joining Strings

```javascript
var text1 = "Hello";
var text2 = "World";
var text3 = text1.concat(" ", text2);
```

**String Trimming**

```javascript
var str = "       Hello World!        ";
alert( str.trim() );
```

**String Padding**

```javascript
let str = "5";
str = str.padStart(4,0);
// result is 0005
```

```javascript
let str = "5";
str = str.padEnd(4,0);
// result is 5000
```

**Pulling Character & Character Codes**

```javascript
var str = "HELLO WORLD";
str.charAt(0);            // returns H
```

```javascript
var str = "HELLO WORLD";
str.charCodeAt(0);         // returns 72
```

**String Splitting**

```javascript
var txt = "a,b,c,d,e";   // String
txt.split(",");          // Split on commas
txt.split(" ");          // Split on spaces
txt.split("|");          // Split on pipe
```

`in` Operator

```javascript
alert( "Widget".includes("id") ); // true
alert( "Widget".includes("id", 3) ); // false, from position 3 there is no "id"
alert( "Widget".startsWith("Wid") ); // true, "Widget" starts with "Wid"
alert( "Widget".endsWith("get") ); // true, "Widget" ends with "get"
```