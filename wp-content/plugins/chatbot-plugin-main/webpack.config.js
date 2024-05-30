const defaultConfig = require('@wordpress/scripts/config/webpack.config');

module.exports = {
    ...defaultConfig,
    entry: './js/index.js',
    output: {
        path: __dirname + '/build',
        filename: 'index.js'
    }
};
