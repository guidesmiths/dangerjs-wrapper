import { DangerDSLType } from 'danger/distribution/dsl/DangerDSL'
import { GitHubReview } from 'danger/distribution/dsl/GitHubDSL'
import { DangerConfig } from '../models/DangerConfig'

// TODO Check how is this variable initialized or its content updated.
declare let danger: DangerDSLType

// TODO Check where are declared these exported functions
export declare function warn(message: string): void

export const checkApprovals = (config: DangerConfig) => {
  const prReviews:GitHubReview[] = danger.github.reviews
  const approvedReviews = prReviews.filter(prReview => prReview.state === 'APPROVED').length
  if (approvedReviews < config.minReviewersRequired) {
    warn('You should not merge until everyone has approved the PR')
    return false
  }
  return true
}
