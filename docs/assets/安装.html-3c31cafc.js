import{_ as e,o as i,c as n,b as s}from"./app-26820943.js";const t="/notes/assets/image-20230209114612567-e19af6ee.png",a="/notes/assets/image-20230209114714290-96e8a0e4.png",r="/notes/assets/image-20230209114305556-029e7862.png",d="/notes/assets/image-20230209115740451-d8958535.png",l="/notes/assets/image-20230209121022712-6073b154.png",b="/notes/assets/image-20230209164253341-1e3cfaa5.png",m="/notes/assets/image-20230209120644122-141c7da7.png",v={},c=s('<h1 id="windows安装" tabindex="-1"><a class="header-anchor" href="#windows安装" aria-hidden="true">#</a> windows安装</h1><h2 id="先安装erlang" tabindex="-1"><a class="header-anchor" href="#先安装erlang" aria-hidden="true">#</a> 先安装erlang</h2><p>下载：https://www.erlang.org/downloads</p><p><img src="'+t+'" alt="image-20230209114612567"></p><p>https://github.com/erlang/otp/releases/download/OTP-25.2.2/otp_win64_25.2.2.exe</p><p>安装，按照界面提示安装完成后，配置环境变量ERLANG_HOME=[D:\\PF\\Erlang OTP]</p><p>​ <img src="'+a+'" alt="image-20230209114714290"></p><h2 id="rebbitmq-server安装" tabindex="-1"><a class="header-anchor" href="#rebbitmq-server安装" aria-hidden="true">#</a> rebbitmq-server安装</h2><p>下载安装包：</p><p>https://www.rabbitmq.com/install-windows.html</p><p><img src="'+r+'" alt="image-20230209114305556"></p><p>https://github.com/rabbitmq/rabbitmq-server/releases/download/v3.11.8/rabbitmq-server-3.11.8.exe</p><p>安装，按照界面提示安装完毕即可。</p><p>启停服务：在开始菜单找到以下菜单进行启停服务。</p><p><img src="'+d+`" alt="image-20230209115740451"></p><p>启用mqtt插件: 进入mqtt-server的安装目录sbin，通过菜单[RabbitMQ Command Prompt (sbin dir)]可以快速进入目录</p><p>管理界面访问 http://127.0.0.1:15672/ guest/guest</p><h2 id="添加用户" tabindex="-1"><a class="header-anchor" href="#添加用户" aria-hidden="true">#</a> 添加用户</h2><p>rabbitmqctl add_user mqtt_user1 123456</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>D:\\PF\\RabbitMQ Server\\rabbitmq_server-3.11.8\\sbin&gt;rabbitmqctl    add_user mqtt_user1 123456
Adding user &quot;mqtt_user1&quot; ...
Done. Don&#39;t forget to grant the user permissions to some virtual hosts! See &#39;rabbitmqctl help set_permissions&#39; to learn more.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>rabbitmqctl set_user_tags mqtt_user1 management</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>D:\\PF\\RabbitMQ Server\\rabbitmq_server-3.11.8\\sbin&gt;rabbitmqctl set_user_tags mqtt_user1 management
Setting tags for user &quot;mqtt_user1&quot; to [management] ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="添加vhost" tabindex="-1"><a class="header-anchor" href="#添加vhost" aria-hidden="true">#</a> 添加vhost</h2><p>rabbitmqctl add_vhost vhost_mqtt</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>D:\\PF\\RabbitMQ Server\\rabbitmq_server-3.11.8\\sbin&gt;rabbitmqctl add_vhost vhost_mqtt
Adding vhost &quot;vhost_mqtt&quot; ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="用户授权" tabindex="-1"><a class="header-anchor" href="#用户授权" aria-hidden="true">#</a> 用户授权</h2><p>rabbitmqctl set_permissions -p vhost_mqtt mqtt_user1 &quot;.<em>&quot; &quot;.</em>&quot; &quot;.*&quot;</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>D:\\PF\\RabbitMQ Server\\rabbitmq_server-3.11.8\\sbin&gt;rabbitmqctl set_permissions -p vhost_mqtt  mqtt_user1 &quot;.*&quot; &quot;.*&quot; &quot;.*&quot;
Setting permissions for user &quot;mqtt_user1&quot; in vhost &quot;vhost_mqtt&quot; ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>D:\\PF\\RabbitMQ Server\\rabbitmq_server-3.11.8\\sbin&gt;rabbitmqctl set_permissions -p  /  mqtt_user1 &quot;.*&quot; &quot;.*&quot; &quot;.*&quot;
Setting permissions for user &quot;mqtt_user1&quot; in vhost &quot;/&quot; ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="rabbitmq服务tls配置" tabindex="-1"><a class="header-anchor" href="#rabbitmq服务tls配置" aria-hidden="true">#</a> rabbitmq服务tls配置</h2><p>参考连接：https://www.rabbitmq.com/ssl.html#erlang-otp-requirements</p><h3 id="启用插件rabbitmq-auth-mechanism-ssl" tabindex="-1"><a class="header-anchor" href="#启用插件rabbitmq-auth-mechanism-ssl" aria-hidden="true">#</a> 启用插件rabbitmq_auth_mechanism_ssl</h3><p>查看插件启停状态</p><p>rabbitmq-plugins list</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>D:\\PF\\RabbitMQ Server\\rabbitmq_server-3.11.8\\sbin&gt;rabbitmq-plugins list
Listing plugins with pattern &quot;.*&quot; ...
 Configured: E = explicitly enabled; e = implicitly enabled
 | Status: * = running on rabbit@DESKTOP-S7PS97R
 |/
[  ] rabbitmq_amqp1_0                  3.11.8
[  ] rabbitmq_auth_backend_cache       3.11.8
[  ] rabbitmq_auth_backend_http        3.11.8
[  ] rabbitmq_auth_backend_ldap        3.11.8
[  ] rabbitmq_auth_backend_oauth2      3.11.8
[  ] rabbitmq_auth_mechanism_ssl       3.11.8
[  ] rabbitmq_consistent_hash_exchange 3.11.8
[  ] rabbitmq_event_exchange           3.11.8
[  ] rabbitmq_federation               3.11.8
[  ] rabbitmq_federation_management    3.11.8
[  ] rabbitmq_jms_topic_exchange       3.11.8
[E*] rabbitmq_management               3.11.8
[e*] rabbitmq_management_agent         3.11.8
[E*] rabbitmq_mqtt                     3.11.8
[  ] rabbitmq_peer_discovery_aws       3.11.8
[  ] rabbitmq_peer_discovery_common    3.11.8
[  ] rabbitmq_peer_discovery_consul    3.11.8
[  ] rabbitmq_peer_discovery_etcd      3.11.8
[  ] rabbitmq_peer_discovery_k8s       3.11.8
[  ] rabbitmq_prometheus               3.11.8
[  ] rabbitmq_random_exchange          3.11.8
[  ] rabbitmq_recent_history_exchange  3.11.8
[  ] rabbitmq_sharding                 3.11.8
[  ] rabbitmq_shovel                   3.11.8
[  ] rabbitmq_shovel_management        3.11.8
[  ] rabbitmq_stomp                    3.11.8
[  ] rabbitmq_stream                   3.11.8
[  ] rabbitmq_stream_management        3.11.8
[  ] rabbitmq_top                      3.11.8
[  ] rabbitmq_tracing                  3.11.8
[  ] rabbitmq_trust_store              3.11.8
[e*] rabbitmq_web_dispatch             3.11.8
[E*] rabbitmq_web_mqtt                 3.11.8
[  ] rabbitmq_web_mqtt_examples        3.11.8
[  ] rabbitmq_web_stomp                3.11.8
[  ] rabbitmq_web_stomp_examples       3.11.8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启用rabbitmq_auth_mechanism_ssl插件</p><p>rabbitmq-plugins enable rabbitmq_auth_mechanism_ssl</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>D:\\PF\\RabbitMQ Server\\rabbitmq_server-3.11.8\\sbin&gt;rabbitmq-plugins enable rabbitmq_auth_mechanism_ssl
Enabling plugins on node rabbit@DESKTOP-S7PS97R:
rabbitmq_auth_mechanism_ssl
The following plugins have been configured:
  rabbitmq_auth_mechanism_ssl
  rabbitmq_management
  rabbitmq_management_agent
  rabbitmq_mqtt
  rabbitmq_web_dispatch
  rabbitmq_web_mqtt
Applying plugin configuration to rabbit@DESKTOP-S7PS97R...
The following plugins have been enabled:
  rabbitmq_auth_mechanism_ssl

started 1 plugins.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="tls-gen工具生成ssl证书" tabindex="-1"><a class="header-anchor" href="#tls-gen工具生成ssl证书" aria-hidden="true">#</a> tls-gen工具生成ssl证书</h3><p>​ git clone https://github.com/michaelklishin/tls-gen tls-gen</p><p>​ cd tls-gen/basic</p><pre><code>private key password 
</code></pre><p>​ make PASSWORD=密码</p><p>​ make verify</p><p>​ make info</p><p>​ ls ./result</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@192 basic]# ll ./result/
total 32
-rw-r--r-- 1 root root 1281 Feb  9 17:39 ca_certificate.pem
-rw------- 1 root root 1854 Feb  9 17:39 ca_key.pem
-rw-r--r-- 1 root root 1285 Feb  9 17:39 client_192.168.1.102_certificate.pem
-rw------- 1 root root 1874 Feb  9 17:39 client_192.168.1.102_key.pem
-rw------- 1 root root 3461 Feb  9 17:39 client_192.168.1.102.p12
-rw-r--r-- 1 root root 1371 Feb  9 17:39 server_192.168.1.102_certificate.pem
-rw------- 1 root root 1874 Feb  9 17:39 server_192.168.1.102_key.pem
-rw------- 1 root root 3525 Feb  9 17:39 server_192.168.1.102.p12
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>client_192.168.1.102_key.pem 为带密码的pkcs8格式密钥，提取出不带密码的pkcs1格式密钥：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>C:\\Users\\vghnjghvn\\AppData\\Roaming\\RabbitMQ\\tls-certs&gt;openssl rsa -in client_Access_key.pem -out client_Access_key.pem.pkcs1.pem
Enter pass phrase for client_192.168.1.102_key.pem:
writing RSA key
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="openssl-生成自签证书" tabindex="-1"><a class="header-anchor" href="#openssl-生成自签证书" aria-hidden="true">#</a> openssl 生成自签证书</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>openssl req -x509 -sha256 -days 3560 -nodes -newkey rsa:2048 -subj  &quot;/CN=Access service/C=CN/L=ZheJiang&quot; -keyout AccessService.key -out AccessService.crt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>openssl req -x509 -sha256 -days 3560 -nodes -newkey rsa:2048 -subj  &quot;/CN=Access client/C=CN/L=ZheJiang&quot; -keyout AccessClient.key -out AccessClient.crt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>一级自签证书直接配置在rabbitmq上，验证失败。</p><h3 id="rabbitmq-conf增加tls配置" tabindex="-1"><a class="header-anchor" href="#rabbitmq-conf增加tls配置" aria-hidden="true">#</a> rabbitmq.conf增加tls配置</h3><p>C:\\Users\\vghnjghvn\\AppData\\Roaming\\RabbitMQ\\rabbitmq.conf</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>listeners.ssl.default = 5671
ssl_options.cacertfile = C:/Users/vghnjghvn/Desktop/result/ca_certificate.pem
ssl_options.certfile = C:/Users/vghnjghvn/Desktop/result/server_192.168.1.102_certificate.pem
ssl_options.keyfile = C:/Users/vghnjghvn/Desktop/result/server_192.168.1.102_key.pem
ssl_options.verify = verify_peer
ssl_options.fail_if_no_peer_cert = true
ssl_options.password = 123456
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="启用mqtt插件" tabindex="-1"><a class="header-anchor" href="#启用mqtt插件" aria-hidden="true">#</a> 启用mqtt插件</h2><p>​ 输入命令 rabbitmq-plugins enable rabbitmq_mqtt</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>D:\\PF\\RabbitMQ Server\\rabbitmq_server-3.11.8\\sbin&gt;rabbitmq-plugins enable rabbitmq_mqtt
Enabling plugins on node rabbit@DESKTOP-S7PS97R:
rabbitmq_mqtt
The following plugins have been configured:
  rabbitmq_management
  rabbitmq_management_agent
  rabbitmq_mqtt
  rabbitmq_web_dispatch
Applying plugin configuration to rabbit@DESKTOP-S7PS97R...
Plugin configuration unchanged.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 重启rabbitmq服务，管理端界面可以直接看到mqtt协议服务已起。</p><p><img src="`+l+`" alt="image-20230209121022712"></p><h2 id="启用web-mqtt插件" tabindex="-1"><a class="header-anchor" href="#启用web-mqtt插件" aria-hidden="true">#</a> 启用web_mqtt插件</h2><p>该插件支持websocket使用mqtt协议进行访问。</p><p><strong>rabbitmq-plugins</strong> <strong>enable rabbitmq_web_mqtt</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>D:\\PF\\RabbitMQ Server\\rabbitmq_server-3.11.8\\sbin&gt;rabbitmq-plugins enable rabbitmq_web_mqtt
Enabling plugins on node rabbit@DESKTOP-S7PS97R:
rabbitmq_web_mqtt
The following plugins have been configured:
  rabbitmq_management
  rabbitmq_management_agent
  rabbitmq_mqtt
  rabbitmq_web_dispatch
  rabbitmq_web_mqtt
Applying plugin configuration to rabbit@DESKTOP-S7PS97R...
The following plugins have been enabled:
  rabbitmq_web_mqtt

started 1 plugins.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mqtt客户端连接" tabindex="-1"><a class="header-anchor" href="#mqtt客户端连接" aria-hidden="true">#</a> mqtt客户端连接</h2><p><img src="`+b+`" alt="image-20230209164253341"></p><p>用户名： 如果需要成功连接需要给用户分配连接的vhost的权限。vhost默认连接“/”，还不知道如何修改。</p><p>​ 指定连接vhost时签名加上vhost名称，用冒号分割。例：<strong>vhost_mqtt:mqtt_user1</strong></p><h2 id="mqtt服务tls配置" tabindex="-1"><a class="header-anchor" href="#mqtt服务tls配置" aria-hidden="true">#</a> mqtt服务tls配置</h2><p>​</p><h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h2><h3 id="rabbitmqctl命令执行失败" tabindex="-1"><a class="header-anchor" href="#rabbitmqctl命令执行失败" aria-hidden="true">#</a> rabbitmqctl命令执行失败</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>D:\\PF\\RabbitMQ Server\\rabbitmq_server-3.11.8\\sbin&gt;rabbitmqctl    add_user mqtt_user1 123456
Error: unable to perform an operation on node &#39;rabbit@DESKTOP-S7PS97R&#39;. Please see diagnostics information and suggestions below.

Most common reasons for this are:

 * Target node is unreachable (e.g. due to hostname resolution, TCP connection or firewall issues)
 * CLI tool fails to authenticate with the server (e.g. due to CLI tool&#39;s Erlang cookie not matching that of the server)
 * Target node is not running

In addition to the diagnostics info below:

 * See the CLI, clustering and networking guides on https://rabbitmq.com/documentation.html to learn more
 * Consult server logs on node rabbit@DESKTOP-S7PS97R
 * If target node is configured to use long node names, don&#39;t forget to use --longnames with CLI tools
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解决方法：</p><p>​ 将C:\\Users\\vghnjghvn\\.erlang.cookie文件覆盖C:\\Windows\\System32\\config\\systemprofile\\.erlang.cookie文件。vghnjghvn为当前的系统用户名。重启rabbitmq服务。</p><p>​ 如果发现C:\\Windows\\System32\\config\\systemprofile目录无法进入，重启windows的资源管理器。</p><h3 id="mqtt插件安装后-重启服务失败" tabindex="-1"><a class="header-anchor" href="#mqtt插件安装后-重启服务失败" aria-hidden="true">#</a> mqtt插件安装后，重启服务失败</h3><p>重启rabbitmq-server服务，重启过程中报错,应该是端口占用。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Error during startup: {error,
                       {rabbitmq_mqtt,
                        {{shutdown,
                          {failed_to_start_child,
                           &#39;rabbit_mqtt_listener_sup_:::1883&#39;,
                           {shutdown,
                            {failed_to_start_child,
                             {ranch_embedded_sup,
                              {acceptor,{0,0,0,0,0,0,0,0},1883}},
                             {shutdown,
                              {failed_to_start_child,
                               {ranch_listener_sup,
                                {acceptor,{0,0,0,0,0,0,0,0},1883}},
                               {shutdown,
                                {failed_to_start_child,ranch_acceptors_sup,
                                 {listen_error,
                                  {acceptor,{0,0,0,0,0,0,0,0},1883},
                                  eacces}}}}}}}}},
                         {rabbit_mqtt,start,[normal,[]]}}}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>windows查看端口占用程序。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>D:\\PF\\RabbitMQ Server\\rabbitmq_server-3.11.8\\sbin&gt;netstat -ano|findstr 1883
  TCP    0.0.0.0:1883           0.0.0.0:0              LISTENING       4740
  TCP    [::]:1883              [::]:0                 LISTENING       4740
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>任务管理器查看 4740 程序</p><p><img src="`+m+`" alt="image-20230209120644122"></p><p>关掉该服务即可。</p><p>成功重启rabbitmq。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>D:\\PF\\RabbitMQ Server\\rabbitmq_server-3.11.8\\sbin&gt;rabbitmq-server
2023-02-09 12:08:16.354000+08:00 [warning] &lt;0.130.0&gt; Using RABBITMQ_ADVANCED_CONFIG_FILE: c:/Users/vghnjghvn/AppData/Roaming/RabbitMQ/advanced.config
2023-02-09 12:08:18.676000+08:00 [notice] &lt;0.44.0&gt; Application syslog exited with reason: stopped
2023-02-09 12:08:18.676000+08:00 [notice] &lt;0.229.0&gt; Logging: switching to configured handler(s); following messages may not be visible in this log output

  ##  ##      RabbitMQ 3.11.8
  ##  ##
  ##########  Copyright (c) 2007-2023 VMware, Inc. or its affiliates.
  ######  ##
  ##########  Licensed under the MPL 2.0. Website: https://rabbitmq.com

  Erlang:      25.0 [jit]
  TLS Library: OpenSSL - OpenSSL 1.1.1d  10 Sep 2019
  Release series support status: supported

  Doc guides:  https://rabbitmq.com/documentation.html
  Support:     https://rabbitmq.com/contact.html
  Tutorials:   https://rabbitmq.com/getstarted.html
  Monitoring:  https://rabbitmq.com/monitoring.html

  Logs: &lt;stdout&gt;
        c:/Users/vghnjghvn/AppData/Roaming/RabbitMQ/log/rabbit@DESKTOP-S7PS97R.log
        c:/Users/vghnjghvn/AppData/Roaming/RabbitMQ/log/rabbit@DESKTOP-S7PS97R_upgrade.log

  Config file(s): c:/Users/vghnjghvn/AppData/Roaming/RabbitMQ/advanced.config

  Starting broker... completed with 4 plugins.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,87),o=[c];function u(p,g){return i(),n("div",null,o)}const _=e(v,[["render",u],["__file","安装.html.vue"]]);export{_ as default};
