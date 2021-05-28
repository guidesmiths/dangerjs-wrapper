import { DangerDSLType } from 'danger/distribution/dsl/DangerDSL'
import { DangerConfig } from '../models/DangerConfig'

// TODO Check how is this variable initialized or its content updated.
declare let danger: DangerDSLType

// TODO Check where are declared these exported functions.
export declare function message(message: string): void
export declare function warn(message: string): void
export declare function fail(message: string): void

export const checkChangedFiles = (dangerConfig:DangerConfig) => {
  const { changedFilesLimit } = dangerConfig
  const limit = changedFilesLimit || 10
  const addedFilesAmount = danger.git.created_files.length || 0
  const changedFilesAmount = danger.git.modified_files.length || 0
  const deletedFilesAmount = danger.git.deleted_files.length || 0
  const filesChanged = addedFilesAmount + changedFilesAmount + deletedFilesAmount
  if (filesChanged > limit) {
    warn(`Files changed in this PR are ${filesChanged}!!. Limit is ${limit} ;)`)
    return false
  }
  return true
}
