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

1. 函数式写法天生对typescript支持非常友好，而options-api 对象写法typescript支持不友好
2. 功能拆分方便，利于逻辑代码重用，有利于大型项目开发和维护（以前vue大型项目不被看好的原因）
3. 代码可维护性更好，按功能划分
4. 更小的生产包体积
5. 基于Vue细粒度的响应式系统更灵活

搭配 `<script setup>` 使用组合式 API 比等价情况下的选项式 API 更高效，对代码压缩也更友好。这是由于 `<script setup>` 形式书写的组件模板被编译为了一个内联函数，和`<script setup>` 中的代码位于同一作用域。不像选项式 API 需要依赖 this 上下文对象访问属性，被编译的模板可以直接访问 `<script setup>` 中定义的变量，无需从实例中代理。这对代码压缩更友好，因为本地变量的名字可以被压缩，但对象的属性名则不能

<div class="flex flex-row">
  <div class="flex-1 mr-2">
  
   ```vue
   <script>
   export default {
    data() {
      return {
       baz: '',
       qux: '',
      }
    },
    computed: {
      doubleFoo() {
        return this.foo * 2
      },
      doubleQux() {
        return this.qux * 2
      }
    },
    methods: {
      fetchQux() {
        this.qux = 'aaa'
      },
      fetchBaz() {
        this.baz = 'bbb'
      }
    },
    mounted() {
      this.fetchQux()
      this.fetchBaz()
    }
   }
   </script>
   ```

  </div>
  <div class="flex-1 flex-col">
  
  <div class="mb-2">

  ```ts
  // useQux.ts
  import {ref, computed, onMounted} from 'vue'
  export default function () {
    const qux = ref('')
    const doubleQux = computed(() => qux.value * 2)
    const fetchQux = () => {
      qux.value = 'aaa'
      ...
    }
    onMounted(fetchQux)
    return {qux, doubleQux}
  }
  ```

  </div>

  <div class="mb-2">

  ```ts
  // useBaz.ts
  import {ref, computed, onMounted} from 'vue'
  export default function () {
    const baz = ref('')
    const doubleBaz = computed(() => baz.value * 2)
    const fetchBaz = () => {
      baz.value = 'aaa'
      ...
    }
    onMounted(fetchBaz)
    return {baz, doubleBaz}
  }
  ```

  </div>

  <div>

  ```vue
  <script setup>
  // Vue组件中
  import useQux from './composables/useQux.ts'
  import useBaz from './composables/useBaz.ts'
  const {qux, doubleQux} = useQux()
  const {baz, doubleBaz} = useBaz()
  </script>
  ```

  </div>
  </div>
</div>

---

### <carbon-warning-alt class="text-red-500" />开发注意点

1. 组合式 API 的函数式写法，不能使用 `this` 关键字，因为函数式写法没有 `this` 上下文对象，所以不能直接访问组件实例上的属性和方法。可以通过getCurrentInstance()获取当前组件实例，然后通过实例上的属性和方法访问。

```vue
<script setup>
import {getCurrentInstance} from 'vue'
// proxy相当于this-当前组件实例
const {proxy} = getCurrentInstance()
</script>
```

2. 不能直接解构`props`或者响应式对象, 否则会失去响应式，需要通过`toRef`或者`toRefs`方法进行解构

```vue
<script setup>
const props = defineProps({
  info: {name: String, age: Number}
})
const {name} = props.info // name不是响应式
const {name} = toRefs(props.info) // name是响应式
</script
```

3. ref 和 reactive 的区别

```vue
<script setup>
 import {ref, reactive} from 'vue'
 const foo = ref(1)
 console.log(foo.value) // 取值需要.value
 const bar = reactive({name: 'bar'})
 console.log(bar.name) // 取值不需要.value

 watch(foo, () => { // 监听直接监听
   console.log('foo changed')
 })

 watch(() => bar.name, () => { // 监听值需要函数
  console.log('name changed')
 })
</script>
```

4. 使用编译宏定义props, emits，以及组件变量导出。2.7+版本支持 defineProps, defineEmits, defineExpose, withDefaults, 实例上删除了props属性

```vue
<script setup>
// 支持类型推断
const props = defineProps({
  name: {type: String, default: ''}
})
//支持类型推断
const emit = defineEmits(['update'])
const a = ref(1)
defineExpose({
  a // 暴露给父组件使用
})
</script>
```

---

### 现有问题

1. composable-api 语法 相对原有的语法变化太大, 全新的api有一定使用学习成本
2. 去年年底开始官方Vue 2 终止支持(EOL)，主要迭代升级vue3，但是vue3底层API 对浏览器兼容性要求较高，我们目前使用的vue2.7.16(vue2最后一个版本-vue3过渡版)，框架后续能力不足。
3. 由于官方社区主推vue3, 相应的社区很多插件库都转向vue3，而vue3语法无法很好向下兼容会出现社区能力断档