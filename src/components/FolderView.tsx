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
          type: 'directory',
          name: 'docs',
          files: [
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
        {
          type: 'file',
          name: 'es6.md',
        },
        {
          type: 'file',
          name: 'production-production-production-production-production-.md',
        },
        {
          type: 'file',
          name: 'views.md',
        },
      ],
    },
  ]

  return (
    <div style={{ border: '1px solid blue', width: '30%' }}>
      <Tree value={files} />
    </div>
  )
}
