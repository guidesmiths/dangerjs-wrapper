import { DangerDSLType } from 'danger/distribution/dsl/DangerDSL'
import { DangerConfig } from '../models/DangerConfig'

// TODO Check how is this variable initialized or its content updated.
declare let danger: DangerDSLType

// TODO Check where are declared these exported functions
export declare function warn(message: string): void
export declare function error(message: string): void

export const checkRequestedReviewers = (dangerConfig:DangerConfig) => {
  const minReviewersRequired = dangerConfig.minReviewersRequired || 1
  const prReviewers = danger.github.requested_reviewers?.users.length + danger.github.reviews.length
  if (prReviewers < minReviewersRequired) {
    warn(`The PR has ${prReviewers} reviewers and must have at least ${minReviewersRequired} reviewers !!`)
    return false
  }
  return true
}
