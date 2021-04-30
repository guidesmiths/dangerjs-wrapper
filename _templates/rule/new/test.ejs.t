---
to: src/test/unit/rules/<%= h.changeCase.camel(name) %>.test.ts
---
import { <%= h.changeCase.camel(name) %> } from '@rules'
import { gitHubMockBuilder } from '@testing/mocks'

import { DangerModel } from '@models'

declare const global: DangerModel

describe('[Unit-Tests] - <%= h.changeCase.camel(name) %>', () => {
  beforeEach(() => {
    global.warn = jest.fn()
    global.message = jest.fn()
    global.fail = jest.fn()
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  it('You must implement this testing case!!!', () => {
    global.danger = { github: gitHubMockBuilder() }
    <%= h.changeCase.camel(name) %>()
    expect(<%= h.changeCase.camel(name) %>).toHaveBeenCalled()
    expect(false).toBeTruthy()
  })
})
