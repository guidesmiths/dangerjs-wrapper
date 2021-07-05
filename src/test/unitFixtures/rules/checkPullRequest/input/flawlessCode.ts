import { gitHubMockBuilder, gitMockBuilder } from '@testing/mocks'

export const flawlessCode = {
  git: gitMockBuilder(['example.ts'], ['example.ts'], ['example.ts']),
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
  , [],
  [{
    id: 1,
    user: {
      id: 0,
      login: 'IrrelevantUserName1',
      type: 'User',
      avatar_url: 'irrelevant_url_1',
      href: 'irrelevant_url_1'
    },
    body: '',
    state: 'APPROVED'
  },
  {
    id: 2,
    user: {
      id: 0,
      login: 'IrrelevantUserName2',
      type: 'User',
      avatar_url: 'irrelevant_url_2',
      href: 'irrelevant_url_2'
    },
    body: '',
    state: 'COMMENT'
  },
  {
    id: 2,
    user: {
      id: 0,
      login: 'IrrelevantUserName2',
      type: 'User',
      avatar_url: 'irrelevant_url_2',
      href: 'irrelevant_url_2'
    },
    body: '',
    state: 'APPROVED'
  }])
}
