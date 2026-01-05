Basic structure of how l can organise typescript files

```tsx
src/
 ├─ components/
 │   └─ Navbar.ts
 ├─ services/
 │   └─ api.ts
 ├─ models/
 │   └─ User.ts
 ├─ types/
 │   └─ index.ts
 ├─ utils/
 │   └─ format.ts
 └─ main.ts
```

More interpreted one

| **Folder** | **Purpose** |
| --- | --- |
| components/ | UI logic |
| services/ | API, backend logic |
| models/ | Interfaces / classes |
| types/ | Global/shared types |
| utils/ | Helper functions |

**Diffence between bad practices and good practices**

- **BAD**

```tsx
//user.ts
interface User{}
function loginP(){}
```

- **GOOD(recommended)**

```tsx
//USer.ts
export interface User{}
```

```tsx
//auth.ts
export function login(){}
```

**Index Files (Barrel Pattern)**

```tsx
//types/index.ts
export * from './User'
export * from './Product'

import {user, Product} from '@/types'
```

**Absolute Imports (Very Important)**

- in tsconfig.json

```tsx
{
  "compilerOptions": {
    "baseUrl": "src",
    "paths": {
      "@/*": ["*"]
    }
  }
}
```

```tsx
import {user} from '@/types'
```