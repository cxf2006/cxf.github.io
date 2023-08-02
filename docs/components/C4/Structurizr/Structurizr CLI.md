参考连接:https://github.com/structurizr/cli

# 本地安装

​	参考连接：https://github.com/structurizr/cli/blob/master/docs/local-installation.md

​	下载安装包：https://github.com/structurizr/cli/releases



​	下载后，解压到自定义目录，配置该目录到环境变量即可(可选)。

# 使用

​	参考连接：https://github.com/structurizr/cli/blob/master/docs/getting-started.md

​	cli主要有两方面功能，一是将本地workspace内容同步到Structurizr Cloud Service或者Structurizr On-promises。二是将Structurizr DSL格式转换成其他格式，如：plantuml/c4plantuml/mermaid/dot等。

​	主要命令：

​		workspace 同步 

```bash
structurizr push -id WORKSPACE_ID -key KEY -secret SECRET -workspace workspace.dsl
```

​			

​	格式转换

```bash
structurizr export -workspace workspace.dsl -format plantuml
```

​		export命令参考：https://github.com/structurizr/cli/blob/master/docs/export.md