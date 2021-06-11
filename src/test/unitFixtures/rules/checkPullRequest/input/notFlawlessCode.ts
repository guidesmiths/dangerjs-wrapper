import { gitHubMockBuilder, gitMockBuilder } from '@testing/mocks'

export const notFlawlessCode = {
  git: gitMockBuilder(['example.ts', 'example2.ts', 'example3.ts'], ['example.ts'], ['example.ts']),
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
  , [
    {
      id: 0,
      login: 'IrrelevantUserName',
      type: 'User',
      avatar_url: 'irrelevant_url',
      href: 'irrelevant_url'
    },
    {
      id: 1,
      login: 'IrrelevantUserName1',
      type: 'User',
      avatar_url: 'irrelevant_url',
      href: 'irrelevant_url'
    }
  ])
}
