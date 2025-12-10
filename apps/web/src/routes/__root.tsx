import {HeadContent, Scripts, createRootRoute} from '@tanstack/react-router';
import {ZeroProvider} from '@rocicorp/zero/react';
import appCss from '../styles.css?url';
import {mutators, schema} from '@zero-onboarding/zero';

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
});

function RootDocument({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <ZeroProvider
          server="http://localhost:4848"
          schema={schema}
          mutators={mutators}
          userID="anon"
        >
          {children}
        </ZeroProvider>
        <Scripts />
      </body>
    </html>
  );
}
