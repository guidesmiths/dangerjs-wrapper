import { DangerDSLType } from 'danger/distribution/dsl/DangerDSL'
import { checkChangedFiles, checkReviewers, checkTicketLinkInPrBoby } from '@rules'

// TODO Check how is this variable initialized or its content updated.
declare let danger: DangerDSLType
// TODO Check where are declared these exported functions.
export declare function message(message: string): void
export declare function warn(message: string): void
export declare function fail(message: string): void
export declare function markdown(message: string): void

/**
 * Wrapper of dangerjs in ts
 */
const checkNewDependencies = () => {
  if (danger.git?.modified_files?.includes('package.json')) {
    warn('This PR contains new/updated dependencies. Remember execute npm i before testing the PR! 2')
  }
}

const checkUpdatedTests = (testFilePattern = 'test') => {
  const addedFiles = danger.git.created_files || []
  const changedFiles = danger.git.modified_files || []
  const testFilesUpdated = [...addedFiles, ...changedFiles].filter(filepath => filepath.includes(testFilePattern))

  if (testFilesUpdated.length === 0) {
    warn(`There are no changes in test files. Pattern used: ${testFilePattern} 2`)
  }
}

// export default function () {
export {
  checkReviewers,
  checkChangedFiles,
  checkTicketLinkInPrBoby,
  checkNewDependencies,
  checkUpdatedTests
}
