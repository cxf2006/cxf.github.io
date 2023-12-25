import{_ as n,o as s,c as a,b as e}from"./app-b63b8632.js";const p={},t=e(`<h1 id="_1-openldap、phpldapadmin安装" tabindex="-1"><a class="header-anchor" href="#_1-openldap、phpldapadmin安装" aria-hidden="true">#</a> 1 openldap、phpLdapAdmin安装</h1><h2 id="_1-1-安装docker-compose" tabindex="-1"><a class="header-anchor" href="#_1-1-安装docker-compose" aria-hidden="true">#</a> 1.1 安装Docker-compose</h2><p>参考连接：https://www.cnblogs.com/xiondun/p/16686265.html</p><p>下载地址 https://github.com/docker/compose (源码地址)</p><p>​ https://github.com/docker/compose/releases (可执行包)</p><p>安装包放到/usr/local/bin/目录下，赋777权限，名称修改为docker-compose。</p><p>当前目录下查看版本：./docker-compose -v</p><p>环境变量配置: vim ~/.bash_profile 追加 PATH=$PATH:/usr/local/bin/</p><p>删除docker-compose,直接删除下载的二进制包即可 sudo rm /usr/local/bin/docker-compose</p><h2 id="_1-2-docker-compose安装openldap、php-ldap-admin" tabindex="-1"><a class="header-anchor" href="#_1-2-docker-compose安装openldap、php-ldap-admin" aria-hidden="true">#</a> 1.2 docker-compose安装openldap、php-ldap-admin</h2><p>home目录下新建composetest文件夹</p><p>composetest文件夹下新建docker-compose.yml,文件内容如下：</p><p>参考连接：https://zhuanlan.zhihu.com/p/532447126?utm_id=0 下的 [十一 docker-compose 部署openLDAP][3、单点部署方式三]</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.5&#39;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">openldap</span><span class="token punctuation">:</span>
    <span class="token comment"># 使用bitnami的镜像公司维护</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> bitnami/openldap<span class="token punctuation">:</span><span class="token number">2.6</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> <span class="token string">&quot;openldap&quot;</span>
    <span class="token key atrule">hostname</span><span class="token punctuation">:</span> <span class="token string">&quot;ldap&quot;</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&#39;389:1389&#39;</span>    <span class="token comment"># 注意这里的端口号</span>
      <span class="token punctuation">-</span> <span class="token string">&#39;636:1636&#39;</span>    <span class="token comment"># 注意这里的端口号</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">LDAP_ROOT</span><span class="token punctuation">:</span> <span class="token string">&quot;dc=demo,dc=com&quot;</span>
      <span class="token key atrule">LDAP_ADMIN_USERNAME</span><span class="token punctuation">:</span> <span class="token string">&quot;admin&quot;</span>
      <span class="token key atrule">LDAP_ADMIN_PASSWORD</span><span class="token punctuation">:</span> <span class="token string">&quot;123456&quot;</span>
      <span class="token key atrule">LDAP_USERS</span><span class="token punctuation">:</span> <span class="token string">&quot;user01,user02&quot;</span>
      <span class="token key atrule">LDAP_PASSWORDS</span><span class="token punctuation">:</span> <span class="token string">&quot;123456,123456&quot;</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&#39;openldap_data:/bitnami/openldap&#39;</span>
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> appldap

  <span class="token key atrule">phpldapadmin</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> <span class="token string">&quot;osixia/phpldapadmin:latest&quot;</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> <span class="token string">&quot;phpldapadmin&quot;</span>
    <span class="token key atrule">hostname</span><span class="token punctuation">:</span> <span class="token string">&quot;phpldapadmin&quot;</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> openldap
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token comment"># PHPLDAPADMIN_HTTPS: &quot;false&quot;</span>
      <span class="token key atrule">PHPLDAPADMIN_LDAP_HOSTS</span><span class="token punctuation">:</span> <span class="token string">&quot;192.168.1.103&quot;</span>    <span class="token comment"># 此处为宿主机IP</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token comment"># - 80:80      # http</span>
      <span class="token punctuation">-</span> <span class="token string">&#39;8443:443&#39;</span>   <span class="token comment"># https</span>
    <span class="token key atrule">networks</span><span class="token punctuation">:</span> 
      <span class="token punctuation">-</span> appldap

<span class="token key atrule">volumes</span><span class="token punctuation">:</span>
  <span class="token key atrule">openldap_data</span><span class="token punctuation">:</span>
    <span class="token key atrule">driver</span><span class="token punctuation">:</span> local

<span class="token key atrule">networks</span><span class="token punctuation">:</span>
  <span class="token key atrule">appldap</span><span class="token punctuation">:</span>
    <span class="token key atrule">driver</span><span class="token punctuation">:</span> bridge
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行命令安装：docker-compose up -d （-d为后台执行）</p><p>浏览器访问https://宿主机IP:8443</p><p>管理员账号: cn=admin,dc=demo,dc=com</p><p>密码: 123456</p>`,18),l=[t];function o(c,i){return s(),a("div",null,l)}const d=n(p,[["render",o],["__file","openldap安装.html.vue"]]);export{d as default};
