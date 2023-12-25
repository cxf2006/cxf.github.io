import{_ as e,o as i,c as n,b as a}from"./app-b63b8632.js";const s={},t=a(`<h1 id="镜像安装以及运行实例" tabindex="-1"><a class="header-anchor" href="#镜像安装以及运行实例" aria-hidden="true">#</a> 镜像安装以及运行实例</h1><p>获取最新镜像： docker pull ubuntu:latest</p><p>运行ubuntu实例：docker run -itd --name ubuntu ubuntu:latest /bin/bash</p><p>进入容器：docker exec -it ubuntu /bin/bash</p><p>版本信息查看： uname -a</p><p>​ cat /etc/issue</p><p>​ cat /proc/version</p><h1 id="常用命令安装" tabindex="-1"><a class="header-anchor" href="#常用命令安装" aria-hidden="true">#</a> 常用命令安装</h1><h2 id="安装vim命令" tabindex="-1"><a class="header-anchor" href="#安装vim命令" aria-hidden="true">#</a> 安装vim命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">apt-get</span> update
<span class="token function">apt-get</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> <span class="token function">vim</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装ping命令" tabindex="-1"><a class="header-anchor" href="#安装ping命令" aria-hidden="true">#</a> 安装ping命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">apt-get</span> <span class="token function">install</span> iputils-ping
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="安装sudo命令" tabindex="-1"><a class="header-anchor" href="#安装sudo命令" aria-hidden="true">#</a> 安装sudo命令</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>apt-get install -y sudo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="安装gpg相关命令-安装pgp公钥时需要" tabindex="-1"><a class="header-anchor" href="#安装gpg相关命令-安装pgp公钥时需要" aria-hidden="true">#</a> 安装gpg相关命令（安装pgp公钥时需要）</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">apt-get</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> gnupg
<span class="token function">apt-get</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> gnupg1
<span class="token function">apt-get</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> gnupg2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="替换apt-get镜像库地址" tabindex="-1"><a class="header-anchor" href="#替换apt-get镜像库地址" aria-hidden="true">#</a> 替换apt-get镜像库地址</h1><h2 id="修改sourcelist文件" tabindex="-1"><a class="header-anchor" href="#修改sourcelist文件" aria-hidden="true">#</a> 修改sourcelist文件</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/apt/sources.list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>增加阿里镜像地址</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>deb http://mirrors.aliyun.com/ubuntu/ bionic main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic main restricted universe multiverse

deb http://mirrors.aliyun.com/ubuntu/ bionic-security main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic-security main restricted universe multiverse

deb http://mirrors.aliyun.com/ubuntu/ bionic-updates main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic-updates main restricted universe multiverse

deb http://mirrors.aliyun.com/ubuntu/ bionic-proposed main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic-proposed main restricted universe multiverse

deb http://mirrors.aliyun.com/ubuntu/ bionic-backports main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic-backports main restricted universe multiverse
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="apt-get-update-报错解决" tabindex="-1"><a class="header-anchor" href="#apt-get-update-报错解决" aria-hidden="true">#</a> apt-get update 报错解决</h2><p>此时执行apt-get update 会报错，无法验证阿里服务的gpg公钥。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>W: An error occurred during the signature verification. The repository is not updated and the previous index files will be used. GPG error: http://mirrors.aliyun.com/ubuntu bionic InRelease: The following signatures couldn&#39;t be verified because the public key is not available: NO_PUBKEY 3B4FE6ACC0B21F32
W: An error occurred during the signature verification. The repository is not updated and the previous index files will be used. GPG error: http://mirrors.aliyun.com/ubuntu bionic-security InRelease: The following signatures couldn&#39;t be verified because the public key is not available: NO_PUBKEY 3B4FE6ACC0B21F32
W: An error occurred during the signature verification. The repository is not updated and the previous index files will be used. GPG error: http://mirrors.aliyun.com/ubuntu bionic-updates InRelease: The following signatures couldn&#39;t be verified because the public key is not available: NO_PUBKEY 3B4FE6ACC0B21F32
W: An error occurred during the signature verification. The repository is not updated and the previous index files will be used. GPG error: http://mirrors.aliyun.com/ubuntu bionic-proposed InRelease: The following signatures couldn&#39;t be verified because the public key is not available: NO_PUBKEY 3B4FE6ACC0B21F32
W: An error occurred during the signature verification. The repository is not updated and the previous index files will be used. GPG error: http://mirrors.aliyun.com/ubuntu bionic-backports InRelease: The following signatures couldn&#39;t be verified because the public key is not available: NO_PUBKEY 3B4FE6ACC0B21F32
W: Failed to fetch http://mirrors.aliyun.com/ubuntu/dists/bionic/InRelease  The following signatures couldn&#39;t be verified because the public key is not available: NO_PUBKEY 3B4FE6ACC0B21F32
W: Failed to fetch http://mirrors.aliyun.com/ubuntu/dists/bionic-security/InRelease  The following signatures couldn&#39;t be verified because the public key is not available: NO_PUBKEY 3B4FE6ACC0B21F32
W: Failed to fetch http://mirrors.aliyun.com/ubuntu/dists/bionic-updates/InRelease  The following signatures couldn&#39;t be verified because the public key is not available: NO_PUBKEY 3B4FE6ACC0B21F32
W: Failed to fetch http://mirrors.aliyun.com/ubuntu/dists/bionic-proposed/InRelease  The following signatures couldn&#39;t be verified because the public key is not available: NO_PUBKEY 3B4FE6ACC0B21F32
W: Failed to fetch http://mirrors.aliyun.com/ubuntu/dists/bionic-backports/InRelease  The following signatures couldn&#39;t be verified because the public key is not available: NO_PUBKEY 3B4FE6ACC0B21F32
W: Some index files failed to download. They have been ignored, or old ones used instead.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装阿里镜像服务gpg公钥" tabindex="-1"><a class="header-anchor" href="#安装阿里镜像服务gpg公钥" aria-hidden="true">#</a> 安装阿里镜像服务gpg公钥</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>apt-key adv <span class="token parameter variable">--keyserver</span>  hkp://keyserver.ubuntu.com:80  --recv-keys 3B4FE6ACC0B21F32
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装成功后，执行apt-get update依旧报错：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>W: http://mirrors.aliyun.com/ubuntu/dists/bionic/InRelease: Key is stored in legacy trusted.gpg keyring (/etc/apt/trusted.gpg), see the DEPRECATION section in apt-key(8) for details.
W: http://mirrors.aliyun.com/ubuntu/dists/bionic-security/InRelease: Key is stored in legacy trusted.gpg keyring (/etc/apt/trusted.gpg), see the DEPRECATION section in apt-key(8) for details.
W: http://mirrors.aliyun.com/ubuntu/dists/bionic-updates/InRelease: Key is stored in legacy trusted.gpg keyring (/etc/apt/trusted.gpg), see the DEPRECATION section in apt-key(8) for details.
W: http://mirrors.aliyun.com/ubuntu/dists/bionic-proposed/InRelease: Key is stored in legacy trusted.gpg keyring (/etc/apt/trusted.gpg), see the DEPRECATION section in apt-key(8) for details.
W: http://mirrors.aliyun.com/ubuntu/dists/bionic-backports/InRelease: Key is stored in legacy trusted.gpg keyring (/etc/apt/trusted.gpg), see the DEPRECATION section in apt-key(8) for details.

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总体意思是新安装的pgp公钥没有设置成信任的公钥。</p><h3 id="信任gpg公钥" tabindex="-1"><a class="header-anchor" href="#信任gpg公钥" aria-hidden="true">#</a> 信任gpg公钥</h3><p>修改方法将公钥放入，信任目录：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>move /etc/apt/trusted.gpg  /etc/apt/trusted.gpg.d/
rm -f /etc/apt/trusted.gpg~
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>之后再执行apt-get update 无报错信息：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>root@40624ead641c:/etc/apt# apt-get update
Hit:1 http://mirrors.aliyun.com/ubuntu bionic InRelease
Hit:2 http://mirrors.aliyun.com/ubuntu bionic-security InRelease
Hit:3 http://mirrors.aliyun.com/ubuntu bionic-updates InRelease
Hit:4 http://mirrors.aliyun.com/ubuntu bionic-proposed InRelease
Hit:5 http://mirrors.aliyun.com/ubuntu bionic-backports InRelease
Reading package lists... Done

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="修改时区" tabindex="-1"><a class="header-anchor" href="#修改时区" aria-hidden="true">#</a> 修改时区</h1><p>执行tzselect报错</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>root@40624ead641c:/etc/apt# tzselect
/usr/bin/tzselect: line 179: /usr/share/zoneinfo/iso3166.tab: No such file or directory
/usr/bin/tzselect: time zone files are not set up correctly
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装tzdate:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>apt-get install tzdata
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装完后自动进入配置步骤:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Configuring tzdata
------------------

Please select the geographic area in which you live. Subsequent configuration questions will narrow this down by
presenting a list of cities, representing the time zones in which they are located.

  1. Africa   3. Antarctica  5. Arctic  7. Atlantic  9. Indian    11. SystemV  13. Etc
  2. America  4. Australia   6. Asia    8. Europe    10. Pacific  12. US
Geographic area: 6

Please select the city or region corresponding to your time zone.

  1. Aden      16. Brunei       31. Hong_Kong    46. Kuala_Lumpur  61. Pyongyang      76. Tehran
  2. Almaty    17. Chita        32. Hovd         47. Kuching       62. Qatar          77. Tel_Aviv
  3. Amman     18. Choibalsan   33. Irkutsk      48. Kuwait        63. Qostanay       78. Thimphu
  4. Anadyr    19. Chongqing    34. Istanbul     49. Macau         64. Qyzylorda      79. Tokyo
  5. Aqtau     20. Colombo      35. Jakarta      50. Magadan       65. Rangoon        80. Tomsk
  6. Aqtobe    21. Damascus     36. Jayapura     51. Makassar      66. Riyadh         81. Ujung_Pandang
  7. Ashgabat  22. Dhaka        37. Jerusalem    52. Manila        67. Sakhalin       82. Ulaanbaatar
  8. Atyrau    23. Dili         38. Kabul        53. Muscat        68. Samarkand      83. Urumqi
  9. Baghdad   24. Dubai        39. Kamchatka    54. Nicosia       69. Seoul          84. Ust-Nera
  10. Bahrain  25. Dushanbe     40. Karachi      55. Novokuznetsk  70. Shanghai       85. Vientiane
  11. Baku     26. Famagusta    41. Kashgar      56. Novosibirsk   71. Singapore      86. Vladivostok
  12. Bangkok  27. Gaza         42. Kathmandu    57. Omsk          72. Srednekolymsk  87. Yakutsk
  13. Barnaul  28. Harbin       43. Khandyga     58. Oral          73. Taipei         88. Yangon
  14. Beirut   29. Hebron       44. Kolkata      59. Phnom_Penh    74. Tashkent       89. Yekaterinburg
  15. Bishkek  30. Ho_Chi_Minh  45. Krasnoyarsk  60. Pontianak     75. Tbilisi        90. Yerevan
Time zone: 70


Current default time zone: &#39;Asia/Shanghai&#39;
Local time is now:      Tue Dec 20 17:12:08 CST 2022.
Universal Time is now:  Tue Dec 20 09:12:08 UTC 2022.
Run &#39;dpkg-reconfigure tzdata&#39; if you wish to change it.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置完成后，时区更改也就完成了。</p>`,42),r=[t];function d(l,u){return i(),n("div",null,r)}const o=e(s,[["render",d],["__file","基础镜像安装常用软件.html.vue"]]);export{o as default};
