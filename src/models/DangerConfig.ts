export interface DangerConfig {
  giphyApiKey: string
  minReviewersRequired: number
  ticketLinkRegExp: RegExp
  changedFilesLimit: number
  testFilesRegExp?: RegExp
  docFilesRegExp?: RegExp
}
