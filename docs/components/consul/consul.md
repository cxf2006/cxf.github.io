官网：https://developer.hashicorp.com/consul

# 安装

## docker安装ubuntu

docker run -itd --name=ubuntu_consul  -p 8300:8300  -p 8301:8301  -p 8302:8302  -p 8500:8500  cxf/ubuntu:0.1

## 下载consul

下载地址：https://releases.hashicorp.com/consul/1.14.3/consul_1.14.3_linux_amd64.zip

````bash
docker cp /home/cxf/consul_1.14.3_linux_amd64.zip  ab41ed594d29:/root
````

## 开发模式启动

````bash
/root/consul agent -dev -ui -client 0.0.0.0 &
````

如果无法访问http://ip:8500/ui 可以查看下是不是防火墙问题。

指定-client参数，否则ui可能无法访问。

## 服务发现

## 健康检查

## 键值存储

​		key/value存储类型不限，不能超过512K

​		key以目录树形式组织，例如：/fgs/test/application.yml。可以查询某个目录下的所有键值对。

​        读写键值对有两种方式，consul命令、http api。

### consul命令读写

​		写： consul   kv  put  [key]  [value] 

​		读： consul   kv  get   [key] 

​        读取详细信息：consul get -detailed [key] 

​		删： consul   kv delete [key]

### http api读写

#### 		新增或修改



​	请求方式为PUT。

​    /v1/kv为固定路径，后续为key值。

#### 	读取



​	读取和http请求为get，返回的键值是base64编码过的值。

#### 删除



http请求方式为delete。

#### 查询前缀相同key



#### 查询前缀相同的键值对信息



### spring使用consul配置

#### pom.xml文件配置

````xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
	<modelVersion>4.0.0</modelVersion>
	<parent>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-parent</artifactId>
		<version>3.0.0</version>
		<relativePath/> <!-- lookup parent from repository -->
	</parent>
	<groupId>com.example</groupId>
	<artifactId>spring-consul-test</artifactId>
	<version>0.0.1-SNAPSHOT</version>
	<name>spring-consul-test</name>
	<description>Demo project for Spring consul test</description>
	<properties>
		<java.version>17</java.version>
		<spring-cloud.version>2022.0.0</spring-cloud.version>
	</properties>
	<dependencies>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-web</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.cloud</groupId>
			<artifactId>spring-cloud-starter-consul-config</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.cloud</groupId>
			<artifactId>spring-cloud-starter-bootstrap</artifactId>
			<version>3.1.5</version>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-test</artifactId>
			<scope>test</scope>
		</dependency>
		<dependency>
			<groupId>org.projectlombok</groupId>
			<artifactId>lombok</artifactId>
			<version>1.18.24</version>
			<scope>compile</scope>
		</dependency>
	</dependencies>
	<dependencyManagement>
		<dependencies>
			<dependency>
				<groupId>org.springframework.cloud</groupId>
				<artifactId>spring-cloud-dependencies</artifactId>
				<version>${spring-cloud.version}</version>
				<type>pom</type>
				<scope>import</scope>
			</dependency>
		</dependencies>
	</dependencyManagement>

	<build>
		<plugins>
			<plugin>
				<groupId>org.springframework.boot</groupId>
				<artifactId>spring-boot-maven-plugin</artifactId>
			</plugin>
		</plugins>
	</build>

</project>
````

#### bootstrap.yml文件配置

````yaml
spring: 
  application: 
    name: testApp
  cloud:
    consul:
      # consul 基本配置
      host: 192.168.1.103
      port: 8500
      config:
        # 启用 consul 配置中心
        enabled: true
        # 基础文件夹，默认值 config
        prefix: config
        # 应用文件夹，默认值 application，consul 会加载 config/<applicationName> 和 config/<defaultContext> 两份配置，设置为相同值，则只加载一份
        default-context: testApp
        # 环境分隔符，默认值 ","
        profile-separator: "-"
        # 配置转码方式，默认 key-value，其他可选：yaml/files/properties
        format: yaml
        # 配置 key 值，value 对应整个配置文件
        data-key: data
        watch:
          # 启用配置自动刷新
          enabled: true
          # ？请求 consul api 的延迟，单位：秒
          wait-time: 1
          # 刷新频率，单位：毫秒
          delay: 10000
````

#### java文件

````java
package com.example.spring.consul;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
@EnableConfigurationProperties({RefreshParam.class})
public class SpringConsulTestApplication {
	public static void main(String[] args) {
		SpringApplication.run(SpringConsulTestApplication.class, args);
	}
}
````



````java
package com.example.spring.consul;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.stereotype.Component;

/**
 * @Description TODO
 * @Author chengxunfei
 * @Date 2022/12/22 16:43
 * @Version 1.0
 */
@ConfigurationProperties("p1.p2")
@RefreshScope
@Data
@Component
public class RefreshParam {
    private String param;
}

````



````java
package com.example.spring.consul;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @Description TODO
 * @Author chengxunfei
 * @Date 2022/12/22 16:46
 * @Version 1.0
 */
@RestController
@RequestMapping("consul")
public class Controller {
    @Autowired
    RefreshParam refreshParam;

    @Value("${p1.p2.param}")
    private String myName;

    @RequestMapping("/param")
    public Object getParam() {
        return "@ConfigurationProperties " + refreshParam.getParam() +" @Value " + myName;
    }
}
````

@ConfigurationProperties形式引入的值，consul配置修改后，可以实时生效。

@Value形式引入的值，需要重启服务才能生效。