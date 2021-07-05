import { DangerDSLType } from 'danger/distribution/dsl/DangerDSL'

// TODO Check how is this variable initialized or its content updated.
declare let danger: DangerDSLType

// TODO Check where are declared these exported functions
export declare function warn(message: string): void

export const checkApprovals = () => {
  const prReviews = danger.github.reviews
  console.log('reviews', prReviews)
  if (!prReviews.every(prReview => prReview.state === 'APPROVED')) {
    warn('You should not merge until everyone has approved the PR')
    return false
  }
  return true
}
