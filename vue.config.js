const path = require("path")
const { getThemeVariables } = require("ant-design-vue/dist/theme")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin")
const MonacoLocalesPlugin = require("monaco-editor-locales-plugin")

function resolve(dir) {
  return path.join(__dirname, dir)
}
const isProd = process.env.NODE_ENV === "production"

module.exports = {
  publicPath: process.env.BASE_URL,
  outputDir: "dist/",
  assetsDir: "example/assets",
  productionSourceMap: false,
  lintOnSave: true,
  devServer: {
    // 它支持webPack-dev-server的所有选项
    host: "localhost", // 也可以直接写IP地址这样方便真机测试
    port: 2002, // 端口号
    https: false, // https:{type:Boolean}
    open: true // 配置自动启动浏览器
  },
  filenameHashing: false,
  pages: {
    index: {
      entry: "src/pages/index/main.ts",
      template: "public/index.html",
      filename: "index.html",
      title: "Mars3D功能列表",
      chunks: ["chunk-vendors", "chunk-common", "index"]
    },
    editor: {
      entry: "src/pages/editor/main.ts",
      template: "public/index.html",
      filename: "editor.html",
      title: "Mars3D示例",
      chunks: ["chunk-vendors", "chunk-common", "editor"]
    }
  },
  configureWebpack: {
    devServer: {
      historyApiFallback: false
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          use: [
            {
              // 本地引用loader
              loader: path.resolve("./build/example-vue-loader.js")
            }
          ]
        }
      ]
    },
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          {
            from: "src/example/**/*",
            to: path.join(__dirname, "dist"),
            transformPath(targetPath) {
              return path.join("example", targetPath.split("example")[1])
            },
            transform(source, path) {
              if (!isProd && path.endsWith("map.js") && process.env.VUE_APP_SOURCE_FILE) {
                let fileContent = source.toString()
                fileContent = fileContent.replace(/export let /g, "var ")
                fileContent = fileContent.replace(/export const /g, "var ")
                fileContent = fileContent.replace(/export /g, "")
                fileContent = fileContent.replace('import * as mars3d from "mars3d"', "")
                fileContent = fileContent.replace(/import/g, "// import")
                fileContent = fileContent.replace("const Cesium = mars3d.Cesium", "")
                return Buffer.from(fileContent)
              } else {
                return source
              }
            }
          },
          {
            from: "src/components/**/*.vue",
            to: path.join(__dirname, "dist"),
            transformPath(targetPath) {
              return path.join("vue", targetPath.split("components")[1])
            }
          }
        ]
      }),
      new MonacoLocalesPlugin({
        // 设置支持的语言
        languages: ["es", "zh-cn"],
        // 默认语言
        defaultLanguage: "zh-cn",
        // 打印不匹配的文本
        logUnmatched: false,
        // 自定义文本翻译
        mapLanguages: { "zh-cn": { "Peek References": "查找引用", "Go to Symbol...": "跳到变量位置", "Command Palette": "命令面板" } }
      })
    ]
  },
  chainWebpack: (config) => {
    // config.optimization.minimize(false)

    config.resolve.alias.set("@", resolve("src")).set("@comp", resolve("src/components")).set("@exmp", resolve("src/example"))

    config.plugin("monaco-editor").use(MonacoWebpackPlugin)

    // 移除 prefetch preload 插件
    config.plugins.delete("preload-editor")
    config.plugins.delete("prefetch-editor")
  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          ...getThemeVariables({
            dark: true
          }),
          "border-color-base": "#cde1de",
          "primary-color": "#4db3ff",
          "body-background": "#1c222b",
          "font-size-base": "12px"
        },
        javascriptEnabled: true
      }
    }
  }
}

// 发布编译时去掉index
if (process.env.NOINDEX) {
  delete module.exports.pages.index
}