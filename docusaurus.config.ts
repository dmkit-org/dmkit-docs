import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'DMKit',
  tagline: 'D&D Campaign Management for Dungeon Masters',
  favicon: 'img/favicon.ico',

  url: 'https://dmkit-org.github.io',
  baseUrl: '/dmkit-docs/',

  organizationName: 'dmkit-org',
  projectName: 'dmkit-docs',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/dmkit-org/dmkit-docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    image: 'img/dmkit-social-card.png',
    navbar: {
      title: 'DMKit',
      logo: {
        alt: 'DMKit Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/dmkit-org',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'Architecture', to: '/docs/architecture/overview' },
            { label: 'Stack', to: '/docs/stack/overview' },
            { label: 'Testing', to: '/docs/testing/strategy' },
          ],
        },
        {
          title: 'Engineering',
          items: [
            { label: 'CI/CD', to: '/docs/cicd/overview' },
            { label: 'Monitoring', to: '/docs/monitoring/overview' },
          ],
        },
        {
          title: 'Guides',
          items: [
            { label: 'Getting Started', to: '/docs/user-guides/getting-started' },
            { label: 'GitHub', href: 'https://github.com/dmkit-org' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} DMKit`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'go', 'typescript', 'hcl'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
