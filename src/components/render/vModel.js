/**
 *画布中的绑定输入事件
 * @param {*} renderObject
 * @param {*} value
 */
export function vModel(renderObject, value) {
  renderObject.props.value = value
  renderObject.on.input = val => {
    this.$emit('onInput', val)
  }
}

/**
 * 用于非输入的输入改变
 * @param {*} renderObject
 * @param {*} attr 属性名
 * @param {*} value 值
 */
export function vdivModel(renderObject, attr) {
  renderObject.on.blur = event => {
    this.$emit('changeProps', attr, event)
  }
}

/**
 * 用于预览时绑定vModel
 * @param {*} prop
 */
export function vModelStr(configClone, prop) {
  // 如果指定了字段名，则使用字名与表单名结合，否则使用 id加属性名
  return ` v-model=" ${configClone.name
    ? `${configClone.formName ?? ''}.${configClone.name}` : `${configClone.id}_${prop}`} "  `
}
