/**
 * 这里是组件插槽的渲染
 * 不是子组件
 */

/**
 * 插槽集合
 */
const slotSet = {}
/**
 * 将./slots中的文件挂载到对象componentChild上
 * 文件名为key，对应组件的标签属性tag值
 * 文件内容为value，解析JSON配置中的slot
 */
const slotsFiles = require.context('./components', false, /\.js$/)
const keys = slotsFiles.keys() || []
keys.forEach(key => {
  const tag = key.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = slotsFiles(key).default
  slotSet[tag] = value
})
/**
 * 渲染插槽
 * @param {*} h 渲染函数
 * @param {*} confClone 组件属性配置
 * @param {*} children 组件的子节点
 */
export default function slotsMounted(h, confClone, children) {
  const componentslot = slotSet[confClone.tag]
  if (componentslot) {
    // 如果组件存在插槽
    Object.keys(componentslot).forEach(key => {
      const slotFunc = componentslot[key]// 插槽渲染函数
      if (confClone.slot && confClone.slot[key]) {
        children.push(slotFunc(h, confClone, key))
      }
    })
  }
  return children
}
