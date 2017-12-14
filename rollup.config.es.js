import babel from 'rollup-plugin-babel';

const config = {
    name: 'latlonFormatter',
    input: 'src/index.js',
    output: {
        file: 'dist/latlon-formatter.es.js',
        format: 'es'
    },
    external: [
        'object-assign'
    ],
    plugins: [
        babel({
            babelrc: false,
            presets: [
                ['env', { modules: false }]
            ],
            plugins: [
                'external-helpers'
            ],
            exclude: 'node_modules/**'
        })
    ]
};

export default config;
