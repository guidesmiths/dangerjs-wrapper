import { DangerDSLType } from 'danger/distribution/dsl/DangerDSL'
import { DangerConfig } from '../models/DangerConfig'

// TODO Check how is this variable initialized or its content updated.
declare let danger: DangerDSLType

// TODO Check where are declared these exported functions
export declare function message(message: string): void
export declare function warn(message: string): void
export declare function fail(message: string): void

export const checkTicketLinkInPrBoby = (dangerConfig:DangerConfig) => {
  const { ticketLinkRegExp } = dangerConfig
  const defaultRegExp = /https:\/\/dev.azure.com/g
  if (!danger.github?.pr?.body.match(ticketLinkRegExp || defaultRegExp)) {
    fail('You should add the associated ticket/s to the Pull request body')
    return false
  }
  return true
}
