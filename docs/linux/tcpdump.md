查看指定端口的出入消息

````bash
tcpdump -n -X -i any port 12345
````

-i any为所有网卡

特定ip包

````bash
tcpdump -n -X -i any dst host xx.xx.x.x
````

````bash
tcpdump -n -X -i any src host xx.xx.x.x
````

ip和端口

````bash
tcpdump -n -X -i any dst host xx.xx.x.x and port 12345
````

