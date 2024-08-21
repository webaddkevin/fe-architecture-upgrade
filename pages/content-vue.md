## <logos-vue v-motion :initial="{opacity: 0, y: 100}" :enter="{opacity: 1, y: 0, scale: 1}"/> 主要技术栈Vue升级


<br /> 

> 随着现代主流框架 `react`, `vue` 不断的更新迭代,  函数式编程逐渐在前端工程流行开来，从2022年开始`react 16`版本中摒弃了class开发模式， 开始倡导使用`hooks`编写代码，而后Vue 2.7 版本中，也提出了Composition API概念。

<div class="flex align-center justify-center">
  <img src="/assets/images/composable-api.jpg" class="w-70%" alt="composable-api" />
</div>



--- 

### Composition API

组合式 API (Composition API) 是一系列 API 的集合，使我们可以使用函数而不是声明选项的方式书写 Vue 组件。它是一个概括性的术语，涵盖了以下方面的 API：

1. 响应式 API：例如 ref() 和 reactive()，使我们可以直接创建响应式状态、计算属性和侦听器。
2. 生命周期钩子：例如 onMounted() 和 onUnmounted()，使我们可以在组件各个生命周期阶段添加逻辑。
3. 依赖注入：例如 provide() 和 inject()，使我们可以在使用响应式 API 时，利用 Vue 的依赖注入系统。

---

### 对比原有options-api写法的好处

组合式函数写法，对比原有的Options-api 好处有如下：

1. 函数式写法天生对`typescript`支持非常友好，而`options-api` 对象写法`typescript`支持不友好
2. 功能拆分方便，利于逻辑代码重用，有利于大型项目开发和维护（以前`vue`大型项目不被看好的原因）
3. 代码可维护性更好，按功能划分
4. 更小的生产包体积
5. 基于`Vue`细粒度的响应式系统更灵活

搭配 `<script setup>` 使用组合式 API 比等价情况下的选项式 API 更高效，对代码压缩也更友好。这是由于 `<script setup>` 形式书写的组件模板被编译为了一个内联函数，和`<script setup>` 中的代码位于同一作用域。不像选项式 API 需要依赖 `this`  上下文对象访问属性，被编译的模板可以直接访问 `<script setup>` 中定义的变量，无需从实例中代理。这对代码压缩更友好，因为本地变量的名字可以被压缩，但对象的属性名则不能


---

### 存在的问题

1. `composable-api` 语法相对原有的语法变化较大,需要学习成本。
2. 去年年底开始官方`Vue 2` 终止支持(EOL)，全力维护升级 `vue3`，但是vue3底层API 对浏览器兼容性要求较高，我们目前使用的`vue2.7.16` (vue2最后一个版本-vue3过渡版)，框架后续能力不足。