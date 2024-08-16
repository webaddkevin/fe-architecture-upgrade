import{_ as o}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-BdmCOnbS.js";import{o as c,c as p,k as n,l as u,m as r,q as d,s as _,C as e,e as s,ab as l}from"./modules/vue-D2pOHkaZ.js";import{I as m}from"./slidev/default-DWydssHI.js";import{u as g,f as h}from"./slidev/context-DgN9fkBL.js";import"./modules/unplugin-icons-Dg93X4Nm.js";import"./index-DsuDDjy0.js";import"./modules/shiki-DHScOeNh.js";const f="/assets/images/prettier.gif",k="/assets/images/eslint.gif",b="/assets/images/stylelint.gif",v="/assets/images/commitlint.gif",y=s("h3",null,"代码格式校验统一配置",-1),x=s("br",null,null,-1),j=s("blockquote",null,[s("p",null,[l("从代码基础格式，主要技术栈Vue书写格式和校验，css书写格式和校验，提交内容规范出发，将相关库封装成标准依赖包制定成统一标准集合包 "),s("code",null,"@kkl/company-standard"),l("并应用于所有Vue2相关前端工程项目。")])],-1),$=s("br",null,null,-1),w=s("ol",null,[s("li",null,"代码基础格式统一")],-1),C=s("p",null,[l("根据"),s("code",null,"prettier"),l("库配置规则，对项目基本格式（空格，tab宽度，代码最大行宽）配置统一的配置文件，编写"),s("code",null,"@kkl/standard-prettier"),l("约束，保存代码自动格式化矫正")],-1),E=s("div",{class:"w-full flex align-center h-80 mb-5"},[s("img",{border:"rounded",src:f,alt:""})],-1),V=s("ol",{start:"2"},[s("li",null,[s("code",null,"html"),l(", "),s("code",null,"javascript"),l(", "),s("code",null,"typescript"),l(", "),s("code",null,"vue"),l(" 书写格式统一和语法错误提示")])],-1),B=s("p",null,[l("根据"),s("code",null,"eslint"),l("库和"),s("code",null,"vscode"),l("-"),s("code",null,"eslint"),l("的插件，参考腾讯alloyTeam的"),s("code",null,"eslint"),l("规范编写统一的项目配置"),s("code",null,"eslint-config-company-vue2"),l(", 校验代码书写规范和正确性，并提示代码错误，保存矫正部分代码")],-1),N=s("div",{class:"w-full flex align-center h-80 mb-5"},[s("img",{border:"rounded",src:k,alt:""})],-1),P=s("ol",{start:"3"},[s("li",null,"css代码书写格式统一和校验")],-1),A=s("p",null,[l("根据"),s("code",null,"stylelint"),l("库，对css书写制定统一的规范库 "),s("code",null,"@kkl/standard-stylelint-less"),l("/"),s("code",null,"@kkl/stanard-stylelint-scss")],-1),M=s("div",{class:"w-full flex align-center h-80 mb-5"},[s("img",{border:"rounded",src:b,alt:""})],-1),R=s("ol",{start:"4"},[s("li",null,"提交内容规范")],-1),T=s("p",null,[l("根据"),s("code",null,"commitlint"),l(" 和 "),s("code",null,"@commitlint/config-angular"),l(" 对提交内容进行规范统一，根据 "),s("code",null,"husky"),l("对git commit 时进行校验")],-1),q=s("div",{class:"w-full flex align-center h-80 mb-5"},[s("img",{border:"rounded",src:v,alt:""})],-1),D=s("ol",{start:"5"},[s("li",null,"版本管理和changelog")],-1),G=s("p",null,[l("对于业务项目目前不做配置，对于公用组件和工具包采用单仓库多包 "),s("code",null,"Monorepo"),l(" 模式，使用"),s("code",null,"pnpm"),l(" + "),s("code",null,"changesets"),l("管理, 这种方式可以带来以下好处：")],-1),I=s("ul",null,[s("li",null,"简化维护: 所有工具/组件都存放在一个仓库中，便于统一管理和版本控制，关联包升级自动升级依赖包版本"),s("li",null,"共享资源：不同工具/组件之间可以更容易的共享代码和资源"),s("li",null,"协作方便：同一仓库协作开发，提高开发效率")],-1),L=s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-txt"},[s("span",{class:"line"},[s("span",null,"kkl-utils/")]),l(`
`),s("span",{class:"line"},[s("span",null,"├── .changesets/")]),l(`
`),s("span",{class:"line"},[s("span",null,"├── .husky/")]),l(`
`),s("span",{class:"line"},[s("span",null,"├── .vscode/")]),l(`
`),s("span",{class:"line"},[s("span",null,"├── packages/")]),l(`
`),s("span",{class:"line"},[s("span",null,"│   ├── shenyu-api/")]),l(`
`),s("span",{class:"line"},[s("span",null,"│   │   ├── src/")]),l(`
`),s("span",{class:"line"},[s("span",null,"│   │   │   └── index.ts")]),l(`
`),s("span",{class:"line"},[s("span",null,"│   │   ├── test/")]),l(`
`),s("span",{class:"line"},[s("span",null,"│   │   │   └── index.test.ts")]),l(`
`),s("span",{class:"line"},[s("span",null,"│   │   ├── package.json")]),l(`
`),s("span",{class:"line"},[s("span",null,"│   │   ├── CHANGELOG.md")]),l(`
`),s("span",{class:"line"},[s("span",null,"│   │   ├── README.md")]),l(`
`),s("span",{class:"line"},[s("span",null,"│   │   └── tsconfig.json")]),l(`
`),s("span",{class:"line"},[s("span",null,"│   ├── get-api-url/")]),l(`
`),s("span",{class:"line"},[s("span",null,"│   ├── make-pwd-safety/")]),l(`
`),s("span",{class:"line"},[s("span",null,"│   └── common-url/")]),l(`
`),s("span",{class:"line"},[s("span",null,"├── .eslintignore")]),l(`
`),s("span",{class:"line"},[s("span",null,"├── .eslintrc.js")]),l(`
`),s("span",{class:"line"},[s("span",null,"├── .gitignore")]),l(`
`),s("span",{class:"line"},[s("span",null,"├── .prettierignore")]),l(`
`),s("span",{class:"line"},[s("span",null,"├── .prettierrc.js")]),l(`
`),s("span",{class:"line"},[s("span",null,"├── jest.config.ts")]),l(`
`),s("span",{class:"line"},[s("span",null,"├── tsconfig.json")]),l(`
`),s("span",{class:"line"},[s("span",null,"├── .npmrc")]),l(`
`),s("span",{class:"line"},[s("span",null,"├── .prettierrc")]),l(`
`),s("span",{class:"line"},[s("span",null,"├── pnpm-workspace.yaml")]),l(`
`),s("span",{class:"line"},[s("span",null,"├── package.json")]),l(`
`),s("span",{class:"line"},[s("span",null,"└── README.md")])])],-1),z={__name:"content-code-standard.md__slidev_6",setup(H){const{$slidev:O,$nav:S,$clicksContext:a,$clicks:W,$page:F,$renderContext:J,$frontmatter:t}=g();return a.setup(),(K,Q)=>{const i=o;return c(),p(m,d(_(e(h)(e(t),5))),{default:n(()=>[y,x,j,$,w,C,E,V,B,N,P,A,M,R,T,q,D,G,I,u(i,r({},{ranges:[]}),{default:n(()=>[L]),_:1},16)]),_:1},16)}}},es=z;export{es as default};
