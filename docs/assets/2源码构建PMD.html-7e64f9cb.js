import{_ as n,o as s,c as a,e}from"./app-d417e0ec.js";const i={},l=e(`<h1 id="源码构建pmd" tabindex="-1"><a class="header-anchor" href="#源码构建pmd" aria-hidden="true">#</a> 源码构建PMD</h1><h2 id="编译pmd" tabindex="-1"><a class="header-anchor" href="#编译pmd" aria-hidden="true">#</a> 编译PMD</h2><p>​ JDK&gt;=11</p><p>​ ⚠️注意：虽然构建需要Java 11，但运行PMD只需要Java 7（或Java 8，用于Apex、JavaScript、Scala、Visualforce和Designer）。</p><p>​ 您需要检出源代码或下载最新的源代码发布版。假设您已经获取了最新的源代码发布版，请将其解压缩到一个目录中：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>tom@hal building<span class="token punctuation">]</span>$ <span class="token function">ls</span> <span class="token parameter variable">-l</span>
total <span class="token number">5716</span>
-rw-rw-r--    <span class="token number">1</span> tom      tom       <span class="token number">5837216</span> Jul <span class="token number">17</span> <span class="token number">13</span>:09 pmd-src-7.0.0-rc4.zip
<span class="token punctuation">[</span>tom@hal building<span class="token punctuation">]</span>$ <span class="token function">unzip</span> <span class="token parameter variable">-q</span> pmd-src-7.0.0-rc4.zip
<span class="token punctuation">[</span>tom@hal building<span class="token punctuation">]</span>$
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 进入pmd目录</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>tom@hal building<span class="token punctuation">]</span>$ <span class="token builtin class-name">cd</span> pmd-src-7.0.0-rc4
<span class="token punctuation">[</span>tom@hal pmd-src-7.0.0-rc4<span class="token punctuation">]</span>$ <span class="token function">ls</span> <span class="token parameter variable">-l</span> <span class="token operator">|</span> <span class="token function">grep</span> pom.xml
-rw-rw-r--    <span class="token number">1</span> tom      tom          <span class="token number">36482</span> <span class="token number">14</span><span class="token punctuation">\\</span>. Nov <span class="token number">17</span>:36 pom.xml
<span class="token punctuation">[</span>tom@hal pmd-src-7.0.0-rc4<span class="token punctuation">]</span>$
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 这是Maven的项目配置...让我们开始编译吧！</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[tom@hal pmd-src-7.0.0-rc4]$ ./mvnw clean verify
[INFO] Scanning for projects...
[INFO] ------------------------------------------------------------------------
[INFO] Reactor Build Order:
[INFO]
[INFO] PMD
[INFO] PMD Core
...
... after a few minutes ...
[INFO] ------------------------------------------------------------------------
[INFO] Reactor Summary:
[INFO]
[INFO] PMD ................................................ SUCCESS [  3.061 s]
[INFO] PMD Core ........................................... SUCCESS [ 25.675 s]
[INFO] PMD Test Framework ................................. SUCCESS [  0.457 s]
[INFO] PMD C++ ............................................ SUCCESS [  1.893 s]
[INFO] PMD C# ............................................. SUCCESS [  0.619 s]
[INFO] PMD Fortran ........................................ SUCCESS [  0.609 s]
[INFO] PMD Go ............................................. SUCCESS [  0.103 s]
[INFO] PMD Java ........................................... SUCCESS [01:08 min]
[INFO] PMD JavaScript ..................................... SUCCESS [  3.279 s]
[INFO] PMD JSP ............................................ SUCCESS [  3.944 s]
[INFO] PMD Matlab ......................................... SUCCESS [  1.342 s]
[INFO] PMD Objective-C .................................... SUCCESS [  2.281 s]
[INFO] PMD PHP ............................................ SUCCESS [  0.536 s]
[INFO] PMD PL/SQL ......................................... SUCCESS [ 10.973 s]
[INFO] PMD Python ......................................... SUCCESS [  1.758 s]
[INFO] PMD Ruby ........................................... SUCCESS [  0.438 s]
[INFO] PMD Velocity ....................................... SUCCESS [  3.941 s]
[INFO] PMD XML and XSL .................................... SUCCESS [  2.174 s]
[INFO] PMD Scala .......................................... SUCCESS [ 11.901 s]
[INFO] PMD Distribution Packages .......................... SUCCESS [ 11.366 s]
[INFO] PMD Java 8 Integration ............................. SUCCESS [  0.560 s]
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time: 02:36 min
[INFO] Finished at: 2015-11-14T17:46:06+01:00
[INFO] Final Memory: 63M/765M
[INFO] ------------------------------------------------------------------------
[tom@hal pmd-src-7.0.0-rc4]$
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 现在，源代码和二进制分发的ZIP文件可以在pmd-dist/target文件夹中找到。</p><p>​ 🎗️提示：已经编写的规则被指定在特定语言的src/main/resources/category/目录中，例如pmd-java/src/main/resources/category。它们也包含在随源代码和二进制分发一起提供的JAR文件中。</p>`,12),d=[l];function c(r,t){return s(),a("div",null,d)}const p=n(i,[["render",c],["__file","2源码构建PMD.html.vue"]]);export{p as default};
