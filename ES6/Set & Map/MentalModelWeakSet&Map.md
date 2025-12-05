**1. Explain the difference between Map and WeakMap**
Map

Keys can be any value - object, primitive datatype

iterate using for of loop and we can access the size of the Map using the size property

entries are strong referenced

WeakMap

key must be object only

not iterable and no size property]

keys are weakly held, if there are no refernce then the key/value can be gabage collected

**2. When would you use WeakSet instead of Set?**

when l want to track objects without preventing their gabage collection

usage

marking visited nodes in a graph or dom element

avoid duplicated processing of object in memory-senstive application

**3. Why can’t WeakMap/WeakSet be iterated?**

so the entries are unpredictable they can disappear due to the gabage collection 

so the resullt is inconsistent