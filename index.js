const { danger, warn, fail } = require('danger')

const checkPRAssigned = () => {
  if (danger.github.pr.assignees.length === 0) {
    fail('PR must be assigned to somebody')
  }
}

const checkChangedFiles = (limit = 10) => {
  const addedFilesAmount = danger.git.created_files.length
  const changedFilesAmount = danger.git.modified_files.length
  const deletedFilesAmount = danger.git.deleted_files.length
  const filesChanged = addedFilesAmount + changedFilesAmount + deletedFilesAmount
  if (filesChanged > limit) {
    warn(`Files changed in this PR are ${filesChanged}. Limit is ${limit}`)
  }
}

const checkUpdatedTests = (testFilePattern = 'test') => {
  const addedFiles = danger.git.created_files || []
  const changedFiles = danger.git.modified_files || []
  const testFilesUpdated = [...addedFiles, ...changedFiles].filter(filepath =>
    filepath.includes(testFilePattern)
  )

  if (testFilesUpdated.length === 0) {
    warn(`There are no changes in test files. Pattern used: ${testFilePattern}`)
  }
}

module.exports = {
  checkPRAssigned,
  checkChangedFiles,
  checkUpdatedTests
}
