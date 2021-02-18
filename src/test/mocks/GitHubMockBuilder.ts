import { GitHubJSONDSL, GitHubUser } from "danger"

export const gitHubMockBuilder = (prBody: string = "", requestedReviewers: GitHubUser[] | [] = []): GitHubJSONDSL => {
  return {
    issue: {
      labels: [
        {
          id: 0,
          url: "string",
          name: "string",
          color: "string",
        },
      ],
    },
    pr: {
      html_url: "string",
      number: 0,
      state: "open",
      locked: false,
      title: "string",
      user: {
        id: 1,
        login: "string",
        type: "User",
        avatar_url: "string",
        href: "string",
      },
      body: prBody,
      created_at: "string",
      updated_at: "string",
      closed_at: null,
      merged_at: null,
      assignee: {
        id: 1,
        login: "string",
        type: "User",
        avatar_url: "string",
        href: "string",
      },
      assignees: [
        {
          id: 1,
          login: "string",
          type: "User",
          avatar_url: "string",
          href: "string",
        },
      ],
      head: {
        label: "string",
        ref: "string",
        sha: "string",
        user: {
          id: 1,
          login: "string",
          type: "User",
          avatar_url: "string",
          href: "string",
        },
        repo: {
          id: 0,
          name: "string",
          full_name: "string",
          private: true,
          owner: {
            id: 1,
            login: "string",
            type: "User",
            avatar_url: "string",
            href: "string",
          },
          html_url: "string",
          description: "",
          fork: false,
          assignee: {
            id: 1,
            login: "string",
            type: "User",
            avatar_url: "string",
            href: "string",
          },
          assignees: [
            {
              id: 1,
              login: "string",
              type: "User",
              avatar_url: "string",
              href: "string",
            },
          ],
        },
      },
      base: {
        label: "string",
        ref: "string",
        sha: "string",
        user: {
          id: 1,
          login: "string",
          type: "User",
          avatar_url: "string",
          href: "string",
        },
        repo: {
          id: 0,
          name: "string",
          full_name: "string",
          private: true,
          owner: {
            id: 1,
            login: "string",
            type: "User",
            avatar_url: "string",
            href: "string",
          },
          html_url: "string",
          description: "",
          fork: false,
          assignee: {
            id: 1,
            login: "string",
            type: "User",
            avatar_url: "string",
            href: "string",
          },
          assignees: [
            {
              id: 1,
              login: "string",
              type: "User",
              avatar_url: "string",
              href: "string",
            },
          ],
        },
      },
      author_association: "COLLABORATOR",
      merged: false,
      comments: 0,
      review_comments: 0,
      commits: 0,
      additions: 0,
      deletions: 0,
      changed_files: 0,
    },
    commits: [
      {
        sha: "string",
        commit: {
          author: {
            name: "string",
            email: "string",
            date: "string",
          },
          committer: {
            name: "string",
            email: "string",
            date: "string",
          },
          message: "string",
          tree: {
            sha: "string",
            url: "string",
          },
          url: "string",
          sha: "",
        },
        url: "string",
        author: {
          id: 1,
          login: "string",
          type: "User",
          avatar_url: "string",
          href: "string",
        },
        committer: {
          id: 1,
          login: "string",
          type: "User",
          avatar_url: "string",
          href: "string",
        },
        parents: [
          {
            sha: "string",
            url: "string",
            html_url: "string",
          },
        ],
      },
    ],
    reviews: [
      {
        user: {
          id: 1,
          login: "string",
          type: "User",
          avatar_url: "string",
          href: "string",
        },
        body: "string",
        commit_id: "string",
        state: "PENDING",
      },
    ],
    requested_reviewers: {
      users: requestedReviewers,
      teams: [
        "string",
      ],
    },
    thisPR: {
      number: 0,
      repo: "string",
      owner: "string",
    },
  }
}
