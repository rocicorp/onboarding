import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { ZeroProvider } from '@rocicorp/zero/react'

import appCss from '../styles.css?url'
import { createMutators, schema } from '@tutorial-tanstack-drizzle/zero'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Zero Onboarding',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),

  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <ZeroProvider
          server="http://localhost:4848"
          schema={schema}
          mutators={createMutators(undefined)}
          userID="anon"
        >
          {children}
        </ZeroProvider>
        <Scripts />
      </body>
    </html>
  )
}
