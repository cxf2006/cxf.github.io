参考连接：https://zhuanlan.zhihu.com/p/532447126?utm_id=0  

​					[十二、关于openLDAP的常用操作]

# LDAP相关概念

​	dn（Distinguished Name）

：区分名称，dn是条目在整棵树中的唯一标识。

​	rdn（Relative dn）：相对区分名称。



​	dc（Domain Component）：域名组件。例如：example.com变成dc=example,dc=com。

​	c（Country）：国家，如“CN”或者“US”。

​	o（Organization）：组织名，如XXX银行，XXX部门，XXX公司等等。	

​	ou（Organization Unit）：组织单元。	

​	cn（Common Name）：公共名称。

​	sn（surname）：姓氏。

​	uid（User ID）：用户ID

# 特有属性通过编写schema文件实现



# 通过ldif文件数据备份，新增数据



# 安全连接ssl配置



# ACL控制访问权限

## 设置方法

1、可以将 include行放在/etc/openldap/slapd.conf 的顶部，指向一个单独的文件（例如， include /etc/openldap/slapd.access.conf）
2、或者可以将 ACL 直接添加到 slapd.conf。这完全由您选择 ― Mandrake 通常使用 include 行；Red Hat 将 ACL 添加到配置文件。slapd.conf文件路径：/etc/openldap/slapd.conf

## ACL设置语法

### 1.语法

access to what：
by who access control
其中,access to指示启用访问控制，上句大致可以理解为:
access to <对什么目标进行控制>[by <作用于哪些访问者> <授予什么样的访问权限><采取什么样的匹配控制动作>]+

### 2.剖析

#### 2.1 控制目标 what

这一域主要是实现对ACL应用对象的指定，对象可以是记录和属性。选择ACL目标记录的方法一般有两种：DN和filter,语法为：

what ::= * |
[dn[.basic-style]=regex | dn.scope-style=DN]
[filter=ldapfilter] [attrs=\<attrlist\>]

##### 2.1.1 指定所有的记录

access to *

##### 2.1.2 通过DN指定

语法如下：

to dn[.basic-style]=regex
basic-style ::= regex | exact
to dn.scope-style=DN
scope-style ::= base | one | subtree | children

第一种方法是使用正则表达式(dn.regex)或精确匹配(dn.style)的方式来匹配符合条件的记录（这个好像不像想象的那么简单，实现起来颇为费脑筋），例如：

access to dn="^.*,uid=([^,]+),ou=users,(.*)$"

第二种方法通过“区域”选择的方法进行目标记录的选取，对以指定的DN开始的目录树区域进行目标记录匹配。匹配区域的方式共有四种：
base 只匹配DN本身一条记录
one 匹配以给定DN为父目录的所有记录
subtree 匹配以给定DN为根目录的所有子树内的记录
children 匹配给定DN下的所有记录，但应该不包括以DN直接命名的那条记录(参见例子的解释)

例如：对于
0: dc=mydomain,dc=org
1: cn=root,dc=mydomain,dc=org
2: ou=users,dc=mydomain,dc=org
3: uid=samba,ou=users,dc=mydomain,dc=org
4: cn=Administator,uid=samba,ou=users,dc=mydomain,dc=org
5: uid=guest,ou=users,dc=mydomain,dc=org

规则 dn.base=”ou=users,dc=mydomain,dc=org” 只会匹配记录2
规则 dn.one=”ou=users,dc=mydomain,dc=org” 匹配记录3和记录5，记录4是记录3的子目录，故不算在内
规则 dn.subtree=”ou=users,dc=mydomain,dc=org” 匹配记录2、3、4、5
规则 dn.children=”ou=users,dc=mydomain,dc=org” 匹配记录3、4、5,因为记录0、1和2都是以DN直接命名的，故不匹配

##### 2.1.3 通过filter匹配记录

通过filter指定过滤规则进行记录过虑，语法如下：

access to filter=ldap filter

其中filter指定的为search的过滤规则，这类同于linux系统中grep的匹配方式。如：

