var prysmVersion = "v5.1.2";

module.exports = {
    title: 'Prysm',
    tagline: 'Ethereum consensus implementation written entirely in Go.',
    url: 'https://prysm-docs-temp-migration.vercel.app',
    baseUrl: '/prysm/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'throw',
    favicon: 'docs/assets/images/Prysm.svg',
    organizationName: 'Prysmatic Labs',
    projectName: 'prysm-docs',
    staticDirectories: ['static'],

    customFields: {
        image: 'docs/assets/images/Prysm.svg',
        prysmVersion: prysmVersion,
        webpack: {
            configure: (config, isServer, utils) => {
                // Change the assets directory name from 'assets' to your preferred name
                config.output.assetModuleFilename = 'docs-assets/[name].[hash][ext]';

                // Also update the CSS extraction path
                const MiniCssExtractPlugin = config.plugins.find(
                    (plugin) => plugin.constructor.name === 'MiniCssExtractPlugin'
                );
                if (MiniCssExtractPlugin) {
                    MiniCssExtractPlugin.options.filename = 'docs-assets/css/[name].[contenthash:8].css';
                    MiniCssExtractPlugin.options.chunkFilename = 'docs-assets/css/[name].[contenthash:8].chunk.css';
                }

                return config;
            },
        },
    },
    trailingSlash: false,
    scripts: ['https://buttons.github.io/buttons.js'],

    themeConfig: {
        navbar: {
            title: "Prysm Documentation",
            logo: {
                alt: "Prysm logo",
                src: 'docs/assets/images/logo2.png',
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
                src: 'docs/assets/images/Prysm.svg',
            },
            copyright: `Copyright © ${new Date().getFullYear()} Prysmatic Labs, LLC., Validator Deposit Contract 0x00000000219ab540356cbb839cbe05303d7705fa`,
            links: [],
        },
        prism: {
            theme: require('prism-react-renderer/themes/dracula'),
        },
        ogImage: 'docs/assets/images/Prysm.svg',
        twitterImage: 'docs/assets/images/Prysm.svg',
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
