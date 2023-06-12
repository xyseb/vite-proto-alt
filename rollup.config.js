const typescript = require('rollup-plugin-typescript2');
const scss = require('rollup-plugin-scss');
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');
const fs = require('fs');

// Récupérez l'environnement de build à partir de la variable d'environnement NODE_ENV
const isProd = process.env.NODE_ENV === 'production';

const browserslist = fs
    .readFileSync('.browserslistrc', 'utf-8')
    .split('\n')
    .filter((line) => !line.startsWith('#'));

const commonConfig = {
    input: 'src/index.tsx',
    output: {
        file: 'public/dist/bundle.js',
        format: 'iife',
        sourcemap: !isProd,
        globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
        },
    },
    external: ['react', 'react-dom'],
    plugins: [
        typescript({
            tsconfig: 'tsconfig.json',
            jsx: 'react',
        }),
        scss({
            processor: () =>
                postcss([autoprefixer({ overrideBrowserslist: browserslist })]),
        }),
    ],
};

const devConfig = {
    ...commonConfig,
    watch: true,
};

const prodConfig = {
    ...commonConfig,
    watch: false,
};

// Utilisez la configuration appropriée en fonction de l'environnement de build
const config = isProd ? prodConfig : devConfig;

module.exports = config;
