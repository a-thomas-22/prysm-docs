var prysmVersion = "v5.1.2";

module.exports = {
    title: 'Prysm',
    tagline: 'Ethereum consensus implementation written entirely in Go.',
    url: 'https://prysm-docs-temp-migration.vercel.app',
    baseUrl: '/prysm/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'throw',
    favicon: 'prysm/docs/img/Prysm.svg',
    organizationName: 'Prysmatic Labs',
    projectName: 'prysm-docs',
    staticDirectories: ['static'],

    customFields: {
        image: 'prysm/docs/img/Prysm.svg',
        prysmVersion: prysmVersion,
    },
    trailingSlash: false,
    scripts: ['https://buttons.github.io/buttons.js'],

    themeConfig: {
        navbar: {
            title: "Prysm Documentation",
            logo: {
                alt: "Prysm logo",
                src: 'prysm/docs/img/logo2.png',
                href: '/prysm/docs/getting-started',
            },
            items: [{
                type: 'docsVersion',
                position: 'left',
                to: 'https://github.com/prysmaticlabs/prysm/releases/tag/' + prysmVersion,
                label: prysmVersion,
            },
            {
                to: '/prysm/docs/install/install-with-script',
                label: 'Quick Install',
                position: 'right',
            },
            {
                href: 'https://github.com/prysmaticlabs/prysm',
                label: 'GitHub',
                position: 'right',
            },
            {
                href: 'https://discord.gg/prysmaticlabs',
                label: 'Discord',
                position: 'right',
            },
            ],
        },
        footer: {
            logo: {
                alt: "Prysm Eth2 Docs",
                href: '/prysm/docs/getting-started',
                src: 'prysm/docs/img/Prysm.svg',
            },
            copyright: `Copyright © ${new Date().getFullYear()} Prysmatic Labs, LLC., Validator Deposit Contract 0x00000000219ab540356cbb839cbe05303d7705fa`,
            links: [],
        },
        prism: {
            theme: require('prism-react-renderer/themes/dracula'),
        },
        ogImage: 'prysm/docs/img/Prysm.svg',
        twitterImage: 'prysm/docs/img/Prysm.svg',
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    path: './docs',
                    routeBasePath: 'docs',
                    showLastUpdateTime: false,
                    showLastUpdateAuthor: false,
                    breadcrumbs: false,
                    sidebarPath: require.resolve('./sidebars.json'),
                    editUrl: 'https://github.com/prysmaticlabs/documentation/edit/master/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
                sitemap: {
                    changefreq: 'weekly',
                    priority: 0.5,
                },
            },
        ],
    ],
    plugins: [
        [
            '@docusaurus/plugin-google-analytics',
            {
                trackingID: 'UA-139640266-2',
                anonymizeIP: true,
            },
        ],
        require.resolve("docusaurus-lunr-search"),
    ],
};
