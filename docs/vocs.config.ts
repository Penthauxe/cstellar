import { defineConfig } from 'vocs'

export default defineConfig({
  rootDir: './src',
  title: 'SCT-01',
  titleTemplate: '%s · SCT-01',
  iconUrl: '/sct01.svg',
  description:
    'Architecture and protocol documentation for the Stellar Confidential Transfer Standard.',
  editLink: {
    link: 'https://github.com/Penthauxe/cstellar/edit/main/docs/src/pages/:path',
  },
  topNav: [
    { text: 'Architecture', link: '/architecture/overview', match: '/architecture' },
    { text: 'Protocol', link: '/protocol/lifecycle', match: '/protocol' },
    { text: 'Build', link: '/developers/local-development', match: '/developers' },
  ],
  socials: [{ icon: 'github', link: 'https://github.com/Penthauxe/cstellar' }],
  sidebar: [
    {
      text: 'Start here',
      items: [
        { text: 'SCT-01', link: '/' },
        { text: 'Goal and privacy model', link: '/goal-and-privacy' },
        { text: 'MVP status', link: '/mvp-status' },
      ],
    },
    {
      text: 'Architecture',
      items: [
        { text: 'System overview', link: '/architecture/overview' },
        { text: 'Repository map', link: '/architecture/repository-map' },
        { text: 'Trust boundaries', link: '/architecture/trust-boundaries' },
      ],
    },
    {
      text: 'Protocol',
      items: [
        { text: 'Lifecycle', link: '/protocol/lifecycle' },
        { text: 'Adapter contract', link: '/protocol/adapter' },
        { text: 'Proofs and verifier', link: '/protocol/proofs-and-verifier' },
      ],
    },
    {
      text: 'Developers',
      items: [
        { text: 'SDK and dApp boundary', link: '/developers/sdk-and-dapp' },
        { text: 'Run locally', link: '/developers/local-development' },
      ],
    },
  ],
})
