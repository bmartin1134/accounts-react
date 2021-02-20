Package.describe({
  name: 'bmartin1134:accounts-react',
  summary: 'Simple and intuative accounts view layer with react',
  version: '1.2.8',
  documentation: 'README.md',
  git: 'https://github.com/royGil/accounts-react'
})

Package.onUse(api => {
  api.versionsFrom('1.11.1')

  api.use([
    'ecmascript',
    'accounts-base',
    'accounts-password',
    'mdg:validated-method@1.2.0',

    'check'
  ], ['client', 'server'])

  api.use('react-meteor-data@2.1.2', 'client')

  api.use('service-configuration', { weak: true })
  api.use('http', 'server')

  api.mainModule('index.js', ['client', 'server'])
})

Package.onTest(api => {
  api.use([
    'ecmascript',
    'accounts-base',
    'accounts-password',
    'bmartin1134:accounts-react',
    'meteoreact:accounts-unstyled',
    'mdg:validated-method@1.2.0',
    'react-meteor-data@2.1.2',
    'cultofcoders:mocha'
  ])

  api.use('http', 'server')

  api.mainModule('__tests__/client.test.js', 'client')
  api.mainModule('__tests__/server.test.js', 'server')
})
