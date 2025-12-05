

What is a Module 

A module is a js file that explicitly exports values (functions, variables and classes) and other files import thoes values

Modules give u a private scope, avoid global pollution, and let u split code into reusable pieces, they run in strict mode automatically

Exporting / types and examples

There are mainly 2 types of export styles

**names exports**

where this allows to export files by their names 

```jsx
// math.js
export const PI = 3.14159;
export function add(a, b) { return a + b; }
export class Calculator { /* ... */ }

Import then with curly brakets
import { PI, add } from './math.js';
```

**default exporting**

one default export per module only used when a file mainly provides one thing

```jsx
// logger.js
export default function log(msg) {
console.log(msg);
}

import log from './logger.js';
log('hi');
```

**Mixed exporting** 

A file can have one default and many named exports

```jsx
// user.js
export default function User(name) { /*...*/ }
export const ROLE = 'student';

import User, { ROLE } from './user.js';
```

**Re-export (barrel) & shorthand**

```jsx
export { something } from './other.js';
export * from './other.js';         // re-export all named exports
export { default as Foo } from './other.js'; // re-export default under a name
```

# **Importing — forms & rules**

- Named import: import { a, b } from './mod.js';
- Rename on import: import { a as alpha } from './mod.js';
- Default import: import defaultExport from './mod.js';
- Namespace import (all): import * as Utils from './mod.js';
- Side-effect only (run code): import './polyfills.js';
- **Important rule (browsers & static analyzers):** static import statements must be at top-level (not inside blocks) — they are statically analyzed. For conditional/dynamic loading, use import() (below).

**Live** Binding 

Exports are live binding 

and imported name reflects the current value of the exported variable in the original module

```jsx
// counter.js
export let count = 0;
export function increment() { count++; }
```

```jsx
// main.js
import { count, increment } from './counter.js';
console.log(count); // 0
increment();
console.log(count); // 1  <-- shows updated value (live binding)
```

although

u cannot reassign an imported binding in the importer

```jsx
import { count } from './counter.js';
count = 10; // ❌ TypeError / read-only — imported bindings are read-only views
```

if u want to do tha then u can aswell just go update the exported one to favour the imported one

**Dynamic import**

(code splitting, conditional loads)

import returns a promise and can be used anywhere

```jsx
button.addEventListener('click', async () => {
const mod = await import('./heavyCalc.js'); // loads when needed
mod.doHeavyWork();
});
```

this is used for lazy-loading modules, conditional features, or user-driven cd-spliting

Summary

Modules in the browser vs Node

browsr

we use  <script type="module" src="./app.js"></script>.
they usually require a file extention 

the run after html paring so they are deferred

we can use top-level await in modern browsers

in node.js

we can either use .mjs extention or set the "type": "module" in package.json to treat .js as ESM.
require() in common js - mixing can be messy

Circular dependencies-carefull

Modules can circulary import each other, but the import binding , may be partially intialized during evaluation, that often cause undefined values early in excecution

- we can refactor to avoid cycles - extracting shared logic int a third module
- Use functions ( lazy access) instead of referencing values at module intit time

Common Errors and their fixes

- SyntaxError: Cannot use import statement outside a module → add type="module" (browser) or set "type":"module" in package.json (Node) or use .mjs.
- 404 when importing → missing file extension or wrong path.
- Attempted import error: 'x' is not exported from './foo' → name mismatch (default vs named) — check how it was exported.
- Circular dependency issues → refactor or delay access.