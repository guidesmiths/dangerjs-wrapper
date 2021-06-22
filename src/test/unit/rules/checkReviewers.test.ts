import { checkReviewers } from '@rules'
import { gitHubMockBuilder, dangerConfigMockBuilder } from '@testing/mocks'

import { DangerModel } from '@models'

declare const global: DangerModel

describe('Check reviewers tests', () => {
  beforeEach(() => {
    global.warn = jest.fn()
    global.message = jest.fn()
    global.fail = jest.fn()
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  it('It should fails if there are no asignees on the PR', () => {
    global.danger = { github: gitHubMockBuilder() }
    const dangerConfig = dangerConfigMockBuilder({ giphyApiKey: 'irrelevant' })
    const result = checkReviewers(dangerConfig)
    expect(global.warn).toHaveBeenCalled()
    expect(result).toBeFalsy()
  })

  it('It should not fails if there are no asignees on the PR', () => {
    global.danger = {
      github: gitHubMockBuilder('', [
        {
          id: 0,
          login: 'IrrelevantUserName',
          type: 'User',
          avatar_url: 'irrelevant_url',
          href: 'irrelevant_url'
        },
        {
          id: 1,
          login: 'IrrelevantUserName1',
          type: 'User',
          avatar_url: 'irrelevant_url',
          href: 'irrelevant_url'
        }
      ])
    }
    const dangerConfig = dangerConfigMockBuilder({ giphyApiKey: 'irrelevant', minReviewersRequired: 2 })
    const result = checkReviewers(dangerConfig)
    expect(global.warn).not.toHaveBeenCalled()
    expect(result).toBeTruthy()
  })
})
