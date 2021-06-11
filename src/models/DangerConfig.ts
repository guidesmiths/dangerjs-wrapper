export interface DangerConfig {
  giphyApiKey: string
  minReviewersRequired: number
  ticketLinkRegExp: RegExp
  changedFilesLimit: number
  shouldCheckTests: boolean
  testFilesRegExp?: RegExp
  shouldCheckDoc: boolean
  docFilesRegExp: RegExp
}
