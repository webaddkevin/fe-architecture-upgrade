## CSS引擎升级

在前端技术中`css`一直是不可或缺的一环，最近几年`css`原子化框架`tailwindcss`非常流行，相较于传统的`less`, `sass`写法，原子化`css`（将`css`每个属性按规则命名规定`class`类） 解决了以下几点问题

1. css命名困难
2. css代码 tree shaking（无用代码打包丢弃减少包体积）
3. css类型共用

基于以上原因我们项目引入了`unocss`引擎，基于打包工具`vite`，可以快速响应，快速开发`css`样式，减少了`css`代码体积，提高开发效率。

````md magic-move {lines: true}
```vue
<template>
  <div class="header"></div>
</template>

<style>
.header {
  display: flex;
	align-items: center;
	justify-content: space-between;
	border-radius: 50%;
	font-size: 16px;
	color: #fff;
	background-color: purple;
}
</style>
```

```vue
<template>
  <div class="flex items-center justify-between rounded-50% text-4 text-#fff bg-purple"></div>
</template>
```

````
