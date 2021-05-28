import { DangerModel } from '@models'
import { checkChangedFiles } from '@rules'
import { gitMockBuilder } from '@testing/mocks'

declare const global: DangerModel

describe('Changed files tests', () => {
  beforeEach(() => {
    global.fail = jest.fn()
    global.warn = jest.fn()
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  it('fails if there are more changed files than 1', () => {
    global.danger = { git: gitMockBuilder(['example.ts'], ['example.ts'], ['example.ts']) }
    const result = checkChangedFiles({ giphyApiKey: 'irrelevant', changedFilesLimit: 1 })
    expect(global.warn).toHaveBeenCalled()
    expect(result).toBeFalsy()
  })

  it('Should not fails if there are less changed files than 4', () => {
    global.danger = { git: gitMockBuilder(['example.ts'], ['example.ts'], ['example.ts']) }
    const result = checkChangedFiles({ giphyApiKey: 'irrelevant', changedFilesLimit: 3 })
    expect(global.warn).not.toHaveBeenCalled()
    expect(result).toBeTruthy()
  })
})
