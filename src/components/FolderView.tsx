import { Tree } from '@geist-ui/react'

interface File {
  type: 'directory' | 'file'
  name: string
  files?: File[]
}

export const FolderView = () => {
  const files: File[] = [
    {
      type: 'directory',
      name: 'bin',
      files: [
        {
          type: 'file',
          name: 'cs.js',
        },
      ],
    },
    {
      type: 'directory',
      name: 'docs',
      files: [
        {
          type: 'file',
          name: 'controllers.md',
        },
        {
          type: 'file',
          name: 'es6.md',
        },
        {
          type: 'file',
          name: 'production.md',
        },
        {
          type: 'file',
          name: 'views.md',
        },
      ],
    },
  ]

  return <Tree value={files} />
}
