---
to: src/rules/index.ts
inject: true
append: true
---

export { <%= h.changeCase.camel(name) %> } from './<%= h.changeCase.camel(name) %>'
