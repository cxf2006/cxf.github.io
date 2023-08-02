# 1 openldap、phpLdapAdmin安装

## 1.1 安装Docker-compose

参考连接：https://www.cnblogs.com/xiondun/p/16686265.html

下载地址    https://github.com/docker/compose  (源码地址)

​			      https://github.com/docker/compose/releases (可执行包)

安装包放到/usr/local/bin/目录下，赋777权限，名称修改为docker-compose。

当前目录下查看版本：./docker-compose  -v

环境变量配置:  vim ~/.bash_profile  追加 PATH=$PATH:/usr/local/bin/

删除docker-compose,直接删除下载的二进制包即可   sudo  rm  /usr/local/bin/docker-compose

## 1.2  docker-compose安装openldap、php-ldap-admin



home目录下新建composetest文件夹

composetest文件夹下新建docker-compose.yml,文件内容如下：

参考连接：https://zhuanlan.zhihu.com/p/532447126?utm_id=0  下的 [十一 docker-compose 部署openLDAP][3、单点部署方式三]

```yaml
version: '3.5'

services:
  openldap:
    # 使用bitnami的镜像公司维护
    image: bitnami/openldap:2.6
    container_name: "openldap"
    hostname: "ldap"
    restart: always
    ports:
      - '389:1389'    # 注意这里的端口号
      - '636:1636'    # 注意这里的端口号
    environment:
      LDAP_ROOT: "dc=demo,dc=com"
      LDAP_ADMIN_USERNAME: "admin"
      LDAP_ADMIN_PASSWORD: "123456"
      LDAP_USERS: "user01,user02"
      LDAP_PASSWORDS: "123456,123456"
    volumes:
      - 'openldap_data:/bitnami/openldap'
    networks:
      - appldap

  phpldapadmin:
    image: "osixia/phpldapadmin:latest"
    container_name: "phpldapadmin"
    hostname: "phpldapadmin"
    restart: always
    depends_on:
      - openldap
    environment:
      # PHPLDAPADMIN_HTTPS: "false"
      PHPLDAPADMIN_LDAP_HOSTS: "192.168.1.103"    # 此处为宿主机IP
    ports:
      # - 80:80      # http
      - '8443:443'   # https
    networks: 
      - appldap

volumes:
  openldap_data:
    driver: local

networks:
  appldap:
    driver: bridge
```

执行命令安装：docker-compose up -d  （-d为后台执行）

浏览器访问https://宿主机IP:8443

管理员账号: cn=admin,dc=demo,dc=com

密码: 123456



