import { DangerConfig } from '../models/DangerConfig'
import {
  checkChangedFiles,
  checkFlawlessCode,
  checkReviewers,
  checkTicketLinkInPrBoby,
  checkUpdatedTests
} from '../rules'

interface RuleItem {
  ruleResult: boolean,
  isMandatory: boolean
}
export const checkPullRequest = (dangerConfig: DangerConfig) => {
  const rules:RuleItem[] = [
    { ruleResult: checkChangedFiles(dangerConfig), isMandatory: false },
    { ruleResult: checkReviewers(dangerConfig), isMandatory: false },
    { ruleResult: checkTicketLinkInPrBoby(dangerConfig), isMandatory: true },
    { ruleResult: checkUpdatedTests(dangerConfig), isMandatory: false }
  ]

  const mandatoryRules:RuleItem[] = rules.filter(({ isMandatory }) => isMandatory)
  const isAFlawlessCode:boolean = mandatoryRules.every(({ ruleResult }) => ruleResult)

  if (isAFlawlessCode) {
    checkFlawlessCode(dangerConfig)
  }
  return isAFlawlessCode
}
