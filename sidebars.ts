import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    'getting-started',
    {
      type: 'category',
      label: 'Features',
      items: [
        'features/campaigns',
        'features/worlds-and-locations',
        'features/battle-map',
        'features/entities',
        'features/export-import',
      ],
    },
    'changelog',
    'faq',
    'roadmap',
  ],
};

export default sidebars;
