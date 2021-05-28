import { DangerConfig } from '../models/DangerConfig'
import {
  checkChangedFiles,
  checkFlawlessCode,
  checkReviewers,
  checkTicketLinkInPrBoby,
  checkUpdatedTests
} from '../rules'

export const checkPullRequest = (dangerConfig:DangerConfig) => {
  const rules:boolean[] = [
    checkChangedFiles(dangerConfig),
    checkReviewers(),
    checkTicketLinkInPrBoby(dangerConfig),
    checkUpdatedTests(dangerConfig)
  ]

  if (rules.every(result => result)) {
    checkFlawlessCode(dangerConfig)
  }
}
