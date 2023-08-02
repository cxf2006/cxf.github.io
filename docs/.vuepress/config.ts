import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '你好， VuePress ！',
  description: '这是我的第一个 VuePress 站点',
  theme: defaultTheme({
    colorModeSwitch:true,
    home:"/",
    logo:"/images/logo.png",
    navbar:[
      {
        text: 'linux',
        children: [
          {
            text: '镜像源地址',
            link:"/linux/镜像源地址.md",
          },
          {
            text: 'tcpdump',
            link:"/linux/tcpdump.md",
          },
          {
            text: 'docker',
            children: [
              {text:"docker使用",link:"/linux/docker/docker使用.md"},
              {text:"基础命令",link:"/linux/docker/基础命令.md"},
              {text:"相关连接",link:"/linux/docker/相关连接.md"},
            ],
          },
          {
            text: 'sqlite3',
            children: [
              {text:"sqlite3linux客户端",link:"/linux/sqlite3/sqlite3linux客户端.md"},
            ],
          },
          {
            text: 'centos',
            children: [
              {text:"centos-stream-9",link:"/linux/centos/centos-stream-9.md"},
            ],
          },
          {
            text: 'ubuntu',
            children: [
              {text:"基础镜像安装常用软件",link:"/linux/ubuntu/基础镜像安装常用软件.md"},
            ],
          },
        ],
      },
      {
        text:"编程语言",
        children:[
          {
            text:"C",
            children: [
              {text:"语法",link:"/programming/C/语法.md"},
              {text:"编译指令",link:"/programming/C/编译指令.md"},
              {text:"cJSON使用",link:"/programming/C/cJSON使用.md"},
              {text:"内存申请和释放",link:"/programming/C/内存申请和释放.md"},
              {text:"数据结构",link:"/programming/C/数据结构.md"},
              {text:"线程",link:"/programming/C/线程.md"},
            ]
          },
          {
            text:"go",
            children: [
              {text:"下载go",link:"/programming/go/下载go.md"},
            ]
          },
          {
            text:"java",
            children: [
              {text:"spring",link:"/programming/java/spring"},
            ]
          },
          {
            text:"微信小程序",
            children: [
              {text:"udp通讯",link:"/programming/weixin/udp通讯.md"},
            ]
          },
        ]
      },
      {
        text:"protocol",
        children:[
          {
            text:"zigbee",
            children: [
              {text:"概念",link:"/protocol/zigbee/概念.md"},
              {text:"zigbee协议栈整体架构",link:"/protocol/zigbee/zigbee协议栈整体架构.md"},
              {text:"zigbee协议属性",link:"/protocol/zigbee/zigbee协议属性.pdf"},
              {text:"ZigBee 协议栈 2017 版",link:"/protocol/zigbee/ZigBee 协议栈 2017 版.pdf"},
            ]
          }
        ]
      },
      {
        text:"components",
        children:[
          {
            text:"C4",
            children: [
              {text:"C4模式架构设计总结",link:"/components/C4/C4模式架构设计总结.md"},
              {text:"Structurizr",link:"/components/C4/Structurizr/"},
            ]
          },
          {
            text:"influxdb",
            children: [
              {text:"docker安装命令",link:"/components/influxdb/docker安装命令.md"},
              {text:"安装",link:"/components/influxdb/安装.md"},
              {text:"备忘",link:"/components/influxdb/备忘.md"},
              {text:"配置文件参数",link:"/components/influxdb/配置文件参数.md"},
            ]
          },
          {
            text:"openldap",
            children: [
              {text:"ldap使用",link:"/components/openldap/ldap使用.md"},
              {text:"openldap安装",link:"/components/openldap/openldap安装.md"},
            ]
          },
          {
            text:"rabbitmq",
            children: [
              {text:"安装",link:"/components/rabbitmq/安装.md"},
            ]
          },
          {
            text:"consul",
            children: [
              {text:"consul",link:"/components/consul/consul.md"},
            ]
          },
          {
            text:"gogs",
            children: [
              {text:"gogs",link:"/components/gogs/gogs.md"},
            ]
          },
        ]
      }
    ],
    sidebar: {
      '/components/C4/Structurizr/': [
        {
          text: 'Structurizr DSL',
          children: [
            {text:"Structurizr DSL",link:"/components/C4/Structurizr/Structurizr DSL.md"},
            {text:"Structurizr On-premises",link:"/components/C4/Structurizr/Structurizr On-premises.md"},
            {text:"Structurizr Lite",link:"/components/C4/Structurizr/Structurizr Lite.md"},
            {text:"Structurizr Cloud Service",link:"/components/C4/Structurizr/Structurizr Cloud Service.md"},
            {text:"Structurizr CLI",link:"/components/C4/Structurizr/Structurizr CLI.md"},
          ],
        },
      ],
    },
  }),
})
