import{_ as e,o as s,c as n,b as i}from"./app-b63b8632.js";const a={},l=i(`<p>gcc 不带参数直接编译成可执行文件</p><p>​ -E 生成预处理文件</p><p>​ -S 生成汇编文件</p><p>​ -c 生成目标文件</p><p>​ -g 开启调试模式</p><p>​ -O1 进行编译优化，优化等级1-3</p><p>​ -w 关闭告警</p><p>​ -W 打开告警</p><p>​ -Wall 打开全部告警</p><p>​ -std C语言版本 -std=gnu11</p><p>​ -fPIC 位置无关标志，一般编译动态库时使用，变量等具体使用时才会分配地址</p><p>​ -fvisibility=hidden 函数变量默认不可见，防止与别的库函数重名。加了此参数后特别定义为外部可见的变量和函数才能外部被使用</p><p>​ -fsanitize=address -fno-omit-frame-pointer 内存错误探测工具Address Sanitizer参数</p><p>​ 链接库文件</p><ul><li><p>编译：-I(大写的i)选项</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>gcc <span class="token parameter variable">-c</span> <span class="token parameter variable">-I</span> /usr/test/include test.c <span class="token punctuation">[</span>-o test.o<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>链接：-L选项，-l(L的小写)选项</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>gcc <span class="token parameter variable">-L</span> /usr/test/lib <span class="token parameter variable">-static</span> <span class="token parameter variable">-ltest</span> test.o <span class="token parameter variable">-o</span> <span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>注意：-L是指定库文件的搜索路径，-l(L的小写)用来指定库名，库文件通常为libxxxx.a或libxxxx.so，去掉前面的lib和后缀即为库名。

头文件的编译时寻找顺序：

- -I(i的大写)指定的路径
- /usr/include

静态库的链接时寻找顺序：

- -L指定的路径
- 环境变量LIBRARY_PATH指定的静态库搜索路径
-  /lib 、 /usr/lib 

动态库的链接时寻找顺序：

- -L指定路径
- 环境变量LD_LIBRARY_PATH指定的动态库搜索路径
- 配置文件/etc/ld.so.conf中指定的动态库搜索路径
- 默认的动态库搜索路径/lib 、/usr/lib

动态库运行时的搜索的顺序：

- 环境变量LD_LIBRARY_PATH指定的动态库搜索路径
- 配置文件/etc/ld.so.conf中指定的动态库搜索路径
- 默认的动态库搜索路径/lib 、/usr/lib

有关环境变量：
LIBRARY_PATH环境变量：指定程序静态链接库文件搜索路径
LD_LIBRARY_PATH环境变量：指定程序动态链接库文件搜索路径
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ar 打包库文件</p></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ar c libtest.a tes1.o test2.o test3.o
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,16),d=[l];function r(c,t){return s(),n("div",null,d)}const p=e(a,[["render",r],["__file","编译指令.html.vue"]]);export{p as default};
