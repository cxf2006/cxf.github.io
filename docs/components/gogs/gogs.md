# 安装

## docker安装

参考链接：https://github.com/gogs/gogs/tree/main/docker

### 	拉取镜像

```bash
docker pull gogs/gogs
```

### 创建卷映射目录

```bash
mkdir -p /var/gogs
```

目录结构：

```
/var/gogs
|-- git
|   |-- gogs-repositories
|-- ssh
|   |-- # ssh public/private keys for Gogs
|-- gogs
    |-- conf
    |-- data
    |-- log
```

### 创建docker实例

```bash
docker run --name=gogs -p 10022:22 -p 10880:3000 -v /var/gogs:/data gogs/gogs
```

端口解析：10022为git服务访问端口    10880为web管理服务访问端口

### 应用设置

**Repository Root Path**: 默认/home/git/gogs-repositories，不用修改。

**Run User**: 默认git，不用修改。

**Domain**：docker容器ip，如果需要在docker宿主机外访问gogs服务需要设置该参数。此时运行gogs的容器就需要独立的网络ip。

**SSH Port**：Use the exposed port from Docker container. For example, your SSH server listens on `22` inside Docker, **but** you expose it by `10022:22`, then use `10022` for this value. **Builtin SSH server is not recommended inside Docker Container**

**HTTP Port**:容器内http服务监听的端口

**Application URL**:  Use combination of **Domain** and **exposed HTTP Port** values (e.g. `http://192.168.99.100:10880/`).

### 容器设置

This container has some options available via environment variables, these options are opt-in features that can help the administration of this container:

- SOCAT_LINK:
  - Possible value: `true`, `false`, `1`, `0`
  - Default: `true`
  - Action: Bind linked docker container to localhost socket using socat. Any exported port from a linked container will be binded to the matching port on localhost.
  - Disclaimer: As this option rely on the environment variable created by docker when a container is linked, this option should be deactivated in managed environment such as Rancher or Kubernetes (set to `0` or `false`)
- RUN_CROND:
  - Possible value: `true`, `false`, `1`, `0`
  - Default: `false`
  - Action: Request crond to be run inside the container. Its default configuration will periodically run all scripts from `/etc/periodic/${period}` but custom crontabs can be added to `/var/spool/cron/crontabs/`.
