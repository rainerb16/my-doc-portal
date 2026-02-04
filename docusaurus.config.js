import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Rainer Dev Portal Portfolio',
  tagline: 'Bridging the gap between complex code and clear communication through interactive API design.',
  favicon: 'img/favicon.ico',

  url: 'https://rainerb16.github.io',
  baseUrl: '/my-doc-portal/',
  organizationName: 'rainerb16',
  projectName: 'my-doc-portal',
  onBrokenLinks: 'throw',
  deploymentBranch: 'gh-pages',

  // 1. THEMES (Top Level) - This fixes the "@theme/ApiItem" errors
  themes: ["docusaurus-theme-openapi-docs", "@docusaurus/theme-live-codeblock"],

  // 2. PLUGINS
  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: "api",
        docsPluginId: "classic",
        config: {
          petstore: {
            specPath: "https://petstore.swagger.io/v2/swagger.json", // Direct URL, no downloading needed!
            outputDir: "docs/petstore",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },
        }
      },
    ],
    
  ],

  markdown: {
    format: 'mdx',
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          docItemComponent: "@theme/ApiItem",
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig: {
    navbar: {
        title: 'Rainer B.',
        logo: {
          alt: 'Rainer B. Logo',
          src: 'img/favicon.ico',
        },
        items: [
          {
            to: '/docs/portfolio-hub',
            label: 'Documentation',
            position: 'left',
          },
          {
            href: 'https://github.com/rainerb16',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      colorMode: {
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    footer: {
      style: 'dark', // This ensures it uses your dark primary colors
      links: [
        {
          title: 'Portfolio Sections',
          items: [
            {
              label: 'API Documentation',
              to: '/docs/portfolio-hub',
            },
            {
              label: 'Homepage',
              to: '/',
            },
          ],
        },
        {
          title: 'Professional Links',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/rainerb16', 
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/rainerbrieger/', 
            },
          ],
        },
        {
          title: 'Contact',
          items: [
            {
              label: 'Email Me',
              href: 'mailto:hello@rainerb.com',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Rainer B. Built with Docusaurus and Documentation Engineering.`,
    },
  },
};

export default config;