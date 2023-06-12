const typescript = require('rollup-plugin-typescript2');
const scss = require('rollup-plugin-scss');
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const deletePlugin = require('rollup-plugin-delete');
const fs = require('fs');

// Récupérez l'environnement de build à partir de la variable d'environnement NODE_ENV
const isProd = process.env.NODE_ENV === 'production';

const browserslist = fs
    .readFileSync('.browserslistrc', 'utf-8')
    .split('\r\n')
    .filter((line) => !line.startsWith('#'));

//console.log(browserslist);

const commonConfig = {
    input: 'src/index.tsx',
    output: {
        file: 'public/dist/bundle.js',
        format: 'iife',
        sourcemap: !isProd,
        // globals: {
        //     react: 'React',
        //     'react-dom': 'ReactDOM',
        // },
    },
    //external: ['react', 'react-dom'],
    plugins: [
        typescript({
            tsconfig: 'tsconfig.json',
            // tsconfigOverride: {
            //     compilerOptions: {
            //         declaration: false,
            //     },
            // },
        //    jsx: 'react',
        }),
        scss({
            // name: 'main.css',
            // fileName: 'main.css',
            output: function (styles, styleNodes, bundle) {
                // console.log(styles);
                fs.writeFileSync('./public/dist/main.css', styles)

                // fs.writeFileSync('./public/dist/main.css.map', styleNodes.map);
                // if (!isProd && bundle && bundle.map) {
                //     fs.writeFileSync('./public/dist/main.css.map', bundle.map.toString());
                // }
            },
            watch: ['src/**/*.scss'],
            sourceMap: !isProd,
            processor: () =>
                postcss([autoprefixer({ overrideBrowserslist: browserslist })]),
        }),
        resolve({
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
          }),
        commonjs(),
        // deletePlugin({
        //     targets: ['public/dist/*'], // Spécifiez le dossier ou les fichiers à supprimer
        //     verbose: true, // Affichez une sortie détaillée lors de la suppression
        //     runOnce: isProd, // Exécutez cette étape une seule fois en production
        // }),
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
