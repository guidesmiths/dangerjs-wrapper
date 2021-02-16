import { DangerModel } from "../../../models/DangerModel"
import {checkChangedFiles} from "../../../rules"
import { gitMockBuilder } from "../../mocks"

declare const global: DangerModel

describe("Changed files tests", () => {

  beforeEach(() => {
    global.fail = jest.fn()
    global.warn = jest.fn()
  })

  afterEach(() => {
    jest.resetAllMocks()
  })
  it("fails if there are more changed files than 1", () => {
    global.danger = { git: gitMockBuilder(["example.ts"], ["example.ts"], ["example.ts"]) }
    checkChangedFiles(1)
    expect(global.warn).toHaveBeenCalled()
  })

  it("Should not fails if there are less changed files than 4", () => {
    global.danger = { git: gitMockBuilder(["example.ts"], ["example.ts"], ["example.ts"]) }
    checkChangedFiles(3)
    expect(global.warn).not.toHaveBeenCalled()
  })
})
