import { DangerModel } from '@models'
import { checkChangedFiles } from '@rules'
import { gitMockBuilder, dangerConfigMockBuilder } from '@testing/mocks'

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
    const dangerConfig = dangerConfigMockBuilder({ changedFilesLimit: 1 })
    const result = checkChangedFiles(dangerConfig)
    expect(global.warn).toHaveBeenCalled()
    expect(result).toBeFalsy()
  })

  it('Should not fails if there are less changed files than 4', () => {
    global.danger = { git: gitMockBuilder(['example.ts'], ['example.ts'], ['example.ts']) }
    const dangerConfig = dangerConfigMockBuilder({ changedFilesLimit: 3 })
    const result = checkChangedFiles(dangerConfig)

    expect(global.warn).not.toHaveBeenCalled()
    expect(result).toBeTruthy()
  })
})
