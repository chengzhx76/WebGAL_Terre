## 部署手册

### 1.编译后端代码

```

cd ~\WebGAL_Terre\packages\terre2
yarn build

```

编译成功后会生成 `~\WebGAL_Terre\packages\terre2\dist` 目录，需要把`~\WebGAL_Terre\packages\terre2\assets`目录和`~\WebGAL_Terre\packages\terre2\package.json`文件放入`dist`目录下；


### 2.上传编译后的生产包到服务器&&安装依赖

在服务器上创建相应目录，把`dist`目录下的文件上传到服务器；


### 3.安装依赖&&启动服务

在上传后的目录下分别执行

```
yarn

node main.js

```
看到下面提醒说明启动成功

WebGAL Terre 4.4.13 starting at ~/terre2

### 4.验证服务是否可用

在浏览器输入，可以看到swagger提供的API页面，说明启动成功。

```
http://localhost:3001/api
```

### 5.编译前端编辑器代码
```

cd ~\WebGAL_Terre\packages\origine2

yarn build

```

编译成功后会生成 `~\WebGAL_Terre\packages\origine2\dist` 目录；


### 6.上传编译后的生产包到服务器

在刚在服务器上后端的代码下创建`public`目录；把`dist`目录下的文件上传到当前目录；


### 7.验证服务是否可用

在浏览器输入，可以看到编辑器页面，说明启动成功。

```
http://localhost:3001/
```


Tips：

```
编译前端编辑器失败

import {IFileInfo} from "webgal-terre-2/dist/Modules/webgal-fs/webgal-fs.service";
改为
import {IFileInfo} from "../../../../../../../terre2/dist/Modules/webgal-fs/webgal-fs.service";
```