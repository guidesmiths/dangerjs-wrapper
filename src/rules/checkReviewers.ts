import { DangerDSLType } from 'danger/distribution/dsl/DangerDSL'
import { DangerConfig } from '../models/DangerConfig'

// TODO Check how is this variable initialized or its content updated.
declare let danger: DangerDSLType

// TODO Check where are declared these exported functions
export declare function warn(message: string): void

export const checkReviewers = (dangerConfig:DangerConfig) => {
  const minReviewersRequired = dangerConfig.minReviewersRequired || 1
  console.log(danger.github)
  const prReviewers = danger.github.requested_reviewers?.users.length
  if (prReviewers < minReviewersRequired) {
    warn(`The pull request must have at least ${minReviewersRequired} reviewers. Right now just have ${prReviewers} !!`)
    warn(JSON.stringify(danger.github))
    return false
  }
  return true
}
