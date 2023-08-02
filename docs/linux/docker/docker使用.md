# docker基本使用

https://www.runoob.com/docker/docker-container-usage.html

生成docker实例

```bash
docker run -itd --name ubuntu-test ubuntu /bin/bash
```

--network docker-network   指定docker内部网络

创建内部网络

```bash
docker network create docker-network --driver bridge
```

进入已运行docker命令模式

```bash
docker exec -it 243c32535da7 /bin/bash
```

删除docker实例

```bash
docker rm -f 1e560fca3906
```

删除镜像

```bash
 docker rmi hello-world
```



# docker实例生成镜像

````
docker commit -a "cxf" -m "ubuntu update apt source-list" 40624ead641c cxf/ubuntu:0.1
````



# 镜像打包和载入

镜像打成tar包：docker save -o cxf-ubuntu:0.1.tar cxf/ubuntu:0.1

从镜像文件载入： docker load -i cxf-ubuntu:0.1.tar 