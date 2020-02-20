const {
    FrontlineScssConfigWebpackPlugin
} = require("@akqa-frontline/scss-config-webpack-plugin");
const {
    FrontlineJsConfigWebpackPlugin
} = require("@akqa-frontline/js-config-webpack-plugin");
const {
    FrontlineImageConfigWebpackPlugin
} = require("@akqa-frontline/image-config-webpack-plugin");
const {
    FrontlineFontConfigWebpackPlugin
} = require("@akqa-frontline/font-config-webpack-plugin");
const {
    FrontlineAssetConfigWebpackPlugin
} = require("@akqa-frontline/asset-config-webpack-plugin");

const { FrontlineWebpackConfig } = require("@akqa-frontline/webpack-config");

const entry = {
    "main.js": "./src/js/main.js",
    "critical.css": "./src/scss/critical.scss",
    "styles.css": "./src/scss/main.scss"
}

const sharedPlugins = [
    new FrontlineImageConfigWebpackPlugin(),
    new FrontlineFontConfigWebpackPlugin(),
    new FrontlineAssetConfigWebpackPlugin()
];

const legacyWebpackConfig = FrontlineWebpackConfig("legacy", {
    entry,
    plugins: [
        ...sharedPlugins,
        new FrontlineScssConfigWebpackPlugin({ browserslistEnv: "legacy" }),
        new FrontlineJsConfigWebpackPlugin({ browserslistEnv: "legacy" })
    ]
});

const modernWebpackConfig = FrontlineWebpackConfig("modern", {
    entry,
    plugins: [
        ...sharedPlugins,
        new FrontlineScssConfigWebpackPlugin({ browserslistEnv: "modern" }),
        new FrontlineJsConfigWebpackPlugin({ browserslistEnv: "modern" })
    ]
});

module.exports = [legacyWebpackConfig, modernWebpackConfig];
