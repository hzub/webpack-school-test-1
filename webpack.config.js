

module.exports = {
    entry: {
        index: __dirname + '/src/index.js',
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                    query: {
                        presets: ['es2015'],
                    },
                }],
            },
        ],
    }
};
