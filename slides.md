---
# You can also start simply with 'default'
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://cover.sli.dev
# some information about your slides (markdown enabled)
title: 前端工程架构升级
titleTemplate: "%s"
info: |
  ## 前端工程架构升级
  代码规范统一，打包工具更换，技术栈Vue升级，css引擎升级，typescript使用，辅助开发工具使用等
author: 蒋春富
# apply unocss classes to the current slide
class: text-center
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
hideInToc: true
---

# 前端工程架构升级

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    开始 <carbon:arrow-right class="inline"/>
  </span>
</div>

---
transition: fade-out
src: ./pages/purpose.md
hide: false
---

---
transition: slide-right
layout: default
src: ./pages/content.md
class: overflow-auto
---

---
transition: fade-out
src: ./pages/content-code-standard.md
---

---
transition: fade-out
src: ./pages/content-build-tool.md
class: overflow-auto
---

---
transition: fade-out
src: ./pages/content-vue.md
class: overflow-auto
---

---
transition: fade-out
src: ./pages/content-ts.md
class: overflow-auto
---

---
transition: fade-out
src: ./pages/content-unocss.md
class: overflow-auto
---

---
transition: fade-out
src: ./pages/content-code-plugin.md
class: overflow-auto
---

---
layout: center
class: text-center bg-[url(/assets/images/wukong.jpg)] bg-cover 
---

# 谢谢观看

<style>
  h1 {
    @apply: text-6xl absolute text-white top-2% right-3%;
    writing-mode:vertical-rl;
    background-color: #2B90B6;
    background-image: linear-gradient(45deg, #4EC5D4 10%, #ffe 20%);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
  }

</style>
