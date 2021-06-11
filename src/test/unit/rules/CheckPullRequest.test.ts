import { DangerModel } from '@models'
import { checkPullRequest } from '@rules'
import {
  flawlessCode,
  notFlawlessCode,
  notFlawlessCodeDangerConfig
} from '@testing/unitFixtures/rules/checkPullRequest/input'
import { flawlessCodeDangerConfig } from '@testing/unitFixtures/rules/checkPullRequest/input/flawlessCodeDangerConfig'

declare const global: DangerModel

describe('Check pull request test', () => {
  beforeEach(() => {
    global.fail = jest.fn()
    global.warn = jest.fn()
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  it('should return TRUE due to the pull request data pass all the mandatory rules', () => {
    global.danger = flawlessCode
    const result = checkPullRequest(flawlessCodeDangerConfig)
    expect(result).toBeTruthy()
  })

  it('should return FALSE due to the pull request data pass all the mandatory rules', () => {
    global.danger = notFlawlessCode
    const result = checkPullRequest(notFlawlessCodeDangerConfig)
    expect(result).toBeFalsy()
  })
})
