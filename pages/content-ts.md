## typescript使用

<br />

> 由于打包工具`vite`天生默认支持`typescript`， `vue`升级成2.7+后 函数式编程对`typescript`支持增强，以及`vscode vue`工具`Volar`类型检查`template`支持，使用`typescript`可以显著提升了项目开发体验，提升项目可维护性，所以目前所有前端项目改用使用`typescript`开发。具体好处如下：

<br />

1. 类型安全检查，保证了Vue组件和方法逻辑安全性
2. 更好的可读性和可维护性，类型注解可以使代码更加清晰易读，对于维护者来说，理解代码的意图和数据流会更加容易。
3. 模块化支持，TypeScript 支持 ES6 模块语法，使得代码组织更加清晰和模块化，易于理解和维护。
4. 大型项目管理方便，在多人协作中TypeScript 可以帮助更好地管理代码结构，减少变量名冲突等问题，使团队协作更加高效。

---

举个例子

```vue {all|8-14|2,16|all} twoslash
<template>
  <div>{{useInfo.score}}</div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";

type User = { name: string; age: number; height: number;weight: number };
const useInfo = reactive<User>({
  name: "John",
  age: 30,
  height: 170,
  weight: 70
})

useInfo.weight = '修改一下'
</script>

```