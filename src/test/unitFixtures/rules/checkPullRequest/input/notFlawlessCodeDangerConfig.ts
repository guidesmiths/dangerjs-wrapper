import { DangerConfig } from '@models'

export const notFlawlessCodeDangerConfig: DangerConfig = {
  giphyApiKey: 'irrelevant',
  docFilesRegExp: /./g,
  changedFilesLimit: 4,
  minReviewersRequired: 4,
  ticketLinkRegExp: /https:\/\/dev.jira.com/g,
  shouldCheckTests: false,
  shouldCheckDoc: false
}
