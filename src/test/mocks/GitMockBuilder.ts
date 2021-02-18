// tslint:disable-next-line:max-line-length
export const gitMockBuilder = (modifiedFiles: string[] = [], createdFiles: string[] = [], deletedFiles: string[] = []) => {
  return {
    modified_files: modifiedFiles,
    created_files: createdFiles,
    deleted_files: deletedFiles,
    commits: [
      {
        sha: "string",
        parents: ["string"],
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
      },

    ],
  }
}
