import { DangerDSLType } from 'danger/distribution/dsl/DangerDSL'

// TODO Check how is this variable initialized or its content updated.
declare let danger: DangerDSLType

// TODO Check where are declared these exported functions
export declare function message(message: string): void
export declare function warn(message: string): void
export declare function fail(message: string): void
export declare function markdown(message: string): void

export const checkReviewers = () => {
  if (danger.github.requested_reviewers?.users.length === 0) {
    fail('PR must have at least 1 reviewer!!')
    return false
  }
  return true
}
