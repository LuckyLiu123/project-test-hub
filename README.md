# project-test-hub
前端工程化配置

type: "module"  将项目定义为ESM规范
publicConfig.access 表示当前项目发布到NPM的访问级别

为什么eslint生成的配置文件名称是.eslintrc.cjs而不是.eslintrc.js?
    因为我们将项目定义为ESM，eslit --init会自动识别type，并生成兼容的配置文件名称，如果我们改回.js结尾，
    再运行eslint将会报错。出现这个问题是eslint内部使用了require()语法读取配置。

安装Husky并生成.husky文件夹
npm i husky -D
npx husky install

添加lint钩子
npx husky add .husky/pre-commit "npm run lint"

相当于手动在.husky/pre-commit文件写入以下内容：
```js
    #!/bin/sh
    . "$(dirname "$0")/_/husky.sh"
    npm run lint
```