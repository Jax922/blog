const path = require('path');
module.exports = {
    entry: {
        home: './pages/main/home.jsx'
    },
    output: {
        path: path.resolve(__dirname, './pages/build'),
        filename: '[name].js'
    },
    module:{
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    watch: true
}