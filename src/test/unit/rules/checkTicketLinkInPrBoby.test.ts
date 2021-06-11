import { checkTicketLinkInPrBoby } from '@rules'
import { gitHubMockBuilder, dangerConfigMockBuilder } from '@testing/mocks'

import { DangerModel } from '@models'

declare const global: DangerModel

describe('[Unit-Tests] - checkTicketLinkInPrBoby', () => {
  beforeEach(() => {
    global.warn = jest.fn()
    global.message = jest.fn()
    global.fail = jest.fn()
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  it('Should not fails if there pr body has the ticket address in the body', () => {
    global.danger = {
      github: gitHubMockBuilder(`### What’s the focus of this PR
    - Add the ecommerce api error response info in the error log to better debug the service

    ### How to review this PR
    -
    
    ### Related work items
    - [110193](https://dev.azure.com/example/team/_workitems/edit/110193)
    
    ### Before submitting this PR, I made sure:
    - [ ] The code builds clean without any errors or warnings
    - [ ] I'm using our guidelines
    - [ ] I've added tests`
      )
    }
    const dangerFile = dangerConfigMockBuilder({ ticketLinkRegExp: /https:\/\/dev.azure.com/g })
    const result = checkTicketLinkInPrBoby(dangerFile)
    expect(global.fail).not.toHaveBeenCalled()
    expect(result).toBeTruthy()
  })

  it('Should fails if there pr body has the ticket address in the body', () => {
    global.danger = {
      github: gitHubMockBuilder(`### What’s the focus of this PR
    - Add the ecommerce api error response info in the error log to better debug the service

    ### How to review this PR
    -
    
    ### Related work items
    - 
        
    ### Before submitting this PR, I made sure:
    - [ ] The code builds clean without any errors or warnings
    - [ ] I'm using our guidelines
    - [ ] I've added tests`
      )
    }
    const dangerFile = dangerConfigMockBuilder({ ticketLinkRegExp: /https:\/\/dev.azure.com/g })
    const result = checkTicketLinkInPrBoby(dangerFile)
    expect(global.fail).toHaveBeenCalled()
    expect(result).toBeFalsy()
  })
})
