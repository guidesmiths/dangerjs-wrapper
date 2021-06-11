import { DangerConfig } from '@models'

export const flawlessCodeDangerConfig: DangerConfig = {
  giphyApiKey: 'irrelevant',
  docFilesRegExp: /./g,
  changedFilesLimit: 4,
  minReviewersRequired: 2,
  ticketLinkRegExp: /https:\/\/dev.azure.com/g,
  shouldCheckTests: false,
  shouldCheckDoc: false
}
