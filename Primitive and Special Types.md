### **BASIC types we must know**

| string | Text | let name: string = "Deng"; |
| --- | --- | --- |
| number | Numbers | let age: number = 20; |
| boolean | true/false | let isStudent: boolean = true; |
| any | Any type (avoid) | let data: any = 123; |
| unknown | Any type, but safer than any | let info: unknown = "hello"; |
| void | Functions that return nothing | function log(): void {} |
| never | Functions that never return | function error(): never { throw new Error(); } |
| Arrays | Typed lists | let nums: number[] = [1,2,3]; |
| Tuples | Fixed length + types | let tuple: [string, number] = ["Deng", 20] |