/**
 * 初始化组件的公共属性
 */

class Factory {
  constructor(name, tag, label, groupName, icon = '', version = '1.0.0', attrs) {
    this._standard_ = true// 用于区别是不是标准组件，旧组件，则按照旧的渲染来做
    this.id = `${tag}_${Math.random()
      .toString(36)
      .slice(8)}` // 名字中6位随机数
    this.compnentId = this.id// 用于兼容
    this.name = name// 组件的名
    this.tag = tag // 组件标签
    this.label = label // 中文名
    this.groupName = groupName // 所属分组
    this.version = version // 版本号
    this.icon = icon || `icon-${tag}` // 图标标识
    this.language = 'vue2' // 组件使用的语言，vue2,vue3,react
    this.style = null // 样式
    this.myClassName = null// 自定义的样式内容,生成一个跟id名称一样的样式名，注意这里跟style不一样，style的权重高
    this.className = [] // 样式名称
    this.attrs = attrs// 组件用于绑定的属性
    this.on = [] // 绑定的事件
    this.nativeOn = [] // 这里专门用于vue中的标签原始事件
    this.children = [] // 子组件
    this.slot = null // 对应组件插槽：覆盖原组件的插槽，前缀插槽，后缀插槽，文本插槽等
    this.ref = null // 组件的引用,用于调用组件内部方法
    this.document = '' // 组件使用api文档地址
  }
}

export default Factory
