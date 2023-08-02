安装参考连接：https://structurizr.com/share/76352/documentation#installation

# Spring Boot启动包安装

```bash
java -jar structurizr-lite.war PATH
```

PATH为structurizr的数据目录，该目录自定义。

docker方式安装，参考上面的连接。

# 使用

## 工作空间

structurizr启动会到数据目录(工作空间)下查找并加载workspace.dsl和workspace.json文件(没有会自动创建)。

## STRUCTURIZR_WORKSPACE_PATH

​	工作空间可以使用环境变量配置统一的目录前缀。

## 配置structurizr.properties

​	该文件需要手动在工作空间目录下创建。参数解析如下：

| 参数名                          | 解析                                                       |
| ------------------------------- | ---------------------------------------------------------- |
| structurizr.autoSaveInterval    | 自动保存设置，值单位为毫秒                                 |
| structurizr.autoRefreshInterval | 自动刷新设置，值单位为毫秒                                 |
| structurizr.remote.workspaceId  | 远程工作空间(cloud service或On-premises上的工作空间)ID，   |
| structurizr.remote.apiKey       | 远程工作空间apiKey                                         |
| structurizr.remote.apiSecret    | 远程工作空间apiSecret                                      |
| structurizr.remote.apiUrl       | 同步到On-premises服务对的地址，同步到cloud service不用设置 |
| structurizr.remote.passphrase   | 客户端密钥，用户加密工作空间数据。**付费功能**             |
| structurizr.editable            | 是否只读，false为只读。                                    |

## 关于自动同步

​	如果配置了自动同步参数，structurizr-lite启动时会从远程更新workspace.json数据。完成编辑关闭structurizr-lite时会自动同步到远程工作空间。编辑时发现变动也会自动同步。

## 工作空间锁定

​    structurizr-lite结合远程工作空间锁定使用，在启动structurizr-lite之前打开远程工作空间的锁定，并且保持远程界面不关闭。structurizr-lite需要从环境变量STRUCTURIZR_USERNAME中获取远程Structurizr 服务的用户登录名称。设置好之后就可以正常使用。



# 常见问题

## 系统启动后图片加载失败，或者界面变形。

​	在数据目录(workspace.dsl所在目录)创建(如果没有)structurizr.properties文件，并且添加参数structurizr.url=XXX，XXX为系统访问的根路径。

​	重启structurizr-lite。

## 无法启动dot程序

​	需要安装Graphviz。

​	下载：https://graphviz.org/download/



​	安装时选择将graphviz添加到环境变量。

## 图表手动调整后，再次打开调整效果丢失。

​	可能使被远程的自动布局效果给覆盖了。

## 决策文档功能报404

http://192.168.1.101:8081/workspace/decisions/



暂未找到原因。正常界面：

![Structurizr architecture decision records screenshot](https://static.structurizr.com/img/help/decision-summary-screenshot.png)