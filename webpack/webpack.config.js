const path = require('path');
const HtmlPlugin = require('html-webpack-plugin')
module.exports = {
    mode:'development',
    entry:{
        index:'./src/index.js'},
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'index.js'},
    module:{
      rules:[
          {
              test:/\.css$/,
              use:['style-loader','css-loader']
          }
      ]
    },
    plugins:[
        new HtmlPlugin({
            minify:{
                removeAttributeQuotes:true
            },
            hash:true,
            template:'./src/index.html'
        })
    ],
    devServer:{
        contentBase:path.resolve(__dirname,'dist'),
        host:'localhost',
        compress:true,
        port:8081,
        open:true
    }
}