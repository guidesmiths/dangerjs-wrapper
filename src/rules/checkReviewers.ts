import { DangerDSLType } from 'danger/distribution/dsl/DangerDSL'
import { DangerConfig } from '../models/DangerConfig'

// TODO Check how is this variable initialized or its content updated.
declare let danger: DangerDSLType

// TODO Check where are declared these exported functions
export declare function message(message: string): void
export declare function warn(message: string): void
export declare function fail(message: string): void
export declare function markdown(message: string): void

export const checkReviewers = (dangerConfig:DangerConfig) => {
  const minReviewersRequired = dangerConfig.minReviewersRequired || 1

  if (danger.github.requested_reviewers?.users.length < minReviewersRequired) {
    warn(`The pull request must have at least ${minReviewersRequired} reviewers!!`)
    return false
  }
  return true
}
