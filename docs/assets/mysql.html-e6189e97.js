import{_ as s,o as e,c as a,b as n}from"./app-42f4feee.js";const i={},l=n(`<h1 id="_1-镜像使用说明链接" tabindex="-1"><a class="header-anchor" href="#_1-镜像使用说明链接" aria-hidden="true">#</a> 1 镜像使用说明链接</h1><p>mysql镜像：https://hub.docker.com/_/mysql</p><p>上面有镜像的使用方法以及版本tag。</p><h1 id="_2-拉取最新版本镜像" tabindex="-1"><a class="header-anchor" href="#_2-拉取最新版本镜像" aria-hidden="true">#</a> 2 拉取最新版本镜像</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull mysql:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="_3-生成实例" tabindex="-1"><a class="header-anchor" href="#_3-生成实例" aria-hidden="true">#</a> 3 生成实例</h1><p>运行实例：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token punctuation">\\</span>
<span class="token parameter variable">--name</span> orderform-mysql <span class="token punctuation">\\</span>
<span class="token parameter variable">--user</span> <span class="token number">1000</span>:1000 <span class="token punctuation">\\</span>
<span class="token parameter variable">-P</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /docker/conf/etc/mysql:/etc/mysql/conf.d <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /my/own/datadir:/var/lib/mysql <span class="token punctuation">\\</span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span><span class="token number">123456</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
mysql:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数解析：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>--name orderform-mysql ：实例名称为orderform-mysql
--user 1000:1000 :  指定特定用户运行镜像实例
-P  : 大写P，将docker实例需要的端口随机映射到宿主机
-v /docker/conf/etc/mysql:/etc/mysql/conf.d  : 将mysql的配置文件映射到宿主机,配置内容也可以通过参数指定，例如在run 命令后追加 --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci
-v /my/own/datadir:/var/lib/mysql : 将数据库数据挂载到宿主机目录
-e  MYSQL_ROOT_PASSWORD=123456  :  指定容器的环境变量。数据库root用户密码为123456 
	MYSQL_ROOT_PASSWORD   数据库root用户密码
	MYSQL_DATABASE  指定容器初始创建的实例
	MYSQL_USER  mysql一般用户，默认有MYSQL_DATABASE指定数据库的所有访问权限
	MYSQL_PASSWORD mysql一般用户密码
	MYSQL_ALLOW_EMPTY_PASSWORD 允许root用户不设置密码
	MYSQL_RANDOM_ROOT_PASSWORD root用户随机生成密码
	MYSQL_ONETIME_PASSWORD  root一次性密码，登录后必须修改
	MYSQL_INITDB_SKIP_TZINFO  忽略时区信息
	MYSQL_ROOT_PASSWORD_FILE 密码信息导出到宿主机文件，只有MYSQL_ROOT_PASSWORD, MYSQL_ROOT_HOST, MYSQL_DATABASE, MYSQL_USER, and MYSQL_PASSWORD信息
-d : 后台运行
mysql:latest  : 指定最新版本的mysql镜像

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_4-客户端实例" tabindex="-1"><a class="header-anchor" href="#_4-客户端实例" aria-hidden="true">#</a> 4 客户端实例</h1><h2 id="运行实例-连接docker形式的服务" tabindex="-1"><a class="header-anchor" href="#运行实例-连接docker形式的服务" aria-hidden="true">#</a> 运行实例-连接docker形式的服务</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run \\
-it \\
--network some-network \\
--rm  \\
mysql mysql \\
-hsome-mysql \\
-uexample-user \\
-p
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数解析</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-it : i交互模式运行容器，t分配伪输入终端，d后台运行容器
--network some-network  ：  docker网络地址
--rm  ： 运行结束后删除docker实例
mysql mysql ：?
-hsome-mysql ： 所连接的mysql docker实例名称
-uexample-user ： 连接mysql的用户名
-p ：需要密码验证

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="运行实例-连接非docker形式的服务" tabindex="-1"><a class="header-anchor" href="#运行实例-连接非docker形式的服务" aria-hidden="true">#</a> 运行实例-连接非docker形式的服务</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token punctuation">\\</span>
<span class="token parameter variable">-it</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">--rm</span> <span class="token punctuation">\\</span>
mysql mysql <span class="token punctuation">\\</span>
<span class="token parameter variable">-hsome.mysql.host</span> <span class="token punctuation">\\</span>
-usome-mysql-user <span class="token punctuation">\\</span>
<span class="token parameter variable">-p</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数解析</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-it : i交互模式运行容器，t分配伪输入终端，d后台运行容器
--rm  ：运行结束后删除docker实例
mysql mysql : ?
-hsome.mysql.host ： mysql服务的地址
-usome-mysql-user ： 连接mysql的用户名
-p ：需要密码验证

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_5-通过docker查看mysql日志" tabindex="-1"><a class="header-anchor" href="#_5-通过docker查看mysql日志" aria-hidden="true">#</a> 5 通过docker查看mysql日志</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> some-mysql <span class="token function">bash</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> logs some-mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="_6-数据备份-恢复" tabindex="-1"><a class="header-anchor" href="#_6-数据备份-恢复" aria-hidden="true">#</a> 6 数据备份/恢复</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> some-mysql <span class="token function">sh</span> <span class="token parameter variable">-c</span> <span class="token string">&#39;exec mysqldump --all-databases -uroot -p&quot;$MYSQL_ROOT_PASSWORD&quot;&#39;</span> <span class="token operator">&gt;</span> /some/path/on/your/host/all-databases.sql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-i</span> some-mysql <span class="token function">sh</span> <span class="token parameter variable">-c</span> <span class="token string">&#39;exec mysql -uroot -p&quot;$MYSQL_ROOT_PASSWORD&quot;&#39;</span> <span class="token operator">&lt;</span> /some/path/on/your/host/all-databases.sql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,25),d=[l];function r(c,t){return e(),a("div",null,d)}const u=s(i,[["render",r],["__file","mysql.html.vue"]]);export{u as default};
