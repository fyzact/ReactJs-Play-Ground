const webPack=require("webpack");
const path=require("path");
const HtmlWebpackPlugin=require("html-webpack-plugin");

process.env.NODE_ENV="development";

module.exports={
    mode:"development",
    target:"web",
    devtool:"cheap-module-soruce-map",
    entry:"./src/Index",
    output:{
        path:path.resolve(__dirname,"build"),
        publicPath:"/",
        filename:"bundle.js"
    },
    devServer:{
        stats:"minimal",//in console don't write a lot informatin
        overlay:true,//show error
        historyApiFallback:true,//all request to index.html
        disableHostCheck:true,
        headers:{"Access-Control-Allow-Origin":"*"},
        https:false
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"src/index.html",
            favicon:"src/favicon.ico"
        })
    ],
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude: /node_modules/,
                use:["babel-loader"]

            },
            {
                test:/(\.css)$/,
                use:["style-loader,css-loader"]

            }
        ]
    }
}
