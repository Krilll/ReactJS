const path = require ('path');
const htmlPlugin = require('html-webpack-plugin');


module.exports = {
    entry: {
        main: path.resolve(__dirname, 'src', 'index.jsx')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|gif)$/,
                use:
                    {
                        loader: 'file-loader',
                        options: {}
                    }
            }
        ]
    },
    plugins: [
        new htmlPlugin ({
            template: path.resolve(__dirname, 'src', 'index.html'),
            filename: 'index.html'
        }),
        new htmlPlugin ({
            template: path.resolve(__dirname, 'src', 'about.html'),
            filename: 'about.html'
        }),
        new htmlPlugin ({
            template: path.resolve(__dirname, 'src', 'posts.html'),
            filename: 'posts.html'
        }),
        new htmlPlugin ({
            template: path.resolve(__dirname, 'src', 'contact.html'),
            filename: 'contact.html'
        })
    ]
};