access to filter=(objectClass=sambaSamAccount)

也可以结合使用DN和filter进行记录的匹配，例如：

access to dn.subtree=”ou=users,dc=mydomain,dc=org” filter=(objectClass=posixAccount)

##### 2.1.4 通过attrs选取匹配记录

语法:
attrs=attribute list

例如：
access to attrs=uid,uidNumber,gidNumber

也可以结合使用DN和attrs进行记录的匹配，例如：
access to dn.subtree="ou=users,dc=mydomain,dc=org" attrs=uid

#### 2.2 被用来授权的访问者的指定

指定被授权的用户范围的方法大致有以下几种：

* 所有的访问者，包括匿名的用户
anonymous 非认证的匿名用户
users 认证的用户
self 目标记录的用户自身
dn[.\<basic-style\>]=\<regex\> 在指定目录内匹配正则表达式的用户
dn.\<scope-style\>=\<DN\> 指定DN内的用户

例如：
by dn.subtree="ou=users,dc=domain,dc=org"="^samba*"

#### 2.3 被授予的权限access

当选取好ACL作用的目标记录并选取好用户范围后，就该给这些用户授予他们应该得到的权限了。大致的权限(由低到高)有以下几类：
none 无权限，即拒绝访问
auth 访问bind（认证）设置的权限；前提是需要用户提交一个DN形式的用户名并能通过认证
compare 比较属性的权限；（例如：对照查看某用户的telephoneNumber值是不是158 8888 8888）,但并不具有搜索的权限
search 利用过虑条件进行搜索的权限,但这并不一定具有可读取搜索结果的权限
read 读取搜索结果的权限
write 更改记录属性值的权限

可以在slapd.conf文件中通过defaultaccess指定默认的权限级别,如：
defaultaccess search

#### 2.4 采取什么样的匹配控制动作control

在进行记录的匹配时，如果有多条规则存在，那么在第一次匹配产生后是否还进行后续的匹配或采取其它的动作将取决于此项的设置；控制方式共有以下三种：

stop 这个是默认值，这表示在一次匹配产生后将不再进行下一个匹配，所有后续的匹配将会停止。
continue 无论匹配是否已经发生，继续进行直到所有的规则全部进行完匹配检查
break 一个匹配发生后，跳出当前的子句进行后一个子句的检查

#### 2.5 一个例子

access to dn.chilren="ou=users,dc=mydomain,dc=org"
attrs=userPassword #指定“密码”属性
by self write #用户自己可更改
by * auth #所有访问者需要通过认证
by dn.children="ou=admins,dc=mydomain,dc=org" write #管理员组的用户可更改

access to dn.subtree="ou=SUDOers,dc=test,dc=com" #SUDOers的所有内容必须提供其他匿名可读，不然在linux上切换到该用户，不能使用sudo
by dn="cn=Manager,dc=test,dc=com" write
by * read
access to attrs="gidNumber,homeDirectory,loginShell,uidNumber,sshPublicKey"
by * read #对这些属性只能读，但是userPassword字段是可写的，允许用户自行修改密码，但是不能修改自己的gid，home目录等
access to *
by anonymous read #匿名访问可读
by self write #自己可写
by users read #其他用户可读

前面这些配置需要放在
database config
access to *
by dn.exact="gidNumber=0+uidNumber=0,cn=peercred,cn=external,cn=auth" manage
by * none
enable server status monitoring (cn=monitor)
database monitor
access to *
by dn.exact="gidNumber=0+uidNumber=0,cn=peercred,cn=external,cn=auth" read
by dn.exact="cn=Manager,dc=test,dc=com" read
by * none
的前面才能生效
原文链接：https://blog.csdn.net/dolphin_h/article/details/54960255

# filter语法

https://social.technet.microsoft.com/wiki/contents/articles/5392.active-directory-ldap-syntax-filters.aspx?Sort=MostUseful



# 各种类型服务集成ldap认证

https://cloud.tencent.com/developer/article/2008047

## 	java端连接ldap



​	