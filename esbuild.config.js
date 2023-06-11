const { build } = require('esbuild');
const sassPlugin = require('esbuild-plugin-sass');
const postcssPlugin = require('esbuild-plugin-postcss2');

const autoprefixer = require('autoprefixer');
const fs = require('fs');


const commonConfig = {
    entryPoints: ['src/index.tsx'],
    bundle: true,
    outfile: 'public/dist/bundle.js',
    target: 'es2021',
    platform: 'browser',
    tsconfig: 'tsconfig.json',
    loader: {
        '.tsx': 'tsx',
        '.scss': 'scss',
        '.json': 'json',
        '.png': 'file',
        '.jpg': 'file',
        '.gif': 'file',
        '.svg': 'file',
        '.ico': 'file',
    },
    plugins: [
        sassPlugin(),
        postcssPlugin.default({
            plugins: [autoprefixer()],
            browsers: fs.readFileSync('.browserslistrc', 'utf-8').split('\n').filter(line => !line.startsWith('#')),
        }),
    ],
};

const devConfig = {
    ...commonConfig,
    sourcemap: true,
    watch: true,
    //  outfile: 'dist/bundle.dev.js',
};

const prodConfig = {
    ...commonConfig,
    minify: true,
    //  outfile: 'dist/bundle.prod.js',
};

// Récupérez l'environnement de build à partir de la variable d'environnement NODE_ENV
const isProduction = process.env.NODE_ENV === 'production';

// Utilisez la configuration appropriée en fonction de l'environnement de build
const config = isProduction ? prodConfig : devConfig;

build(config).catch(() => process.exit(1));
