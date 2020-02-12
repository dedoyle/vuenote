import Vue from 'vue'
// import upperFirst from 'lodash/upperFirst'
// import camelCase from 'lodash/camelCase'

/*
  --------------
  全局注册基础模块
  --------------
 */
// const requireComponent = require.context(
//   // 其组件目录的相对路径
//   '@/components/base',
//   // 是否查询其子目录
//   false,
//   // 匹配基础组件文件名的正则表达式
//   /[A-Z]\w+\.(vue|js)$/
// )

// requireComponent.keys().forEach(fileName => {
//   // 获取组件配置
//   const componentConfig = requireComponent(fileName)

//   // 获取组件的 PascalCase 命名
//   const componentName = upperFirst(
//     camelCase(
//       // 剥去文件名开头的 `'./` 和结尾的扩展名
//       fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
//     )
//   )

//   // 全局注册组件
//   Vue.component(
//     componentName,
//     // 如果这个组件选项是通过 `export default` 导出的，
//     // 那么就会优先使用 `.default`，
//     // 否则回退到使用模块的根。
//     componentConfig.default || componentConfig
//   )
// })

/*
  --------------
  全局注册指令
  --------------
 */
const requireDirective = require.context(
  // 指令目录
  '@/directives',
  // 不查找子目录
  false,
  // js文件
  /.+\.js$/
)

// 对每个配匹的文件
requireDirective.keys().forEach(fileName => {
  // 请求指令模块
  const directiveConfig = requireDirective(fileName)

  // 获取组件的 PascalCase 命名
  const directiveName = fileName
    // 移除开始的 './'
    .replace(/^\.\//, '')
    // 移除文件扩展
    .replace(/\.\w+$/, '')
  // 注册指令, 文件名作为指令名
  Vue.directive(directiveName, directiveConfig.default || directiveConfig)
})

/*
  --------------
  全局注册过滤器
  --------------
 */
// const requireFilter = require.context(
//   // 指令目录
//   '@/filters',
//   // 不查找子目录
//   false,
//   // js文件
//   /.+\.js$/
// )

// // 对每个配匹的文件
// requireFilter.keys().forEach(fileName => {
//   // 请求指令模块
//   const filterConfig = requireFilter(fileName)

//   // 获取组件的 PascalCase 命名
//   const filterName = fileName
//     // 移除开始的 './'
//     .replace(/^\.\//, '')
//     // 移除文件扩展
//     .replace(/\.\w+$/, '')
//   // 注册指令, 文件名作为指令名
//   Vue.filter(filterName, filterConfig.default || filterConfig)
// })
