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
      const result = checkUpdatedTests({ giphyApiKey: 'irrelevant' })
      expect(checkUpdatedTests)
      expect(global.warn).not.toHaveBeenCalled()
      expect(result).toBeTruthy()
    })

    it('Should not fails if there are test files created or updated (ts)', () => {
      global.danger = { git: gitMockBuilder(['example.spec.ts']) }
      const result = checkUpdatedTests({ giphyApiKey: 'irrelevant' })
      expect(checkUpdatedTests)
      expect(global.warn).not.toHaveBeenCalled()
      expect(result).toBeTruthy()
    })

    it('Should fails if there are test files created or updated', () => {
      global.danger = { git: gitMockBuilder(['example.ts']) }
      const result = checkUpdatedTests({ giphyApiKey: 'irrelevant' })
      expect(checkUpdatedTests)
      expect(global.warn).toHaveBeenCalled()
      expect(result).toBeFalsy()
    })
  })

  describe('[Unit-Tests] - checkUpdatedTests - Default regex - (test)', () => {
    it('Should not fails if there are test files created or updated (js)', () => {
      global.danger = { git: gitMockBuilder(['example.test.js']) }
      const result = checkUpdatedTests({ giphyApiKey: 'irrelevant' })
      expect(checkUpdatedTests)
      expect(global.warn).not.toHaveBeenCalled()
      expect(result).toBeTruthy()
    })

    it('Should not fails if there are test files created or updated (ts)', () => {
      global.danger = { git: gitMockBuilder(['example.test.ts']) }
      const result = checkUpdatedTests({ giphyApiKey: 'irrelevant' })
      expect(checkUpdatedTests)
      expect(global.warn).not.toHaveBeenCalled()
      expect(result).toBeTruthy()
    })
  })

  describe('[Unit-Tests] - checkUpdatedTests - Custom regex', () => {
    const customRegex = /(styled.test|spec).(js|jsx|ts|tsx)/
    it('Should not fails if there are test files created or updated (ts)', () => {
      global.danger = { git: gitMockBuilder(['styled.test.js']) }
      const result = checkUpdatedTests({ giphyApiKey: 'irrelevant', testFilesRegExp: customRegex })
      expect(checkUpdatedTests)
      expect(global.warn).not.toHaveBeenCalled()
      expect(result).toBeTruthy()
    })
    it('Should not fails if there are test files created or updated', () => {
      global.danger = { git: gitMockBuilder(['styled.spec.ts']) }
      const result = checkUpdatedTests({ giphyApiKey: 'irrelevant', testFilesRegExp: customRegex })
      expect(checkUpdatedTests)
      expect(global.warn).not.toHaveBeenCalled()
      expect(result).toBeTruthy()
    })

    it('Should fails if there are test files created or updated', () => {
      global.danger = { git: gitMockBuilder(['example.ts']) }
      const result = checkUpdatedTests({ giphyApiKey: 'irrelevant', testFilesRegExp: customRegex })
      expect(checkUpdatedTests)
      expect(global.warn).toHaveBeenCalled()
      expect(result).toBeFalsy()
    })
  })
})
