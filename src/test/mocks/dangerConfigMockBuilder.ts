import { DangerConfig } from '../../models/DangerConfig'

export type DangerConfigMockBuilder = (dangerFile:Partial<DangerConfig>) => DangerConfig

export const dangerConfigMockBuilder:DangerConfigMockBuilder = ({
  giphyApiKey = 'irrelevant',
  minReviewersRequired = 2,
  ticketLinkRegExp = /https=\/\/dev.azure.com/g,
  changedFilesLimit = 0,
  shouldCheckTests = false,
  shouldCheckDoc = false,
  docFilesRegExp = /.(yml)/g
}) => ({
  giphyApiKey,
  minReviewersRequired,
  ticketLinkRegExp,
  changedFilesLimit,
  shouldCheckTests,
  shouldCheckDoc,
  docFilesRegExp
})
