import { checkApprovals } from '@rules'
import { dangerConfigMockBuilder, gitHubMockBuilder } from '@testing/mocks'

import { DangerModel } from '@models'

declare const global: DangerModel

describe('Check approvals tests', () => {
  beforeEach(() => {
    global.warn = jest.fn()
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  it('should fail if there are no approvals in the PR', () => {
    global.danger = {
      github: gitHubMockBuilder('', [],
        [{
          id: 1,
          user: {
            id: 0,
            login: 'IrrelevantUserName1',
            type: 'User',
            avatar_url: 'irrelevant_url_1',
            href: 'irrelevant_url_1'
          },
          body: '',
          state: 'APPROVED'
        },
        {
          id: 2,
          user: {
            id: 0,
            login: 'IrrelevantUserName2',
            type: 'User',
            avatar_url: 'irrelevant_url_2',
            href: 'irrelevant_url_2'
          },
          body: '',
          state: 'COMMENT'
        }]
      )
    }
    const dangerConfig = dangerConfigMockBuilder({ minReviewersRequired: 2 })
    const result = checkApprovals(dangerConfig)
    expect(global.warn).toHaveBeenCalled()
    expect(result).toBeFalsy()
  })

  it('should not fail if everybody has approved the PR', () => {
    global.danger = {
      github: gitHubMockBuilder('', [],
        [{
          id: 1,
          user: {
            id: 0,
            login: 'IrrelevantUserName1',
            type: 'User',
            avatar_url: 'irrelevant_url_1',
            href: 'irrelevant_url_1'
          },
          body: '',
          state: 'APPROVED'
        },
        {
          id: 2,
          user: {
            id: 0,
            login: 'IrrelevantUserName2',
            type: 'User',
            avatar_url: 'irrelevant_url_2',
            href: 'irrelevant_url_2'
          },
          body: '',
          state: 'APPROVED'
        }]
      )
    }
    const dangerConfig = dangerConfigMockBuilder({ minReviewersRequired: 2 })
    const result = checkApprovals(dangerConfig)
    expect(global.warn).not.toHaveBeenCalled()
    expect(result).toBeTruthy()
  })
})
