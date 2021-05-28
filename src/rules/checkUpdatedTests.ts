import { DangerDSLType } from 'danger/distribution/dsl/DangerDSL'
import { DangerConfig } from '../models/DangerConfig'

// TODO Check how is this variable initialized or its content updated.
declare let danger: DangerDSLType

// TODO Check where are declared these exported functions
export declare function message(message: string): void
export declare function warn(message: string): void
export declare function fail(message: string): void

export const checkUpdatedTests = (dangerConfig:DangerConfig) => {
  const { testFilesRegExp } = dangerConfig
  const defaultTestFileRegExp = /(test|spec).(js|jsx|ts|tsx)/g
  const addedFiles = danger.git.created_files || []
  const changedFiles = danger.git.modified_files || []
  const testFilesUpdated = [...addedFiles, ...changedFiles].filter(filepath => filepath.match(testFilesRegExp || defaultTestFileRegExp))

  if (testFilesUpdated.length === 0) {
    warn('There are no changes in test files')
    return false
  }
  return true
}
