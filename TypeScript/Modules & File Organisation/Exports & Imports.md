There are mainly 2 types of exporting styles that we must master for day to day use

1. **Named exports(recommended)**

```tsx
.math.ts
export function add(a:number, b:number):number{
return a+b;
}
export const PI = 3.14

when we importing them then it looks something like this
import {add, PI} from './math'
```

**What makes this good?**

- clear
- easy to auto-import
- best for large projects

1. **Default exports**

```tsx
logger.ts
export default function log(message: string){
	console.log(message)
}

when we importing then it became this
import log from './logger'
```

**Corns of using this?**

- We use this when the export is the only task in that file

1. **Re-exporting (clearner imports)**

```tsx
utils/index.ts
export {add} from './math'
export{default as log} from './logger'

import {add, log} from './utils'
```

**Things to watch out for when using modules**

- One default export per file
- Named exports must match the names
- File extentions usually omitted
- Use absolute inports when project grows