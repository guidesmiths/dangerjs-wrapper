import { checkReviewers } from '@rules'
import { gitHubMockBuilder } from '@testing/mocks'

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
    const result = checkReviewers()
    expect(global.fail).toHaveBeenCalled()
    expect(result).toBeFalsy()
  })

  it('It should not fails if there are no asignees on the PR', () => {
    global.danger = {
      github: gitHubMockBuilder('', [{
        id: 0,
        login: 'aa',
        type: 'User',
        avatar_url: 'string',
        href: '0'
      }])
    }
    const result = checkReviewers()
    expect(global.fail).not.toHaveBeenCalled()
    expect(result).toBeTruthy()
  })
})
