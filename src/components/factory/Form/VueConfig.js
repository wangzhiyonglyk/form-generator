/**
 react表单的的属性
 */

import objectFunc from '../../../utils/objectFunc'

// 表单类型
export const formType = [
  'text', // 普通输入框
  'password', // 密码
  'email', // 邮箱
  'url', // 网址
  'number', // 数字
  'textarea' //
]

const baseConfig = {
  type: 'text', // 类型
  name: '',
  label: '', // 输入框关联的label文字
  showLabel: true,
  'label-position': null, // label宽度
  'label-width': null,
  value: null, // 绑定值
  'show-word-limit': null,
  placeholder: null, // 输入框占位文本
  clearable: true, // 是否可清空
  disabled: false, // 禁用

  readonly: false,
  disabledCopy: false, // 禁止复制
  disabledPaste: false, // 禁止粘贴
  disabledCut: false// 禁止剪切

}
// 插槽
const baseSlot = {
  default: null // 默认插槽
}
/**
 * 表单的基本事件
 */
const baseOn = {
  onFocus: {
    name: 'focus', // 事件名
    label: '焦点事件', // 事件中文名
    desc: '焦点事件', // 事件描述
    bindArgs: '', // 模板绑定中的参数，多个用逗号隔开
    args: [{ name: 'event', desc: '事件源' }], // 参数
    code: '', // 代码
    need: false // 是否需要

  }, // 焦点事件

  onBlur: {
    name: 'blur', // 事件名
    label: '失去焦点事件', // 事件中文名
    desc: '失去焦点事件', // 事件描述
    bindArgs: '', // 模板绑定中的参数，多个用逗号隔开
    args: [{ name: 'event', desc: '事件源' }], // 参数
    code: '', // 代码
    need: false // 是否需要

  }, // 失去事件
  onChange: {
    name: 'change', // 事件名
    label: '值改变事件', // 事件中文名
    desc: '值改变事件', // 事件描述
    bindArgs: '', // 模板绑定中的参数，多个用逗号隔开
    args:
      [
        { name: 'value', desc: '值' }
      ], // 参数
    code: '', // 代码
    need: false // 是否需要
  }, // 值改变事件
  onInput: {
    name: 'input', // 事件名
    label: '值输入事件', // 事件中文名
    desc: '值输入事件', // 事件描述
    bindArgs: '', // 模板绑定中的参数，多个用逗号隔开
    args:
      [
        { name: 'value', desc: '值' }
      ], // 参数
    code: '', // 代码
    need: false // 是否需要
  },
  onClear: {
    name: 'clear', // 事件名
    label: '清空事件', // 事件中文名
    desc: '清空事件', // 事件描述
    bindArgs: '', // 模板绑定中的参数，多个用逗号隔开
    args: [], // 参数
    code: '', // 代码
    need: false // 是否需要
  }
}
/**
 * 表单的基本原生事件
 */
const baseNativeOn = {

  onClick: {
    name: 'click', // 事件名
    label: '单击事件', // 事件中文名
    desc: '单击事件', // 事件描述
    bindArgs: '', // 模板绑定中的参数，多个用逗号隔开
    args: [{ name: 'event', desc: '事件源' }], // 参数
    code: '', // 代码
    need: false // 是否需要
  }, // 单击事件
  onDoubleClick: {
    name: 'dblclick', // 事件名
    label: '双击事件', // 事件中文名
    desc: '双击事件', // 事件描述
    bindArgs: '', // 模板绑定中的参数，多个用逗号隔开
    args: [{ name: 'event', desc: '事件源' }], // 参数
    code: '', // 代码
    need: false // 是否需要

  }, // 双击事件
  onKeyUp: {
    name: 'keyup', // 事件名
    label: '键盘事件', // 事件中文名
    desc: '键盘事件', // 事件描述
    bindArgs: '', // 模板绑定中的参数，多个用逗号隔开
    args: [{ name: 'event', desc: '事件源' }], // 参数
    code: '', // 代码
    need: false // 是否需要

  } // 键盘事件

}
/**
 * 输入框
 */
export function input() {
  const obj = {
    attrs: {
      ...baseConfig,
      'prefix-icon': null, // 输入框头部图标
      'suffix-icon': null, // 输入框尾部图标
      maxlength: null, // 原生属性，最大输入长度
      minlength: null, // //原生属性，最大输入长度
      'show-word-limit': null// 是否显示输入字数统计
    },
    on: objectFunc.clone(baseOn),
    nativeOn: objectFunc.clone(baseNativeOn),
    slot: {
      ...objectFunc.clone(baseSlot),
      prefix: null, // 输入框头部内容
      suffix: null, // 输入框尾部内容
      prepend: null, // 输入框前置内容
      append: null // 输入框后置内容
    }
  }
  return obj
}

/**
 *密码
 */
export function password() {
  const obj = {
    attrs: {
      ...baseConfig,
      type: 'password',
      maxlength: null, // 原生属性，最大输入长度
      minlength: null, // 原生属性，最大输入长度
      'show-password': false// 是否显示切换密码图标
    },
    on: objectFunc.clone(baseOn),
    nativeOn: objectFunc.clone(baseNativeOn),
    slot: objectFunc.clone(baseSlot)
  }
  return obj
}
/**
 *  数字
 * @returns
 */
export function number() {
  const obj = {
    attrs: {
      ...baseConfig,
      min: null, // 原生属性，最小值
      max: null, // //原生属性，最大值
      controls: null, // 是否使用控制按钮
      'controls-position': null // 控制按钮位置
    },
    on: objectFunc.clone(baseOn),
    nativeOn: objectFunc.clone(baseNativeOn),
    slot: objectFunc.clone(baseSlot)
  }
  return obj
}
/**
 * 多行输入
 * @returns
 */
export function eltextarea() {
  const obj = {
    attrs: {
      ...baseConfig,
      size: null, // 输入框尺寸
      maxlength: null, // 原生属性，最大输入长度
      minlength: null, // //原生属性，最大输入长度
      'show-word-limit': null// 是否显示输入字数统计
    },
    on: objectFunc.clone(baseOn),
    nativeOn: objectFunc.clone(baseNativeOn),
    slot: objectFunc.clone(baseSlot)
  }
  return obj
}

/**
 * 选择器
 */
export function elselect() {
  const obj = {
    attrs: {
      ...baseConfig,
      multiple: false, // 多选
      'multiple-limit': null, // 多选的限制
      'value-key': null // value的key值

    },
    on: objectFunc.clone(baseOn),
    nativeOn: objectFunc.clone(baseNativeOn),
    slot: { ...objectFunc.clone(baseSlot), options: null }
  }
  return obj
}
