export interface DangerConfig {
  giphyApiKey: string
  minReviewersRequired?: number
  ticketLinkRegExp?: RegExp
  testFilesRegExp?: RegExp
  changedFilesLimit?: number
}
