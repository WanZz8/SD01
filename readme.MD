### 介绍
1.将React-JBYT修改成为RN版本。上线网址w01.pandaqh.com

2.React-JBYT的Git 仓库https://gitlab.com/FCG-YX/LT/React-JBYT.git

3.新版本添加Eslint 代码风格检查。相关配置请看文档。


### 错误处理

1. 关于错误: Error: While resolving module `react-native-vector-icons/MaterialIcons`, the Haste package `react-native-vector-icons` was found.

解决办法： `rm ./node_modules/react-native/local-cli/core/__fixtures__/files/package.json`

2. 关于错误: Error: Unable to resolve module `@babel/runtime/helpers/interopRequireDefault` from `/Volumes/我的电脑/anvo/test/sd01/node_modules/react-native-vector-icons/dist/index.js`: Module does not exist in the module map

解决办法: yarn add @babel/runtime 即可。因为是es6版本的原因

3. vector字体包依赖出错

解决办法: `rm ./node_modules/react-native/local-cli/core/__fixtures__/files/package.json`

4. #include "config.h"
解决办法
cd node_modules/react-native/third-party/glog-0.3.4

./configure --host arm-apple-darwin
