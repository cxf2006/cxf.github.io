import{_ as s,r as t,o as l,c as u,a as n,d as a,e as d,b as e}from"./app-b63b8632.js";const r="/notes/assets/image-20231101145947779-cd789fe1.png",c="/notes/assets/image-20231101173722308-1836886a.png",o={},p=e(`<h2 id="启动规则设计器时报错" tabindex="-1"><a class="header-anchor" href="#启动规则设计器时报错" aria-hidden="true">#</a> 启动规则设计器时报错</h2><h3 id="问题描述" tabindex="-1"><a class="header-anchor" href="#问题描述" aria-hidden="true">#</a> 问题描述</h3><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>C:\\Users\\cxf&gt;pmd designer
The environment variable JAVAFX_HOME is missing.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解决" tabindex="-1"><a class="header-anchor" href="#解决" aria-hidden="true">#</a> 解决</h3>`,4),m={href:"https://gluonhq.com/products/javafx/",target:"_blank",rel:"noopener noreferrer"},v=e('<p><img src="'+r+`" alt="image-20231101145947779"></p><p>​ 配置环境变量</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>JAVAFX_HOME=D:\\PF\\javafx-sdk-21.0.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>配置完后继续报下面的错：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>PS C:\\Users\\cxf&gt; pmd designer
11月 01, 2023 3:07:11 下午 com.sun.javafx.application.PlatformImpl startup
警告: Unsupported JavaFX configuration: classes were loaded from &#39;unnamed module @bf3d14&#39;
Graphics Device initialization failed for :  d3d, sw
Error initializing QuantumRenderer: no suitable pipeline found
java.lang.RuntimeException: java.lang.RuntimeException: Error initializing QuantumRenderer: no suitable pipeline found
        at com.sun.javafx.tk.quantum.QuantumRenderer.getInstance(QuantumRenderer.java:283)
        at com.sun.javafx.tk.quantum.QuantumToolkit.init(QuantumToolkit.java:253)
        at com.sun.javafx.tk.Toolkit.getToolkit(Toolkit.java:263)
        at com.sun.javafx.application.PlatformImpl.startup(PlatformImpl.java:290)
        at com.sun.javafx.application.PlatformImpl.startup(PlatformImpl.java:162)
        at com.sun.javafx.application.LauncherImpl.startToolkit(LauncherImpl.java:651)
        at com.sun.javafx.application.LauncherImpl.launchApplication1(LauncherImpl.java:671)
        at com.sun.javafx.application.LauncherImpl.lambda$launchApplication$2(LauncherImpl.java:196)
        at java.base/java.lang.Thread.run(Thread.java:1589)
Caused by: java.lang.RuntimeException: Error initializing QuantumRenderer: no suitable pipeline found
        at com.sun.javafx.tk.quantum.QuantumRenderer$PipelineRunnable.init(QuantumRenderer.java:95)
        at com.sun.javafx.tk.quantum.QuantumRenderer$PipelineRunnable.run(QuantumRenderer.java:125)
        ... 1 more
java.lang.RuntimeException: No toolkit found
        at com.sun.javafx.tk.Toolkit.getToolkit(Toolkit.java:275)
        at com.sun.javafx.application.PlatformImpl.startup(PlatformImpl.java:290)
        at com.sun.javafx.application.PlatformImpl.startup(PlatformImpl.java:162)
        at com.sun.javafx.application.LauncherImpl.startToolkit(LauncherImpl.java:651)
        at com.sun.javafx.application.LauncherImpl.launchApplication1(LauncherImpl.java:671)
        at com.sun.javafx.application.LauncherImpl.lambda$launchApplication$2(LauncherImpl.java:196)
        at java.base/java.lang.Thread.run(Thread.java:1589)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个问题原因是竟然安装了32位的jdk，用的64位的javaFx造成的。</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token function">PS</span> D:\\PF\\jdk-19<span class="token punctuation">.</span>0<span class="token punctuation">.</span>2+7\\bin&gt; <span class="token punctuation">.</span>\\java<span class="token punctuation">.</span>exe  <span class="token operator">-</span>version
openjdk version <span class="token string">&quot;19.0.2&quot;</span> 2023-01-17
OpenJDK Runtime Environment Temurin-19<span class="token punctuation">.</span>0<span class="token punctuation">.</span>2+7 <span class="token punctuation">(</span>build 19<span class="token punctuation">.</span>0<span class="token punctuation">.</span>2+7<span class="token punctuation">)</span>
OpenJDK Client VM Temurin-19<span class="token punctuation">.</span>0<span class="token punctuation">.</span>2+7 <span class="token punctuation">(</span>build 19<span class="token punctuation">.</span>0<span class="token punctuation">.</span>2+7<span class="token punctuation">,</span> mixed mode<span class="token punctuation">,</span> emulated-client<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重新安装了以下版本的jdk就oK了。下载路径：https://jdk.java.net/21/</p><p><img src="`+c+`" alt="image-20231101173722308"></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PS C:\\Users\\cxf&gt; java -version
openjdk version &quot;21.0.1&quot; 2023-10-17
OpenJDK Runtime Environment (build 21.0.1+12-29)
OpenJDK 64-Bit Server VM (build 21.0.1+12-29, mixed mode, sharing)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10);function b(h,j){const i=t("ExternalLinkIcon");return l(),u("div",null,[p,n("p",null,[a("​ 如果在OpenJDK或者java11基础上使用pmd designer，需要手动添加 "),n("a",m,[a("JavaFX"),d(i)]),a(".。下载后解压到环境变量JAVAFX_HOME所有配置的目录。")]),v])}const g=s(o,[["render",b],["__file","99问题.html.vue"]]);export{g as default};
