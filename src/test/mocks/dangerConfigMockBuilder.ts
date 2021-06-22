import { DangerConfig } from '../../models/DangerConfig'

export type DangerConfigMockBuilder = (dangerFile:Partial<DangerConfig>) => DangerConfig

export const dangerConfigMockBuilder:DangerConfigMockBuilder = ({
  giphyApiKey = 'irrelevant',
  minReviewersRequired = 2,
  ticketLinkRegExp = /https=\/\/dev.azure.com/g,
  changedFilesLimit = 10,
  docFilesRegExp = /.(yml)/g
}) => ({
  giphyApiKey,
  minReviewersRequired,
  ticketLinkRegExp,
  changedFilesLimit,
  docFilesRegExp
})
