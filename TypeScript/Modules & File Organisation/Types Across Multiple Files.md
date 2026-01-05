1. **Exporting Types**

```tsx
//modules/user.ts
export interface User{
	id:number;
	name:string;
}
```

1. **Importing Types**

```tsx
import type {User} from '.models/User';
```

**Whats the user of this?**

- Imports types improves perforamance
- Avoids runtime js outputs

**Sharing Types Globally**

```tsx
//types/common.ts
export type ID = number|string;
```

```tsx
import {ID} from '@/types/common';
```

**Extending Types Across Files**

```tsx
//models/BaseUser.ts
export interface BaseUser{
	id:number;
}
```

```tsx
//models/Admin.ts
import {BaseUser} from './BaseUser'
export interface Admin extends BaseUser{
	role:'Admin';
}
```

**Types vs Interface** 

| **Use** | **When** |
| --- | --- |
| interface | Objects & extension |
| type | Unions, primitives |

```tsx
type status = 'success'|'error'
```