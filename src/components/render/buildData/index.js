/**
 * 这里是绑定属性
 */

import { vModel } from '../vModel'

/**
 * 标准化
 * @returns
 */
function formatVueObject() {
  // 深入数据对象：
  return {
    key: null,
    class: {},
    attrs: {},
    props: {},
    domProps: {},
    nativeOn: {},
    on: {},
    style: {},
    directives: [],
    scopedSlots: {},
    slot: null,
    ref: null,
    refInFor: true

  }
}

export default function buildData(configClone) {
  const dataObject = formatVueObject()
  // 判断是否需要绑定vModel
  if (configClone.vModel) {
    vModel.call(this, dataObject, configClone.vModel)
  }
}
