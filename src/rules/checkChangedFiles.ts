import { DangerDSLType } from "danger/distribution/dsl/DangerDSL"

declare var danger: DangerDSLType
export declare function message(message: string): void
export declare function warn(message: string): void
export declare function fail(message: string): void

export const checkChangedFiles = (limit = 10) => {
  const addedFilesAmount = danger.git.created_files.length || 0
  const changedFilesAmount = danger.git.modified_files.length || 0
  const deletedFilesAmount = danger.git.deleted_files.length || 0
  const filesChanged = addedFilesAmount + changedFilesAmount + deletedFilesAmount
  if (filesChanged > limit) {
    warn(`Files changed in this PR are ${filesChanged}!!. Limit is ${limit} ;)`)
  }
}