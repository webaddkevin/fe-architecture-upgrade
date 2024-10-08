## 打包工具更换

<div class="flex align-center justify-center mt-4">
  <img class="border-rounded" src="/assets/images/webpack-vite.png" />
</div>


---

### webpack打包的问题

- webpack原理

<img src="/assets/images/webpack.png" class="border-rounded w-70% my-2"/>

<!-- 当我们使用webpack启动项目时，webpack会根据我们配置文件（webpack.config.js） 中的入口文件（entry），分析出项目项目所有依赖关系，然后打包成一个文件（bundle.js），交给浏览器去加载渲染。

这样就会带来一个问题，项目越大，需要打包的东西越多，启动时间越长。


- 构建方式

webpack是基于nodejs运行的，但js只能单线程运行，无法利用多核CPU的优势，当项目越来越大时，构建速度也就越来越慢了。

- 热更新

webpack项目中，每次修改文件，都会对整个项目重新进行打包，这对大项目来说，是非常不友好的。
虽然webpack现在有了缓存机制，但还是无法从根本上解决这个问题。 -->

---

### vite 打包

- 原理

<img src="/assets/images/vite.png" class="border-rounded w-70% my-2"/>

<!-- 在`<script type="module">`中，浏览器遇到内部的`import`引用时，会自动发起`http`请求，去加载对应的模块。 `vite`也正是利用了`ES module`这个特性，使用`vite`运行项目时，首先会用esbuild进行预构建，将所有模块转换为`es module`，不需要对我们整个项目进行编译打包，而是在浏览器需要加载某个模块时，拦截浏览器发出的请求，根据请求进行按需编译，然后返回给浏览器。 -->

---

- 优势

<div class="flex flex-row flex-wrap">
  <section class="w-1/3 p-2">
    <h3>💡 极速的服务启动</h3>
    <p>使用原生 ESM 文件，无需打包!</p>
  </section>
  <section class="w-1/3 p-2">
    <h3>⚡️ 轻量快速的热重载</h3>
    <p>无论应用程序大小如何，都始终极快的模块热重载（HMR）</p>
  </section>
  <section class="w-1/3 p-2">
    <h3>🛠️ 丰富的功能</h3>
    <p>对 TypeScript、JSX、CSS 等支持开箱即用。</p>
  </section>
  <section class="w-1/3 p-2">
    <h3>📦 优化的构建</h3>
    <p>可选 “多页应用” 或 “库” 模式的预配置 Rollup 构建</p>
  </section>
  <section class="w-1/3 p-2">
    <h3>🔩 通用的插件</h3>
    <p>在开发和构建之间共享 Rollup-superset 插件接口。</p>
  </section>
  <section class="w-1/3 p-2">
    <h3>🔑 完全类型化的API</h3>
    <p>灵活的 API 和完整 TypeScript 类型。</p>
  </section>
</div>

---

### 改动点总结

1. `vite`生态库相关插件替换`vite`,`vite-plugin-html`, `@vitejs/plugin-vue2`, `@vitejs/plugin-vue2-jsx`等
2. 原有内部`webpack`项目插件替换，编写新的`vite`插件替换，`@kkl/vite-plugin-mock`, `@kkl/vite-plugin-create-routes`
3. 业务中大量`require`代码改为`import`方式, 部分业务逻辑不兼容处理
4. `webpack`专属环境api替换，`require.context`替换为`import.meta.glob`等
5. 静态资源路径处理, img, background-image 路径修改等
6. 不支持的三方包处理, 如 `antv-g2`等



---

### 替换效果

<div class="flex flex-row text-center">

<div class="flex flex-col">
  <img src="/assets/images/webpack-run.png" class="border-rounded my-2" /> 
  <!-- <img src="/assets/images/webpack-build.png" class="border-rounded my-2" />  -->
  <p> webpack run dev 
  <span v-mark.circle.red="1">50s +</span>, 
  hmr <span v-mark.circle.red="1">7s +</span>, 
  发布平台build <span v-mark.circle.red="1">160s +</span>
    </p>
</div>

<div class="flex flex-col ml-2">
  <img src="/assets/images/vite-run.png" class="border-rounded my-2"/>
  <!-- <img src="/assets/images/vite-build.png" class="border-rounded my-2"/> -->
  <p> vite run dev <span v-mark.circle.green="2">1.5s +</span>, hmr <span v-mark.circle.green="2">1.5s +</span>, 发布平台 build <span v-mark.circle.green="2">110s +</span></p>
</div>

</div>



---

### 不足点

1. `vite` 目前开发环境和生产环境使用了两套打包方案，可能会存在出入.目前官方已经在做技术升级，使用`rust`对开发和生产打包工具统一, 等待官方后续更新。

2. 改造项目成本很大，改动点非常多，回归困难，这个目前还没有很好的解决办法，所以改动后上线需要充分测试，对复杂业务逻辑的项目需非常谨慎。
