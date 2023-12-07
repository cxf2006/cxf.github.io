import{_ as t,r as d,o as l,c as r,a as n,d as e,e as a,b as s}from"./app-26a5a8f2.js";const o={},c=n("h1",{id:"安装pmd和cpd",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#安装pmd和cpd","aria-hidden":"true"},"#"),e(" 安装PMD和CPD")],-1),u=n("h2",{id:"前提条件",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#前提条件","aria-hidden":"true"},"#"),e(" 前提条件")],-1),v=n("p",null,"1 java：",-1),m={href:"http://www.oracle.com/technetwork/java/javase/downloads/index.html",target:"_blank",rel:"noopener noreferrer"},p={href:"https://www.azul.com/downloads/zulu-community/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://adoptium.net/",target:"_blank",rel:"noopener noreferrer"},g=n("p",null,"2 zip压缩工具：",-1),h={href:"http://winzip.com/",target:"_blank",rel:"noopener noreferrer"},f={href:"http://www.7-zip.org/",target:"_blank",rel:"noopener noreferrer"},y={href:"http://infozip.sourceforge.net/",target:"_blank",rel:"noopener noreferrer"},_={href:"https://gluonhq.com/products/javafx/",target:"_blank",rel:"noopener noreferrer"},x=n("h2",{id:"安装",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#安装","aria-hidden":"true"},"#"),e(" 安装")],-1),j={href:"https://github.com/pmd/pmd/releases",target:"_blank",rel:"noopener noreferrer"},q=s(`<p>​ 强烈建议(非必要)将安装目录配置到环境变量PATH。</p><p>​ linux上追加到PATH方法：在~/.bashrc<code>或者</code>~/.zshrc文件后追加 <code>PATH=$PATH:*path_to_pmd*/bin/</code>。</p><p>​ windows上环境变量配置方法省略。</p><h3 id="shell-completion" tabindex="-1"><a class="header-anchor" href="#shell-completion" aria-hidden="true">#</a> Shell completion</h3><p>PMD附带了对Bash/Zsh的内置完成支持。开启方式：</p><p><code>~/.bashrc</code> / <code>~/.zshrc</code>文件添加下面脚本。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token builtin class-name">source</span> *path_to_pmd*/shell/pmd-completion.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="命令行运行pmd" tabindex="-1"><a class="header-anchor" href="#命令行运行pmd" aria-hidden="true">#</a> 命令行运行PMD</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PMD有一些实用的命令，例如CPD，规则设计器以及PMD自身命令。这些命令可以直接通过pmd(windows下是pmd.bat)脚本直接执行。脚本文件位于安装目录的bin目录下。第一个参数制定你想执行什么操作，pmd check...,pmd designer...。其他参数都是指定操作的参数。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>pmd check指令需要两个参数，一个选项参数，一个源文件列表参数。</p><p>-R</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-R &lt;path&gt;:指定规则文件路径。PMD规则文件路径使用xml进行配置，该文件叫做规则集。规则文件定义了检查源文件的规则。
还可以只检测特定的某一个规则，例如pmd check -R category/java/codestyle.xml/UnnecessaryModifier
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>路径参数</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;source&gt; ...: 被分析文件的目录，可以是文件，也可以是目录。或者一个jar包以及一个包括java文件的zip包。或者使用 -d(也可以是--dir)来指定目录。 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><em>实际使用需要指定路径类型：目录(-d或者--dir),下载地址 (-u或者--uri)，文件( --file-list)</em></p><p>注意事项：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>以前提供的规则虽然还可以使用，但是已经废弃，不建议使用。例如：rulesets/java/basic.xml。
PMD提供了快速体验功能的简单的规则配置，例如：rulesets/java/quickstart.xml。
强烈建议创建自己的检测规则集。配置参考： https://docs.pmd-code.org/latest/pmd_userdocs_making_rulesets.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>非必要的常用参数</p><p>-f</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-f &lt;format&gt;:指定报告格式。pmd可以生成包括text、xml在内的各种格式的报告。所有支持的格式： https://docs.pmd-code.org/latest/pmd_userdocs_cli_reference.html#available-report-formats
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>--aux-classpath</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>--aux-classpath &lt;classpath&gt;: 指定源代码文件使用的类路径。根据依赖的已编译的class进行深入分析。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>完整命令说明：https://docs.pmd-code.org/latest/pmd_userdocs_cli_reference.html</p><h2 id="例子" tabindex="-1"><a class="header-anchor" href="#例子" aria-hidden="true">#</a> 例子</h2><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>D:\\tmp\\dubbo-admin\\dubbo-admin-server\\src&gt; pmd check   -R rulesets/java/quickstart.xml -d ./  -f text
[main] INFO net.sourceforge.pmd.cli - Log level is at INFO
[main] WARN net.sourceforge.pmd.cli - Progressbar rendering conflicts with reporting to STDOUT. No progressbar will be shown. Try running with argument -r &lt;file&gt; to output the report to a file instead.
[main] WARN net.sourceforge.pmd.cli - This analysis could be faster, please consider using Incremental Analysis: https://docs.pmd-code.org/pmd-doc-7.0.0-rc4/pmd_userdocs_incremental_analysis.html
.\\main\\java\\org\\apache\\dubbo\\admin\\DubboAdminApplication.java:31:       UseUtilityClass:        This utility class has a non-private constructor
.\\main\\java\\org\\apache\\dubbo\\admin\\common\\CommonResponse.java:24:       ClassWithOnlyPrivateConstructorsShouldBeFinal: This class has only private constructors and may be final
.\\main\\java\\org\\apache\\dubbo\\admin\\common\\CommonResponse.java:52:       LooseCoupling:  Avoid using implementation types like &#39;CommonResponse&#39;; use the interface instead
.\\main\\java\\org\\apache\\dubbo\\admin\\common\\CommonResponse.java:57:       LooseCoupling:  Avoid using implementation types like &#39;CommonResponse&#39;; use the interface instead
.\\main\\java\\org\\apache\\dubbo\\admin\\common\\CommonResponse.java:63:       LooseCoupling:  Avoid using implementation types like &#39;CommonResponse&#39;; use the interface instead
.\\main\\java\\org\\apache\\dubbo\\admin\\common\\CommonResponse.java:69:       LooseCoupling:  Avoid using implementation types like &#39;CommonResponse&#39;; use the interface instead
.\\main\\java\\org\\apache\\dubbo\\admin\\common\\CommonResponse.java:74:       LooseCoupling:  Avoid using implementation types like &#39;CommonResponse&#39;; use the interface instead
.\\main\\java\\org\\apache\\dubbo\\admin\\common\\CommonResponse.java:78:       LooseCoupling:  Avoid using implementation types like &#39;CommonResponse&#39;; use the interface instead
.\\main\\java\\org\\apache\\dubbo\\admin\\common\\CommonResponse.java:83:       LooseCoupling:  Avoid using implementation types like &#39;CommonResponse&#39;; use the interface instead
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="命令行运行cpd" tabindex="-1"><a class="header-anchor" href="#命令行运行cpd" aria-hidden="true">#</a> 命令行运行CPD</h1><p>​ CPD支持检测Java，JSP，C，C++，C#，Fortran和PHP以及其他源码。完整支持列表见：https://docs.pmd-code.org/latest/pmd_userdocs_cpd.html#supported-languages</p><p>​ cpd调用 pmd cpd --minimum-tokens &lt;number&gt; &lt;source&gt; ...</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>--minimum-tokens &lt;number&gt;:参数用于设置在代码重复检测中，将会报告的最小标记（token）长度。重复度小的将不会报告。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;source&gt; ...: 被分析文件的目录，可以是文件，也可以是目录。或者一个jar包以及一个包括java文件的zip包。或者使用 -d(也可以是--dir)来指定目录。 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,30),T={href:"https://docs.pmd-code.org/latest/pmd_userdocs_cpd.html",target:"_blank",rel:"noopener noreferrer"},k=s(`<h2 id="例子-1" tabindex="-1"><a class="header-anchor" href="#例子-1" aria-hidden="true">#</a> 例子</h2><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>PS D:\\tmp\\dubbo-admin\\dubbo-admin-server\\src&gt; pmd cpd --minimum-tokens 100 ./
[main] INFO net.sourceforge.pmd.cli - Log level is at INFO
Found a 83 line (473 tokens) duplication in the following files:
Starting at line 126 of D:\\tmp\\dubbo-admin\\dubbo-admin-server\\src\\main\\java\\org\\apache\\dubbo\\admin\\common\\util\\ServiceTestUtil.java
Starting at line 135 of D:\\tmp\\dubbo-admin\\dubbo-admin-server\\src\\main\\java\\org\\apache\\dubbo\\admin\\common\\util\\ServiceTestV3Util.java

        switch (type) {
            case &quot;byte&quot;:
            case &quot;java.lang.Byte&quot;:
            case &quot;short&quot;:
            case &quot;java.lang.Short&quot;:
            case &quot;int&quot;:
            case &quot;java.lang.Integer&quot;:
            case &quot;long&quot;:
            case &quot;java.lang.Long&quot;:
                return 0;
            case &quot;float&quot;:
            case &quot;java.lang.Float&quot;:
            case &quot;double&quot;:
            case &quot;java.lang.Double&quot;:
                return 0.0;
            case &quot;boolean&quot;:
            case &quot;java.lang.Boolean&quot;:
                return true;
            case &quot;void&quot;:
            case &quot;java.lang.Void&quot;:
                return null;
            case &quot;java.lang.String&quot;:
                return &quot;&quot;;
            case &quot;java.lang.Object&quot;:
                return Collections.emptyMap();
            case &quot;java.util.Date&quot;:
                return System.currentTimeMillis();
            default:
                return Collections.emptyMap();
        }
    }

    private static Object generateType(ServiceDefinition sd, String type) {
        TypeDefinition td = findTypeDefinition(sd, type);
        return generateType(sd, td);
    }

    private static Object generateType(ServiceDefinition sd, TypeDefinition td) {
        if (isPrimitiveType(td)) {
            return generatePrimitiveType(td);
        } else if (isMap(td)) {
            return generateMapType(sd, td);
        } else if (isArray(td)) {
            return generateArrayType(sd, td);
        } else if (isCollection(td)) {
            return generateCollectionType(sd, td);
        } else {
            return generateComplexType(sd, td);
        }
    }

    private static Object generateMapType(ServiceDefinition sd, TypeDefinition td) {
        String keyType = StringUtils.substringAfter(td.getType(), &quot;&lt;&quot;);
        keyType = StringUtils.substringBefore(keyType, &quot;,&quot;);
        keyType = StringUtils.strip(keyType);

        Map&lt;Object, Object&gt; map = new HashMap&lt;&gt;();
        Object key = generateType(sd, keyType);
        String valueType = StringUtils.substringAfter(td.getType(), &quot;,&quot;);
        valueType = StringUtils.substringBefore(valueType, &quot;&gt;&quot;);
        valueType = StringUtils.strip(valueType);
        valueType = StringUtils.isNotEmpty(valueType) ? valueType : &quot;java.lang.Object&quot;;
        Object value = generateType(sd, valueType);
        map.put(key, value);
        return map;
    }

    private static Object generateCollectionType(ServiceDefinition sd, TypeDefinition td) {
        String type = StringUtils.substringAfter(td.getType(), &quot;&lt;&quot;);
        type = StringUtils.substringBefore(type, &quot;&gt;&quot;);
        if (StringUtils.isEmpty(type)) {
            // if type is null return empty collection
            return new Object[] {};
        }
        return new Object[]{generateType(sd, type)};

    }
    private static Object generateArrayType(ServiceDefinition sd, TypeDefinition td) {
        String type = StringUtils.substringBeforeLast(td.getType(), &quot;[]&quot;);
        return new Object[]{generateType(sd, type)};
    }

    private static void generateEnclosedType(Map&lt;String, Object&gt; holder, String key, ServiceDefinition sd, TypeDefinition td) {

=====================================================================
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function C(D,S){const i=d("ExternalLinkIcon");return l(),r("div",null,[c,u,v,n("p",null,[e("java版本>8 "),n("a",m,[e("Java JRE"),a(i)]),e(", OpenJDK 下载网站 "),n("a",p,[e("Azul"),a(i)]),e(" or "),n("a",b,[e("Adoptium"),a(i)]),e(".")]),g,n("p",null,[e("​ windows："),n("a",h,[e("Winzip"),a(i)]),e(" (收费)， "),n("a",f,[e("7-zip"),a(i)]),e(" (免费)")]),n("p",null,[e("​ Linux / Unix: "),n("a",y,[e("InfoZip"),a(i)])]),n("p",null,[e("**提示：**如果在OpenJDK或者java11基础上使用pmd designer，需要手动添加 "),n("a",_,[e("JavaFX"),a(i)]),e(".。下载后解压到环境变量JAVAFX_HOME所有配置的目录。")]),x,n("p",null,[e("​ PMD软件以zip压缩包形式发布，里面包括PMD和CPD。最新发布包下载地址"),n("a",j,[e("github发布地址"),a(i)]),e(".")]),q,n("p",null,[n("a",T,[e("CPD使用详见"),a(i)])]),k])}const P=t(o,[["render",C],["__file","2安装和基本cli使用.html.vue"]]);export{P as default};
