import { checkApprovals } from '@rules'
import { gitHubMockBuilder } from '@testing/mocks'

import { DangerModel } from '@models'

declare const global: DangerModel

describe('Check approvals tests', () => {
  beforeEach(() => {
    global.fail = jest.fn()
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
    const result = checkApprovals()
    expect(global.fail).toHaveBeenCalled()
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
    const result = checkApprovals()
    expect(global.fail).not.toHaveBeenCalled()
    expect(result).toBeTruthy()
  })
})
