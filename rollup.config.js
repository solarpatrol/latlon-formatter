import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-es';

const { NODE_ENV } = process.env;

const globals = {};

const external = Object.keys(globals);

const babelOptions = {
    babelrc: false,
    presets: [
        ['env', { modules: false }]
    ],
    plugins: [
        'external-helpers'
    ],
    exclude: 'node_modules/**'
};

const plugins = [
    babel(babelOptions),
    resolve(),
    commonjs()
];

if (NODE_ENV === 'production') {
    plugins.push(uglify({}, minify));
}

export default {
    name: 'latlonFormatter',
    input: 'src/index.umd.js',
    output: {
        file: `dist/latlon-formatter${NODE_ENV === 'production' ? '.min' : ''}.js`,
        format: 'umd'
    },
    globals,
    external,
    plugins
};
