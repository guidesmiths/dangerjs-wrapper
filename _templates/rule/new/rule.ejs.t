---
to: src/rules/<%= h.changeCase.camel(name) %>.ts
---
import { DangerDSLType } from 'danger/distribution/dsl/DangerDSL'

// TODO Check how is this variable initialized or its content updated.
declare let danger: DangerDSLType

// TODO Check where are declared these exported functions
export declare function message(message: string): void
export declare function warn(message: string): void
export declare function fail(message: string): void


export const <%= h.changeCase.camel(name) %> = () => {}
