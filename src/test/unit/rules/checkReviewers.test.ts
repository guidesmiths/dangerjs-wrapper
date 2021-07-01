import { checkRequestedReviewers } from '@rules'
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
  describe('Requested Reviewer', () => {
    it('should fail if there are no reviewers in the PR', () => {
      global.danger = { github: gitHubMockBuilder() }
      const dangerConfig = dangerConfigMockBuilder({ giphyApiKey: 'irrelevant' })
      const result = checkRequestedReviewers(dangerConfig)
      expect(global.warn).toHaveBeenCalled()
      expect(result).toBeFalsy()
    })

    it('should not fail if there are more reviewers than the minimun defined in the config', () => {
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
      const result = checkRequestedReviewers(dangerConfig)
      expect(global.warn).not.toHaveBeenCalled()
      expect(result).toBeTruthy()
    })

    it('should not fail if there are more requested reviewers + reviews than the minimun defined in the config', () => {
      global.danger = {
        github: gitHubMockBuilder('', [
          {
            id: 0,
            login: 'IrrelevantUserName',
            type: 'User',
            avatar_url: 'irrelevant_url',
            href: 'irrelevant_url'
          }
        ],
        [{
          user: {
            id: 0,
            login: 'IrrelevantUserName',
            type: 'User',
            avatar_url: 'irrelevant_url',
            href: 'irrelevant_url'
          }
        }])
      }
      const dangerConfig = dangerConfigMockBuilder({ giphyApiKey: 'irrelevant', minReviewersRequired: 2 })
      const result = checkRequestedReviewers(dangerConfig)
      expect(global.warn).not.toHaveBeenCalled()
      expect(result).toBeTruthy()
    })

    it('should fail if there are les reviewers than the minimun defined in the config', () => {
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
      const dangerConfig = dangerConfigMockBuilder({ giphyApiKey: 'irrelevant', minReviewersRequired: 3 })
      const result = checkRequestedReviewers(dangerConfig)
      expect(global.warn).toHaveBeenCalled()
      expect(result).toBeFalsy()
    })
  })
})
