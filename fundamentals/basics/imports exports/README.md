# Javascript - Fundamentals - Basics

## Imports / Exports

`Modules always work in strict mode`

**JAVASCRIPT** `sayHi.js`

```javascript
export function sayHi(user) {
  alert(`Hello, ${user}!`);
}
```

**HTML** `index.html`

```html
<script type="module">
  import {sayHi} from './say.js';

  document.body.innerHTML = sayHi('John');
</script>
```

**JAVASCRIPT** `main.js`

```javascript
import sayHi from './sayHi.js';

alert(sayHi); // function...
sayHi('John'); // Hello, John!
```

**Importing via Destructuring**

```javascript
import {sayHi, sayBye} from './say.js';
import * as say from './say.js';
import {sayHi as hi, sayBye as bye} from './say.js';
```

**Anonymous Class Export**

```javascript
export default class { // no class name
  constructor() { ... }
}
```

**Exporting Defaults**

```javascript
export {default as User} from './user.js'; // re-export default
```

**Re-Exporting**

```javascript
export * from './user.js'; // to re-export named exports
export {default} from './user.js'; // to re-export the default export
```

`Inside Functions`

```javascript
let {hi, bye} = await import('./say.js');

hi();
bye();
```



