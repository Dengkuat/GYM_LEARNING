proxy wraps an object to intercept operations(get, set, delete, function calls)

reflex builds in objects to perform default operations safely, often used in proxy traps 

proxy changes behavior while reflect preserves default behaviors

Proxy essentials

| **rap** | **What it does** | **Example** |
| --- | --- | --- |
| get | Intercept property access | get(target, prop) { return Reflect.get(target, prop); } |
| set | Intercept property assignment | set(target, prop, value) { return Reflect.set(target, prop, value); } |
| has | Intercept 'prop' in obj | has(target, prop) { return Reflect.has(target, prop); } |
| deleteProperty | Intercept delete obj.prop | deleteProperty(target, prop) |
| apply | Intercept function calls | apply(target, thisArg, args) { return Reflect.apply(target, thisArg, args); } |

Reflect essential methods

| **Method** | **Use** | **Example** |
| --- | --- | --- |
| Reflect.get(target, prop, receiver) | Access a property | Reflect.get(obj, 'name') |
| Reflect.set(target, prop, value, receiver) | Set a property | Reflect.set(obj, 'age', 21) |
| Reflect.has(target, prop) | Check property existence | Reflect.has(obj, 'name') |
| Reflect.deleteProperty(target, prop) | Delete a property | Reflect.deleteProperty(obj, 'age') |
| Reflect.apply(target, thisArg, args) | Call a function | Reflect.apply(fn, null, [1,2]) |