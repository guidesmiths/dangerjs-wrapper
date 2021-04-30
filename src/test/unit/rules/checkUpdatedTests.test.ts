import { checkUpdatedTests } from '@rules'
import { gitMockBuilder } from '@testing/mocks'

import { DangerModel } from '@models'
declare const global: DangerModel

describe('[Unit-Tests] - checkUpdatedTests', () => {
  beforeEach(() => {
    global.warn = jest.fn()
    global.message = jest.fn()
    global.fail = jest.fn()
  })

  afterEach(() => {
    jest.resetAllMocks()
  })
  describe('[Unit-Tests] - checkUpdatedTests - Default regex - (spec)', () => {
    it('Should not fails if there are test files created or updated (js)', () => {
      global.danger = { git: gitMockBuilder(['example.spec.js']) }
      checkUpdatedTests()
      expect(checkUpdatedTests)
      expect(global.warn).not.toHaveBeenCalled()
    })

    it('Should not fails if there are test files created or updated (ts)', () => {
      global.danger = { git: gitMockBuilder(['example.spec.ts']) }
      checkUpdatedTests()
      expect(checkUpdatedTests)
      expect(global.warn).not.toHaveBeenCalled()
    })

    it('Should fails if there are test files created or updated', () => {
      global.danger = { git: gitMockBuilder(['example.ts']) }
      checkUpdatedTests()
      expect(checkUpdatedTests)
      expect(global.warn).toHaveBeenCalled()
    })
  })

  describe('[Unit-Tests] - checkUpdatedTests - Default regex - (test)', () => {
    it('Should not fails if there are test files created or updated (js)', () => {
      global.danger = { git: gitMockBuilder(['example.test.js']) }
      checkUpdatedTests()
      expect(checkUpdatedTests)
      expect(global.warn).not.toHaveBeenCalled()
    })

    it('Should not fails if there are test files created or updated (ts)', () => {
      global.danger = { git: gitMockBuilder(['example.test.ts']) }
      checkUpdatedTests()
      expect(checkUpdatedTests)
      expect(global.warn).not.toHaveBeenCalled()
    })
  })

  describe('[Unit-Tests] - checkUpdatedTests - Custom regex', () => {
    const customRegex = /(styled.test|spec).(js|jsx|ts|tsx)/
    it('Should not fails if there are test files created or updated (ts)', () => {
      global.danger = { git: gitMockBuilder(['styled.test.js']) }
      checkUpdatedTests(customRegex)
      expect(checkUpdatedTests)
      expect(global.warn).not.toHaveBeenCalled()
    })
    it('Should not fails if there are test files created or updated', () => {
      global.danger = { git: gitMockBuilder(['styled.spec.ts']) }
      checkUpdatedTests(customRegex)
      expect(checkUpdatedTests)
      expect(global.warn).not.toHaveBeenCalled()
    })

    it('Should fails if there are test files created or updated', () => {
      global.danger = { git: gitMockBuilder(['example.ts']) }
      checkUpdatedTests(customRegex)
      expect(checkUpdatedTests)
      expect(global.warn).toHaveBeenCalled()
    })
  })
})
