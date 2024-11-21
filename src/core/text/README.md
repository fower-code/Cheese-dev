# core/text

This module provides API for convenient work with text.

## Examples:

```typescript
const text =
   "lorem ipsum lorem ipsum lorem ipsum lorem ipsum 1\n" +
   "lorem ipsum lorem ipsum lorem ipsum lorem ipsum 2\n" +
   "lorem ipsum lorem ipsum lorem ipsum lorem ipsum 3";

// [
// 	'lorem ipsum lorem ipsum lorem ipsum lorem ipsum 1',
// 	'lorem ipsum lorem ipsum lorem ipsum lorem ipsum 2',
// 	'lorem ipsum lorem ipsum lorem ipsum lorem ipsum 3'
// ]
console.log(lines(text));
```