- BACKUP_INTERVAL:
  - Possible value: `3h`, `7d`, `3M`
  - Default: `null`
  - Action: In combination with `RUN_CROND` set to `true`, enables backup system.
    See: [Backup System](https://github.com/gogs/gogs/tree/main/docker#backup-system)
- BACKUP_RETENTION:
  - Possible value: `360m`, `7d`, `...m/d`
  - Default: `7d`
  - Action: Used by backup system. Backups older than specified in expression are deleted periodically.
    See: [Backup System](https://github.com/gogs/gogs/tree/main/docker#backup-system)
- BACKUP_ARG_CONFIG:
  - Possible value: `/app/gogs/example/custom/config`
  - Default: `null`
  - Action: Used by backup system. If defined, supplies `--config` argument to `gogs backup`.
    See: [Backup System](https://github.com/gogs/gogs/tree/main/docker#backup-system)
- BACKUP_ARG_EXCLUDE_REPOS:
  - Possible value: `test-repo1`, `test-repo2`
  - Default: `null`
  - Action: Used by backup system. If defined, supplies `--exclude-repos` argument to `gogs backup`.
    See: [Backup System](https://github.com/gogs/gogs/tree/main/docker#backup-system)
- BACKUP_EXTRA_ARGS:
  - Possible value: `--verbose --exclude-mirror-repos`
  - Default: `null`
  - Action: Used by backup system. If defined, append content to arguments to `gogs backup`.
    See: [Backup System](https://github.com/gogs/gogs/tree/main/docker#backup-system)

### 备份

Automated backups with retention policy:

- `BACKUP_INTERVAL` controls how often the backup job runs and supports interval in hours (h), days (d), and months (M), eg. `3h`, `7d`, `3M`. The lowest possible value is one hour (`1h`).
- `BACKUP_RETENTION` supports expressions in minutes (m) and days (d), eg. `360m`, `2d`. The lowest possible value is 60 minutes (`60m`).

### 升级

​	警告：数据一定要保存到容器外，即运行容器时指定参数 -v /var/gogs:/data 将数据目录映射到宿主机中。

升级步骤:

- `docker pull gogs/gogs`

- `docker stop gogs`

- `docker rm gogs`

- 最后使用之前运行容器实例相同的参数运行新实例。

  ### 高级配置

​	[docker容器和宿主机共用22端口的配置](http://www.ateijelo.com/blog/2016/07/09/share-port-22-between-docker-gogs-ssh-and-local-system)

## gogs服务初始化

### 数据库配置

​	数据库使用mysql



## 配置ssh认证密钥

### 界面配置步骤



此处不介绍密钥如何生成。

代码下载测试，git clone ssh://git@192.168.1.103:10022/cxf/test.git 或者 git clone http://192.168.1.103:10880/cxf/test.git   仓库地址根据实际情况修改。

## 二进制包安装

参考地址：https://gogs.io/docs/installation/install_from_binary

### 包下载地址

​	https://gogs.io/docs/installation/install_from_binary

### 安装步骤概述

1. 检查[环境要求](https://gogs.io/docs/installation)是否已满足
2. 解压压缩包。
3. 使用命令 `cd` 进入到刚刚创建的目录。
4. 执行命令 `./gogs web`。
5. Gogs 默认会在端口 `3000` 启动 HTTP 服务，访问 `/install` 以进行初始配置（例如 http://localhost:3000/install ）。

安装完成后可继续参照 [配置与运行](https://gogs.io/docs/installation/configuration_and_run.html)。

### 安装环境

#### docker安装ubuntu

````bash
docker run -itd --name=ubuntu_gogs -p 10023:22 -p 10881:3000  cxf/ubuntu:0.1
````



#### 安装git

````
apt-get install -y git
````

报错:

````
root@1db2ec488772:/# apt-get install -y git
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
Some packages could not be installed. This may mean that you have
requested an impossible situation or if you are using the unstable
distribution that some required packages have not yet been created
or been moved out of Incoming.
The following information may help to resolve the situation:

The following packages have unmet dependencies:
 perl : Depends: perl-base (= 5.26.1-6ubuntu0.6) but 5.34.0-3ubuntu1.1 is to be installed
 perl-base : Breaks: perl (< 5.34.0~) but 5.26.1-6ubuntu0.6 is to be installed
E: Error, pkgProblemResolver::Resolve generated breaks, this may be caused by held packages.
````

解决错误：

```bash
apt install -f perl-base=5.26.1-6
```

````
root@1db2ec488772:/# apt install -f perl-base=5.26.1-6
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
Suggested packages:
  perl
The following packages will be REMOVED:
  usrmerge
The following packages will be DOWNGRADED:
  perl-base
0 upgraded, 0 newly installed, 1 downgraded, 1 to remove and 0 not upgraded.
Need to get 1391 kB of archives.
After this operation, 115 kB disk space will be freed.
Do you want to continue? [Y/n] y
0% [Working]
Get:1 http://mirrors.aliyun.com/ubuntu bionic/main amd64 perl-base amd64 5.26.1-6 [1391 kB]
Fetched 1391 kB in 13s (104 kB/s)
debconf: delaying package configuration, since apt-utils is not installed
(Reading database ... 10000 files and directories currently installed.)
Removing usrmerge (25ubuntu2) ...
dpkg: warning: downgrading perl-base from 5.34.0-3ubuntu1.1 to 5.26.1-6
(Reading database ... 9974 files and directories currently installed.)
Preparing to unpack .../perl-base_5.26.1-6_amd64.deb ...
Unpacking perl-base (5.26.1-6) over (5.34.0-3ubuntu1.1) ...
Setting up perl-base (5.26.1-6) ...

````

安装成功：

````bash
apt-get install -y git
````

````
root@1db2ec488772:/# git --version
git version 2.17.1
````

#### 安装ssh服务

执行安装命令报错：

````bash
apt-get install  openssh-server
````

````
root@1db2ec488772:/# apt-get install  openssh-server
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
Some packages could not be installed. This may mean that you have
requested an impossible situation or if you are using the unstable
distribution that some required packages have not yet been created
or been moved out of Incoming.
The following information may help to resolve the situation:

The following packages have unmet dependencies:
 libc6 : Breaks: openssh-server (< 1:8.2p1-4) but 1:7.6p1-4ubuntu0.7 is to be installed
         Recommends: libnss-nis but it is not installable
         Recommends: libnss-nisplus but it is not installable
E: Unable to correct problems, you have held broken packages.

````

执行

````bash
root@1db2ec488772:/# apt-cache policy libc6 openssh-server
libc6:
  Installed: 2.35-0ubuntu3.1
  Candidate: 2.35-0ubuntu3.1
  Version table:
 *** 2.35-0ubuntu3.1 100
        100 /var/lib/dpkg/status
     2.27-3ubuntu1.6 500
        500 http://mirrors.aliyun.com/ubuntu bionic-updates/main amd64 Packages
        500 http://mirrors.163.com/ubuntu bionic-updates/main amd64 Packages
     2.27-3ubuntu1.5 500
        500 http://mirrors.aliyun.com/ubuntu bionic-security/main amd64 Packages
        500 http://mirrors.163.com/ubuntu bionic-security/main amd64 Packages
     2.27-3ubuntu1 500
        500 http://mirrors.aliyun.com/ubuntu bionic/main amd64 Packages
        500 http://mirrors.163.com/ubuntu bionic/main amd64 Packages
openssh-server:
  Installed: (none)
  Candidate: 1:7.6p1-4ubuntu0.7
  Version table:
     1:7.6p1-4ubuntu0.7 500
        500 http://mirrors.aliyun.com/ubuntu bionic-updates/main amd64 Packages
        500 http://mirrors.163.com/ubuntu bionic-updates/main amd64 Packages
     1:7.6p1-4ubuntu0.5 500
        500 http://mirrors.aliyun.com/ubuntu bionic-security/main amd64 Packages
        500 http://mirrors.163.com/ubuntu bionic-security/main amd64 Packages
     1:7.6p1-4 500
        500 http://mirrors.aliyun.com/ubuntu bionic/main amd64 Packages
        500 http://mirrors.163.com/ubuntu bionic/main amd64 Packages
````

最后执行命令升级所有包，才正确安装了openssh-server

````bash
apt-get upgrade
apt-get install  openssh-server
````

````
root@1db2ec488772:/# service ssh start
 * Starting OpenBSD Secure Shell server sshd                                                                                                                                                 [ OK ]
root@1db2ec488772:/# service ssh restart
 * Restarting OpenBSD Secure Shell server sshd                                                                                                                                               [ OK ]
root@1db2ec488772:/# service ssh status
 * sshd is running
````

