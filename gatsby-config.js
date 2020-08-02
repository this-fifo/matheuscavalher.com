module.exports = {
    siteMetadata: {
        title: `Matheus Cavalher`,
        name: `Matheus Cavalher`,
        siteUrl: `https://matheuscavalher.com`,
        description: `Matheus Cavalher-Rossi is a Brazilian architect based in Canada, whose interdisciplinary work and research focuses on sustainable rural development and agroecology.`,

        // important to set the main text that appears in the hero
        hero: {
            heading: `Strategies in Agroecology.`,
            maxWidth: 652,
        },
        social: [
            {
                name: `mailto`,
                url: `mailto:matt.cavalherrossi@gmail.com`,
            },
        ],
    },
    plugins: [
        {
            resolve: '@narative/gatsby-theme-novela',
            options: {
                basePath: "/",
                authorsPage: true,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Matheus Cavalher`,
                short_name: `Matheus Cavalher`,
                start_url: `/`,
                background_color: `#fff`,
                theme_color: `#fff`,
                display: `standalone`,
                icon: `src/assets/favicon.png`,
            },
        },
    ],
};