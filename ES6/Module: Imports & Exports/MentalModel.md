1.What is the differnce between Named and default exports in es6

named exports 

exports values by their names

you can export multiple values from one file

we import them with brackets 

default exports

export values one per module

import without curly brackets and can be renamed freely without a typperror

**Explanation:**

Named exports are for multiple utilities; default exports are for the main thing the file provides.

2. **Why do ES6 modules run in strict mode by default?**

becuase modules are designed for predictable, error-free code

-no accident globaly since they have a private scope

**3. What is live binding in ES6 modules and why is it useful?**

Live binding means that imported values are linked to the original exported variable 

so if the exporter update it, the importer sees the change instantly

so how this helpfull, it ensures real time sync between modules without re-imoporting and updated one 

**4. What are the differences between ES modules in browsers vs Node.js?**

| feauture | **Browser** | **Node.js** |
| --- | --- | --- |
| enable  feasture | <script type “module”> | "type": "module" in package.json OR .mjs
 |
| fiile existance | must include .js or .mjs | .mjs or .js with type:module |
|  |  |  |

**5. How do you handle circular dependencies in ES modules?**

A imports B, and B imports A

refactor shared logics into a separate module

use lazy access ( functions that retrieve the value later)