## CSS引擎升级

在前端技术中`css`一直是不可或缺的一环，最近几年`css`原子化框架`tailwindcss`、 `windicss`、`unocss`非常流行，相较于传统的`less`, `sass`写法，原子化`css`（将`css`每个属性按规则命名规定`class`类） 解决了以下几点问题

1. `css`书写过程中选择器名称命名困难
2. 控制 `CSS` 体积, 全局共用一套规则`class`, 并按需引入
3. 调试和修改都变得轻松, 单个属性对应单个`class`没有层级嵌套问题

基于以上原因我们项目引入了`unocss`引擎，基于打包工具`vite`，可以快速响应，提高`css`开发效率，减少了`css`代码体积。

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
