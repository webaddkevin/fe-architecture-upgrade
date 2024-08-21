## 代码规范统一

<br />

>为了保证项目代码一致性和可维护性而制定的一系列规则和最佳实践

<div class="flex mt-20 justify-around ">
  <div v-motion
    :initial="{
      y: 100,
      opacity: 0,
    }"
    :enter="{
      y: 0,
      opacity: 1,
      transition: {
        duration: 500
      },
    }" class="flex flex-col items-center ">
    <logos-visual-studio-code class="text-8xl mb-4"/>
    <div>vscode</div>
  </div>
  <div v-motion
    :initial="{
      y: 100,
      opacity: 0,
    }"
    :enter="{
      y: 0,
      opacity: 1,
      transition: {
        duration: 500
      },
    }" class="flex flex-col items-center ">
    <logos-prettier class="text-8xl mb-4"/>
    <div>prettier</div>
  </div>
  <div v-motion
    :initial="{
      y: 100,
      opacity: 0,
    }"
    :enter="{
      y: 0,
      opacity: 1,
      transition: {
        duration: 800
      },
    }" class="flex flex-col items-center ">
    <logos-eslint class="text-8xl mb-4"/>
    <div>eslint</div>
  </div>
  <div  v-motion
    :initial="{
      y: 100,
      opacity: 0,
    }"
    :enter="{
      y: 0,
      opacity: 1,
      transition: {
        duration: 1100
      },
    }" class="flex flex-col items-center  ">
    <logos-stylelint class="text-8xl mb-4"/>
    <div>stylelint</div>
  </div>
  <div v-motion
  :initial="{
    y: 100,
    opacity: 0,
  }"
  :enter="{
    y: 0,
    opacity: 1,
    transition: {
      duration: 1400
    },
  }" class="flex flex-col items-center">
  <logos-git-icon class="text-8xl mb-4"/>
  <div>git</div>
</div>
</div>


---
class: overflow-auto
---

### 统一编辑器配置统一插件，辅助编程

项目加入编辑器层面的统一配置settings.json和统一插件extensions.json

```json
// .vscode/recommendations.json
// 项目必装插件
{
  "recommendations": [
    "vue.volar",
    "stylelint.vscode-stylelint",
    "dbaeumer.vscode-eslint",
    "antfu.unocss",
    "alibaba-cloud.tongyi-lingma"
  ]
}
```

```json
// .vscode/settings.json
{
  "eslint.validate": ["javascript", "vue", "typescript"],
  "eslint.lintTask.enable": true,
  "eslint.codeAction.showDocumentation": {
    "enable": true
  },
  "eslint.debug": false,
  "eslint.format.enable": true,
  "eslint.enable": true,
  "stylelint.enable": true,
  "stylelint.validate": ["css", "less", "vue", "scss", "postcss"],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.fixAll.stylelint": "explicit"
  },
  "editor.formatOnSave": true,
  "cSpell.words": ["goproxy", "unocss", "shenyu"],
  "vue.server.maxOldSpaceSize": 4000
}
```
---
class: overflow-auto
---

### 代码格式校验统一配置

<br />

> 从代码基础格式，主要技术栈Vue书写格式和校验，css书写格式和校验，提交内容规范出发，将相关库封装成标准依赖包制定成统一标准集合包 `@kkl/company-standard`并应用于所有Vue2相关前端工程项目。

<br />
 
1. 代码基础格式统一

根据`prettier`库配置规则，对项目基本格式（空格，tab宽度，代码最大行宽）配置统一的配置文件，编写`@kkl/standard-prettier`约束，保存代码自动格式化矫正

<div class="w-full flex align-center h-80 mb-5">
  <img border="rounded" src="/assets/images/prettier.gif" alt="">
</div>

2. `html`, `javascript`, `typescript`, `vue` 书写格式统一和语法错误提示

根据`eslint`库和`vscode`-`eslint`的插件，参考腾讯alloyTeam的`eslint`规范编写统一的项目配置`eslint-config-company-vue2`, 校验代码书写规范和正确性，并提示代码错误，保存矫正部分代码

<div class="w-full flex align-center h-80 mb-5">
  <img border="rounded" src="/assets/images/eslint.gif" alt="">
</div>

3. css代码书写格式统一和校验

根据`stylelint`库，对css书写制定统一的规范库 `@kkl/standard-stylelint-less`/`@kkl/stanard-stylelint-scss`

<div class="w-full flex align-center h-80 mb-5">
  <img border="rounded" src="/assets/images/stylelint.gif" alt="">
</div>

4. 提交内容规范

根据`commitlint` 和 `@commitlint/config-angular` 对提交内容进行规范统一，根据 `husky`对git commit 时进行校验

<div class="w-full flex align-center h-80 mb-5">
  <img border="rounded" src="/assets/images/commitlint.gif" alt="">
</div>

5. 版本管理和changelog

对于业务项目目前不做配置，对于公用组件和工具包采用单仓库多包 `Monorepo` 模式，使用`pnpm` + `changesets`管理, 这种方式可以带来以下好处：

- 简化维护: 所有工具/组件都存放在一个仓库中，便于统一管理和版本控制，关联包升级自动升级依赖包版本
- 共享资源：不同工具/组件之间可以更容易的共享代码和资源 
- 协作方便：同一仓库协作开发，提高开发效率

```txt
kkl-utils/
├── .changesets/
├── .husky/
├── .vscode/
├── packages/
│   ├── shenyu-api/
│   │   ├── src/
│   │   │   └── index.ts
│   │   ├── test/
│   │   │   └── index.test.ts
│   │   ├── package.json
│   │   ├── CHANGELOG.md
│   │   ├── README.md
│   │   └── tsconfig.json
│   ├── get-api-url/
│   ├── make-pwd-safety/
│   └── common-url/
├── .eslintignore
├── .eslintrc.js
├── .gitignore
├── .prettierignore
├── .prettierrc.js
├── jest.config.ts
├── tsconfig.json
├── .npmrc
├── .prettierrc
├── pnpm-workspace.yaml
├── package.json
└── README.md
```



---