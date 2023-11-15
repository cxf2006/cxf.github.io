import{_ as e,o as n,c as i,b as s}from"./app-26820943.js";const d={},a=s(`<h1 id="一-centos-stream-9-安装docker" tabindex="-1"><a class="header-anchor" href="#一-centos-stream-9-安装docker" aria-hidden="true">#</a> 一 centos stream 9 安装docker</h1><h2 id="_1-安装yum-utils" tabindex="-1"><a class="header-anchor" href="#_1-安装yum-utils" aria-hidden="true">#</a> 1 安装yum-utils</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> yum-utils
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-添加docker仓库" tabindex="-1"><a class="header-anchor" href="#_2-添加docker仓库" aria-hidden="true">#</a> 2 添加docker仓库</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​ 新增文件：/etc/yum.repos.d/docker-ce.repo</p><h2 id="_3-查看仓库中docker版本" tabindex="-1"><a class="header-anchor" href="#_3-查看仓库中docker版本" aria-hidden="true">#</a> 3 查看仓库中docker版本</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum list docker-ce <span class="token parameter variable">--showduplicates</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-tex line-numbers-mode" data-ext="tex"><pre class="language-tex"><code><span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span># yum list docker-ce --showduplicates
Docker CE Stable - x86_64                                                                                               12 kB/s |  30 kB     00:02
Available Packages
docker-ce.x86_64            3:20.10.15-3.el9          docker-ce-stable
docker-ce.x86_64            3:20.10.16-3.el9          docker-ce-stable
docker-ce.x86_64            3:20.10.17-3.el9          docker-ce-stable
docker-ce.x86_64            3:20.10.18-3.el9          docker-ce-stable
docker-ce.x86_64            3:20.10.19-3.el9          docker-ce-stable
docker-ce.x86_64            3:20.10.20-3.el9          docker-ce-stable               
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum list docker-ce-cli --showduplicates
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-tex line-numbers-mode" data-ext="tex"><pre class="language-tex"><code><span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span># yum list docker-ce-cli --showduplicates
Last metadata expiration check: 0:07:58 ago on Sun 06 Aug 2023 03:59:26 PM CST.
Available Packages
docker-ce-cli.x86_64       1:20.10.15-3.el9           docker-ce-stable
docker-ce-cli.x86_64       1:20.10.16-3.el9           docker-ce-stable
docker-ce-cli.x86_64       1:20.10.17-3.el9           docker-ce-stable
docker-ce-cli.x86_64       1:20.10.18-3.el9           docker-ce-stable
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-安装" tabindex="-1"><a class="header-anchor" href="#_4-安装" aria-hidden="true">#</a> 4 安装</h2><h3 id="安装最新版" tabindex="-1"><a class="header-anchor" href="#安装最新版" aria-hidden="true">#</a> 安装最新版</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> docker-ce docker-ce-cli containerd.io docker-compose-plugin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@192 ~]# sudo yum install docker-ce docker-ce-cli containerd.io docker-compose-plugin
Last metadata expiration check: 0:09:47 ago on Sun 06 Aug 2023 03:59:26 PM CST.
Dependencies resolved.
=======================================================================================================================================================
 Package                                      Architecture              Version                              Repository                           Size
=======================================================================================================================================================
Installing:
 containerd.io                                x86_64                    1.6.22-3.1.el9                       docker-ce-stable                     33 M
 docker-ce                                    x86_64                    3:24.0.5-1.el9                       docker-ce-stable                     24 M
 docker-ce-cli                                x86_64                    1:24.0.5-1.el9                       docker-ce-stable                    7.1 M
 docker-compose-plugin                        x86_64                    2.20.2-1.el9                         docker-ce-stable                     13 M
Installing dependencies:
 docker-ce-rootless-extras                    x86_64                    24.0.5-1.el9                         docker-ce-stable                    3.9 M
Installing weak dependencies:
 docker-buildx-plugin                         x86_64                    0.11.2-1.el9                         docker-ce-stable                     13 M

Transaction Summary
=======================================================================================================================================================
Install  6 Packages

Total download size: 93 M
Installed size: 372 M
Is this ok [y/N]: y
Downloading Packages:
(1/6): docker-buildx-plugin-0.11.2-1.el9.x86_64.rpm                                                                    2.0 MB/s |  13 MB     00:06
(2/6): docker-ce-cli-24.0.5-1.el9.x86_64.rpm                                                                           1.0 MB/s | 7.1 MB     00:07
(3/6): containerd.io-1.6.22-3.1.el9.x86_64.rpm                                                                         2.2 MB/s |  33 MB     00:14
(4/6): docker-ce-rootless-extras-24.0.5-1.el9.x86_64.rpm                                                               2.1 MB/s | 3.9 MB     00:01
(5/6): docker-compose-plugin-2.20.2-1.el9.x86_64.rpm                                                                   2.4 MB/s |  13 MB     00:05
(6/6): docker-ce-24.0.5-1.el9.x86_64.rpm                                                                               1.1 MB/s |  24 MB     00:20
-------------------------------------------------------------------------------------------------------------------------------------------------------
Total                                                                                                                  4.4 MB/s |  93 MB     00:20
Docker CE Stable - x86_64                                                                                              2.8 kB/s | 1.6 kB     00:00
Importing GPG key 0x621E9F35:
 Userid     : &quot;Docker Release (CE rpm) &lt;docker@docker.com&gt;&quot;
 Fingerprint: 060A 61C5 1B55 8A7F 742B 77AA C52F EB6B 621E 9F35
 From       : https://download.docker.com/linux/centos/gpg
Is this ok [y/N]: y
Key imported successfully
Running transaction check
Transaction check succeeded.
Running transaction test
Transaction test succeeded.
Running transaction
  Preparing        :                                                                                                                               1/1
  Installing       : docker-compose-plugin-2.20.2-1.el9.x86_64                                                                                     1/6
  Running scriptlet: docker-compose-plugin-2.20.2-1.el9.x86_64                                                                                     1/6
  Installing       : docker-buildx-plugin-0.11.2-1.el9.x86_64                                                                                      2/6
  Running scriptlet: docker-buildx-plugin-0.11.2-1.el9.x86_64                                                                                      2/6
  Installing       : docker-ce-cli-1:24.0.5-1.el9.x86_64                                                                                           3/6
  Running scriptlet: docker-ce-cli-1:24.0.5-1.el9.x86_64                                                                                           3/6
  Installing       : containerd.io-1.6.22-3.1.el9.x86_64                                                                                           4/6
  Running scriptlet: containerd.io-1.6.22-3.1.el9.x86_64                                                                                           4/6
  Installing       : docker-ce-rootless-extras-24.0.5-1.el9.x86_64                                                                                 5/6
  Running scriptlet: docker-ce-rootless-extras-24.0.5-1.el9.x86_64                                                                                 5/6
  Installing       : docker-ce-3:24.0.5-1.el9.x86_64                                                                                               6/6
  Running scriptlet: docker-ce-3:24.0.5-1.el9.x86_64                                                                                               6/6
  Verifying        : containerd.io-1.6.22-3.1.el9.x86_64                                                                                           1/6
  Verifying        : docker-buildx-plugin-0.11.2-1.el9.x86_64                                                                                      2/6
  Verifying        : docker-ce-3:24.0.5-1.el9.x86_64                                                                                               3/6
  Verifying        : docker-ce-cli-1:24.0.5-1.el9.x86_64                                                                                           4/6
  Verifying        : docker-ce-rootless-extras-24.0.5-1.el9.x86_64                                                                                 5/6
  Verifying        : docker-compose-plugin-2.20.2-1.el9.x86_64                                                                                     6/6

Installed:
  containerd.io-1.6.22-3.1.el9.x86_64         docker-buildx-plugin-0.11.2-1.el9.x86_64              docker-ce-3:24.0.5-1.el9.x86_64
  docker-ce-cli-1:24.0.5-1.el9.x86_64         docker-ce-rootless-extras-24.0.5-1.el9.x86_64         docker-compose-plugin-2.20.2-1.el9.x86_64

Complete!

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="指定版本安装" tabindex="-1"><a class="header-anchor" href="#指定版本安装" aria-hidden="true">#</a> 指定版本安装</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> docker-ce-20.10.15 docker-ce-cli-20.10.15 containerd.io docker-compose-plugin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_4-启动" tabindex="-1"><a class="header-anchor" href="#_4-启动" aria-hidden="true">#</a> 4 启动</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl start <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_5-hello-world-测试" tabindex="-1"><a class="header-anchor" href="#_5-hello-world-测试" aria-hidden="true">#</a> 5 hello world 测试</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run hello-world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@192 ~]# sudo docker run hello-world
Unable to find image &#39;hello-world:latest&#39; locally
latest: Pulling from library/hello-world
719385e32844: Pull complete
Digest: sha256:926fac19d22aa2d60f1a276b66a20eb765fbeea2db5dbdaafeb456ad8ce81598
Status: Downloaded newer image for hello-world:latest

Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the &quot;hello-world&quot; image from the Docker Hub.
    (amd64)
 3. The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
 4. The Docker daemon streamed that output to the Docker client, which sent it
    to your terminal.

To try something more ambitious, you can run an Ubuntu container with:
 $ docker run -it ubuntu bash

Share images, automate workflows, and more with a free Docker ID:
 https://hub.docker.com/

For more examples and ideas, visit:
 https://docs.docker.com/get-started/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6关于停止docker服务" tabindex="-1"><a class="header-anchor" href="#_6关于停止docker服务" aria-hidden="true">#</a> 6关于停止docker服务</h2><h3 id="停止docker" tabindex="-1"><a class="header-anchor" href="#停止docker" aria-hidden="true">#</a> 停止docker</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@192 ~]# systemctl stop docker
Warning: Stopping docker.service, but it can still be activated by:
  docker.socket

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看docker状态" tabindex="-1"><a class="header-anchor" href="#查看docker状态" aria-hidden="true">#</a> 查看docker状态</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@192 ~]# systemctl status docker
○ docker.service - Docker Application Container Engine
     Loaded: loaded (/usr/lib/systemd/system/docker.service; disabled; preset: disabled)
     Active: inactive (dead) since Sun 2023-08-06 16:20:29 CST; 1min 3s ago
   Duration: 7min 36.913s
TriggeredBy: ● docker.socket
       Docs: https://docs.docker.com
    Process: 78946 ExecStart=/usr/bin/dockerd -H fd:// --containerd=/run/containerd/containerd.sock (code=exited, status=0/SUCCESS)
   Main PID: 78946 (code=exited, status=0/SUCCESS)
        CPU: 1.027s

Aug 06 16:12:52 192.168.2.253 dockerd[78946]: time=&quot;2023-08-06T16:12:52.464128241+08:00&quot; level=info msg=&quot;Daemon has completed initialization&quot;
Aug 06 16:12:52 192.168.2.253 dockerd[78946]: time=&quot;2023-08-06T16:12:52.560933986+08:00&quot; level=info msg=&quot;API listen on /run/docker.sock&quot;
Aug 06 16:12:52 192.168.2.253 systemd[1]: Started Docker Application Container Engine.
Aug 06 16:18:28 192.168.2.253 dockerd[78946]: time=&quot;2023-08-06T16:18:28.306480878+08:00&quot; level=info msg=&quot;ignoring event&quot; container=3f9bb84efd884cdc8d9&gt;
Aug 06 16:20:29 192.168.2.253 systemd[1]: Stopping Docker Application Container Engine...
Aug 06 16:20:29 192.168.2.253 dockerd[78946]: time=&quot;2023-08-06T16:20:29.475440358+08:00&quot; level=info msg=&quot;Processing signal &#39;terminated&#39;&quot;
Aug 06 16:20:29 192.168.2.253 dockerd[78946]: time=&quot;2023-08-06T16:20:29.476810867+08:00&quot; level=info msg=&quot;Daemon shutdown complete&quot;
Aug 06 16:20:29 192.168.2.253 systemd[1]: docker.service: Deactivated successfully.
Aug 06 16:20:29 192.168.2.253 systemd[1]: Stopped Docker Application Container Engine.
Aug 06 16:20:29 192.168.2.253 systemd[1]: docker.service: Consumed 1.027s CPU time.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="激活docker" tabindex="-1"><a class="header-anchor" href="#激活docker" aria-hidden="true">#</a> 激活docker</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> images
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="活动状态" tabindex="-1"><a class="header-anchor" href="#活动状态" aria-hidden="true">#</a> 活动状态</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@192 ~]# systemctl status  docker
● docker.service - Docker Application Container Engine
     Loaded: loaded (/usr/lib/systemd/system/docker.service; disabled; preset: disabled)
     Active: active (running) since Sun 2023-08-06 16:24:48 CST; 7min ago
TriggeredBy: ● docker.socket
       Docs: https://docs.docker.com
   Main PID: 79203 (dockerd)
      Tasks: 9
     Memory: 35.4M
        CPU: 644ms
     CGroup: /system.slice/docker.service
             └─79203 /usr/bin/dockerd -H fd:// --containerd=/run/containerd/containerd.sock
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="完全停止docker" tabindex="-1"><a class="header-anchor" href="#完全停止docker" aria-hidden="true">#</a> 完全停止docker</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo systemctl stop docker.service docker.socket
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_7-卸载" tabindex="-1"><a class="header-anchor" href="#_7-卸载" aria-hidden="true">#</a> 7 卸载</h2><h3 id="卸载软件包" tabindex="-1"><a class="header-anchor" href="#卸载软件包" aria-hidden="true">#</a> 卸载软件包</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum remove docker-ce docker-ce-cli containerd.io docker-compose-plugin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="删除相关文件" tabindex="-1"><a class="header-anchor" href="#删除相关文件" aria-hidden="true">#</a> 删除相关文件</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/lib/docker
<span class="token function">sudo</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/lib/containerd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,38),l=[a];function c(r,o){return n(),i("div",null,l)}const u=e(d,[["render",c],["__file","docker安装.html.vue"]]);export{u as default};
