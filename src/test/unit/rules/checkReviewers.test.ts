import { checkReviewers } from "../../../rules"
import { gitHubMockBuilder } from "../../mocks"

import {DangerModel} from "../../../models/DangerModel"

declare const global: DangerModel

describe("Check reviewers tests", () => {
  beforeEach(() => {
    global.warn = jest.fn()
    global.message = jest.fn()
    global.fail = jest.fn()
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  it("fails if there are no asignees on the PR", () => {
    global.danger = { github: gitHubMockBuilder() }
    checkReviewers()
    expect(global.fail).toHaveBeenCalled()
  })
})
