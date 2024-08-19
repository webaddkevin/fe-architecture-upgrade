## 打包工具更换

<div class="flex align-center justify-center mt-4">
  <img class="border-rounded" src="/assets/images/webpack-vite.png" />
</div>


---

### webpack打包的问题

- webpack原理

<div class="flex ">
  <img src="/assets/images/webpack.png" class="border-rounded w-30% my-2"/>

  <div class="p-6">
    当我们使用webpack启动项目时，webpack会根据我们配置文件（webpack.config.js） 中的入口文件（entry），分析出项目项目所有依赖关系，然后打包成一个文件（bundle.js），交给浏览器去加载渲染。
  </div>
</div>

这样就会带来一个问题，项目越大，需要打包的东西越多，启动时间越长。

- 构建方式

webpack是基于nodejs运行的，但js只能单线程运行，无法利用多核CPU的优势，当项目越来越大时，构建速度也就越来越慢了。

- 热更新

webpack项目中，每次修改文件，都会对整个项目重新进行打包，这对大项目来说，是非常不友好的。
虽然webpack现在有了缓存机制，但还是无法从根本上解决这个问题。


---

### vite 打包

- 原理

<div class="flex">
  <img src="/assets/images/vite.png" class="border-rounded w-30% my-2"/>
  <div class="p-2">

  在`<script type="module">`中，浏览器遇到内部的`import`引用时，会自动发起http请求，去加载对应的模块。
vite也正是利用了`ES module`这个特性，使用`vite`运行项目时，首先会用`esbuild`进行预构建，将所有模块转换为`es module`，不需要对我们整个项目进行编译打包，而是在浏览器需要加载某个模块时，拦截浏览器发出的请求，根据请求进行按需编译，然后返回给浏览器。

  </div>
</div>



- 优势

<div class="flex flex-row flex-wrap text-[14px]">
  <section class="w-1/3 p-2">
    <h4>💡 极速的服务启动</h4>
    <p>使用原生 ESM 文件，无需打包!</p>
  </section>
  <section class="w-1/3 p-2">
    <h5>⚡️ 轻量快速的热重载</h5>
    <p>无论应用程序大小如何，都始终极快的模块热重载（HMR）</p>
  </section>
  <section class="w-1/3 p-2">
    <h5>🛠️ 丰富的功能</h5>
    <p>对 TypeScript、JSX、CSS 等支持开箱即用。</p>
  </section>
  <section class="w-1/3 p-2">
    <h5>📦 优化的构建</h5>
    <p>可选 “多页应用” 或 “库” 模式的预配置 Rollup 构建</p>
  </section>
  <section class="w-1/3 p-2">
    <h5>🔩 通用的插件</h5>
    <p>在开发和构建之间共享 Rollup-superset 插件接口。</p>
  </section>
  <section class="w-1/3 p-2">
    <h5>🔑 完全类型化的API</h5>
    <p>灵活的 API 和完整 TypeScript 类型。</p>
  </section>
</div>

--- 

### 项目替换改动内容

1. vite生态库相关插件替换`vite`,`vite-plugin-html`, `@vitejs/plugin-vue2`, `@vitejs/plugin-vue2-jsx`等

2. 原有内部webpack项目插件替换，编写新的vite插件替换，`@kkl/vite-plugin-mock`, `@kkl/vite-plugin-create-routes`

3. 业务中大量`require`代码改为`import`方式, 部分业务逻辑不兼容处理

4. webpack专属环境api替换，require.context替换为import.meta.glob等

5. 静态资源路径处理, img, background-image 路径等

6. 不支持的三方包处理, 如 antv-g2等


---

### 替换效果

<div class="flex flex-row text-center">

<div class="flex flex-col items-center">
  <img src="/assets/images/webpack-run.png" class="border-rounded my-2 w-60% block" /> 
  <img src="/assets/images/webpack-build.png" class="border-rounded my-2 w-60%" /> 
  <p> webpack run dev 
  <span v-mark.circle.red="1">50s +</span>, 
  hmr <span v-mark.circle.red="1">7s +</span>, 
  build <span v-mark.circle.red="1">216s +</span>
    </p>
</div>

<div class="flex flex-col ml-2  items-center">
  <img src="/assets/images/vite-run.png" class="border-rounded my-2 w-60%"/>
  <img src="/assets/images/vite-build.png" class="border-rounded my-2 w-60%"/>
  <p> vite run dev <span v-mark.circle.green="2">1.5s +</span>, hmr <span v-mark.circle.green="2">1.5s +</span>, hmr <span v-mark.circle.green="2">46s +</span></p>
</div>

</div>



---

### 不足点

1. vite 目前开发环境和生产环境使用了两套打包方案，可能会存在出入.目前官方已经在做技术升级，引入`rust`对开发和生产打包工具统一，相信在不久将来可以解决.

2. 改造项目成本很大，改动点非常多，回归困难，这个目前还没有很好的解决办法，所以改动后上线需要充分测试，对复杂业务逻辑的项目需非常谨慎。
