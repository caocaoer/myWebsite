import path from 'path';
import webpack from 'webpack';
import autoprefixer from 'autoprefixer';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import StyleLintPlugin from 'stylelint-webpack-plugin';
import CSSSplitWebpackPlugin from 'css-split-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';

const STATIC_PATH = 'static';
const extractVendor = new ExtractTextPlugin(`${STATIC_PATH}/css/[contenthash].vendor.css`);
const extractStyle = new ExtractTextPlugin(`${STATIC_PATH}/css/[contenthash].style.css`);

export default {
    entry: {
        main: ['babel-polyfill', './src/index.jsx'],
        vendor: ['react', 'react-dom', 'react-router']
    },
    output: {
        publicPath: '/',
        path: path.join(__dirname, 'build'),
        filename: `${STATIC_PATH}/js/[chunkhash].[name].js`
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.scss']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.join(__dirname, 'src'),
                use: ['babel-loader']
            },
            {
                test: /\.(css|scss)$/,
                include: path.join(__dirname, 'node_modules'),
                use: extractVendor.extract(['css-loader', 'postcss-loader', 'sass-loader'])
            },
            {
                test: /\.(css|scss)$/,
                include: path.join(__dirname, 'src'),
                use: extractStyle.extract([
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 2,
                            localIdentName: '[local]__[hash:base64:5]'
                        }
                    },
                    'postcss-loader',
                    'sass-loader'
                ])
            }, {
                test: /\.(woff|eot|ttf|svg)$/,
                include: path.join(__dirname, 'src/fonts'),
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10,
                        name: `${STATIC_PATH}/fonts/[hash].[ext]`
                    }
                }]
            }, {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                exclude: path.join(__dirname, 'src/fonts'),
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10,
                        name: `${STATIC_PATH}/images/[hash].[ext]`
                    }
                }]
            }, {
                test: /\.ico$/,
                include: path.join(__dirname, 'src/images'),
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10,
                        name: `${STATIC_PATH}/images/[name].[ext]`
                    }
                }]
            }
        ]
    },
    plugins: [
        extractVendor,
        extractStyle,
        new StyleLintPlugin(),
        new CSSSplitWebpackPlugin({
            size: 3000,
            filename: `${STATIC_PATH}/css/[name]-[part].[ext]`
        }),
        new CleanWebpackPlugin(['build']),                  // 清除编译目录
        new webpack.optimize.CommonsChunkPlugin('vendor'),  // 提取公共模块
        new HtmlWebpackPlugin({                             // 主页面入口index.html
            filename: 'index.html',
            template: './src/index.html'
        }),
        new CopyWebpackPlugin([{
            context: './src/file',
            from: '*.*',
            to: `${STATIC_PATH}/file`
        }]),
        new webpack.LoaderOptionsPlugin({
            minimize: true,                                 // 压缩loader读取的文件
            options: {
                postcss: function() {
                    return [autoprefixer];
                }
            }
        })
    ]
};