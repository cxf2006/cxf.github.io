import{_ as e,o as n,c as a,e as s}from"./app-d417e0ec.js";const i={},d=s(`<p>network命令</p><p>应用：</p><p>​ 创建network</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> network create network-name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@192 mysql]# docker network ls
NETWORK ID     NAME      DRIVER    SCOPE
1f66fa972d71   bridge    bridge    local
f5f70574e986   host      host      local
f7ac60cb998a   network-name     bridge    local
fe89ece9419b   none      null      local
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 容器链接到network</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> network connect network-name containter-name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​ 容器从network断开链接</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> network disconnect network-name containter-name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,9),c=[d];function l(r,t){return n(),a("div",null,c)}const u=e(i,[["render",l],["__file","network.html.vue"]]);export{u as default};
