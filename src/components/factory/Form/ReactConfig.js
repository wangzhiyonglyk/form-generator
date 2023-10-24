/**
 react表单的的属性
 */

import objectFunc from '../../../utils/objectFunc'

const http = {
  url: '', // ajax的后台地址
  httptype: 'post', // http请求的类型
  contenttype: 'application/json', // http请求的request 数据类型
  httpHeaders: null, // 请求时的headers参数
  params: null // 查询参数

}
// 表单类型
export const formType = [
  'text', // 普通输入框
  'password', // 密码
  'strongPassword', // 强密码
  'email', // 邮箱
  'url', // 网址
  'mobile', // 手机
  'idcard', // 身份证
  'year', // 年份
  'month', // 年月
  'date', // 日期
  'time', // 时间
  'timerange', // 时间范围
  'datetime', // 日期时间
  'yearrange', // 年范围
  'monthrange', // 年月范围
  'daterange', // 日期范围
  'datetimerange', // 日期时间范围
  'alpha', // 英文字母
  'alphanum', // 英文字母与数字
  'integer', // 整型数据
  'integerrange', // 整型数据范围
  'number', // 数字
  'numberrange', // 数字范围
  'textarea', // 多行文本
  'select', // 下拉框
  'radio', // 单选框
  'rate', // 评分
  'checkbox', // 复选框
  'checkbutton', // 复选按钮
  'switch', // 开关
  'picker', // 级联选择组件
  'treepicker', // 下拉树选择
  'gridpicker', // 表格下拉
  'panelpicker', // 面板选择
  'image', // 图片
  'avatar', // 头像
  'file', // 文件
  'cloud' // 云文件
]

/**
 * 表单的基本属性
 */
const baseConfig = {
  /** **基础属性*** */
  type: 'text',
  name: null, // 组件字段名
  value: null, // 值
  text: null, // 文本值
  label: null, // 字段文字说明属性
  title: null, // 提示信息
  placeholder: null, // 输入框预留文字
  readOnly: false, // 是否只读
  required: false, // 是否必填
  hide: false, // 是否隐藏
  regexp: null, // 正则表达式
  invalidTip: null, // 无效时的提示字符
  min: null, // 最小值,最小长度,最少选项
  max: null, // 最大值,最大长度,最多选项
  addBefore: null, // 前缀
  addAfter: null // 后缀

}

/**
 * 表单的基本事件
 */
const baseOn = {
  onFocus: {
    name: 'onFocus', // 事件名
    label: '焦点事件', // 事件中文名
    desc: '焦点事件', // 事件描述
    bindArgs: '', // 模板绑定中的参数，多个用逗号隔开
    args: [{ name: 'event', desc: '事件源' }], // 参数
    code: '', // 代码
    need: false // 是否需要

  }, // 焦点事件
  onClick: {
    name: 'onClick', // 事件名
    label: '单击事件', // 事件中文名
    desc: '单击事件', // 事件描述
    bindArgs: '', // 模板绑定中的参数，多个用逗号隔开
    args: [{ name: 'event', desc: '事件源' }], // 参数
    code: '', // 代码
    need: false // 是否需要
  }, // 单击事件
  onDoubleClick: {
    name: 'onDoubleClick', // 事件名
    label: '双击事件', // 事件中文名
    desc: '双击事件', // 事件描述
    bindArgs: '', // 模板绑定中的参数，多个用逗号隔开
    args: [{ name: 'event', desc: '事件源' }], // 参数
    code: '', // 代码
    need: false // 是否需要

  }, // 双击事件
  onKeyUp: {
    name: 'onKeyUp', // 事件名
    label: '键盘事件', // 事件中文名
    desc: '键盘事件', // 事件描述
    bindArgs: '', // 模板绑定中的参数，多个用逗号隔开
    args: [{ name: 'event', desc: '事件源' }], // 参数
    code: '', // 代码
    need: false // 是否需要

  }, // 键盘事件
  onBlur: {
    name: 'onBlur', // 事件名
    label: '失去焦点事件', // 事件中文名
    desc: '失去焦点事件', // 事件描述
    bindArgs: '', // 模板绑定中的参数，多个用逗号隔开
    args: [{ name: 'event', desc: '事件源' }], // 参数
    code: '', // 代码
    need: false // 是否需要

  }, // 失去焦点事件
  onChange: {
    name: 'onChange', // 事件名
    label: '值改变事件', // 事件中文名
    desc: '值改变事件', // 事件描述
    bindArgs: '', // 模板绑定中的参数，多个用逗号隔开
    args:
      [
        { name: 'value', desc: '值' },
        { name: 'event', desc: '事件源' }
      ], // 参数
    code: '', // 代码
    need: false // 是否需要
  } // 值改变事件

}

/**
 * 文本框类型组件
 * @returns
 */
export function text(type) {
  const obj = {
    attrs: { ...baseConfig, type },
    on: objectFunc.clone(baseOn)
  }
  if (type === 'text') {
    obj.on.onSearch = {
      name: 'onSearch', // 事件名
      label: '查询事件', // 事件中文名
      desc: '查询事件', // 事件描述
      bindArgs: '', // 模板绑定中的参数，多个用逗号隔开
      args: [{ name: 'event', desc: '事件源' }], // 参数
      code: '', // 代码
      need: false // 是否需要

    } // 查询事件
    obj.on.onPaste = {
      name: 'onPaste', // 事件名
      label: '粘贴事件', // 事件中文名
      desc: '粘贴事件', // 事件描述
      bindArgs: '', // 模板绑定中的参数，多个用逗号隔开
      args: [{ name: 'event', desc: '事件源' }], // 参数
      code: '', // 代码
      need: false // 是否需要

    } // 粘贴事件
  }
}
/**
 * 多行文本
 */
export function textarea() {
  const obj = text('textarea')
  obj.attrs = {
    ...obj.attrs,
    rows: null, // textarea
    cols: null, // textarea
    resize: false // 是否可以拖动大小)
  }
  return obj
}

/**
 * 通用下拉框
 */
const combobox = {
  attrs: {
    ...baseConfig,
    valueField: null, // 数据字段值名称
    textField: null, // 数据字段文本名称
    data: null, // 自定义数据源
    dataSource: 'data' // ajax的返回的数据源中哪个属性作为数据源,为null时直接后台返回的数据作为数据源,默认为data

  },
  on: {
    ...objectFunc.clone(baseOn),
    onSelect: {
      name: 'onSelect', // 事件名
      label: '选择事件', // 事件中文名
      desc: '选择事件', // 事件描述
      bindArgs: '', // 模板绑定中的参数，多个用逗号隔开
      args: [
        { name: 'value', desc: 'key值' },
        { name: 'text', desc: '文本值' },
        { name: 'name', desc: '字段名' },
        { name: 'event', desc: '事件源' }], // 参数
      code: '', // 代码
      need: false // 是否需要

    }
  }
}

/**
     * 普通下拉框
     */
export function select() {
  const obj = objectFunc.clone(combobox)
  obj.attrs = {
    ...obj.attrs,
    ...http,
    type: 'select',
    multiple: false, // 是否允许多选,多上传，文件上传也可以
    attachAble: false // select是否可以添加数据
  }

  obj.on.onSort = {
    name: 'onSort', // 事件名
    label: '排序事件', // 事件中文名
    desc: '排序事件', // 事件描述
    bindArgs: '', // 模板绑定中的参数，多个用逗号隔开
    args: [
      { name: 'type', desc: '排序方式' },
      { name: 'name', desc: '字段名' },
      { name: 'event', desc: '事件源' }
    ], // 参数
    code: '', // 代码
    need: false // 是否需要

  }

  return obj
}
/**
 * 级联选择
 * @returns
 */
export function picker() {
  const obj = objectFunc.clone(combobox)
  obj.attrs = {
    ...obj.attrs,
    ...http,
    type: 'picker',
    secondUrl: null, // 第二层节点的后台地址,
    secondParams: null, // 第二层节点的后台参数
    secondParamsKey: null, // 第二层节点的后台参数中传递一级节点value值的参数名称
    thirdUrl: null, // 第三层节点的后台地址，
    thirdParams: null, // 第三层节点的后台参数
    thirdParamsKey: null, // 第三层节点的后台参数中传递二级节点value值的参数名称
    hotTitle: null, // 热门选择标题
    hotData: null // 热门选择的数据
  }

  return obj
}
/**
 * 日期/时间组件
 * @param {*} type
 * @returns
 */
export function datepicker(type) {
  const obj = objectFunc.clone(combobox)
  obj.attrs = {
    ...obj.attrs,
    type,
    range: null, // 日期与时间相关选择时，最大范围
    attachTime: false, // 日期组件时是否附带时间
    attachSecond: false // 时间组件是否附带秒
  }
  return obj
}
/**
 * 上传组件
 * @returns
 */
export function upload(type) {
  const obj = objectFunc.clone(combobox)
  obj.attrs = {
    ...obj.attrs,
    type,
    // 文件上传
    accept: null // 上传文件类型
  }
  obj.on.push(
    {
      uploadSuccess: {
        name: 'uploadSuccess', // 事件名
        label: '上传成功事件', // 事件中文名
        desc: '上传成功事件', // 事件描述
        bindArgs: '', // 模板绑定中的参数，多个用逗号隔开
        args: [

          { name: 'event', desc: '事件源' }], // 参数
        code: '', // 代码
        need: false // 是否需要

      }
    }
  )
  return obj
}
/**
 * / 树treepicker，其他树组件属性，请去树组件本身查询
 */
export function treePicker() {
  const obj = objectFunc.clone(combobox)
  obj.attrs = {
    ...obj.attrs,
    type: 'treePicker',
    idField: null, // 树组件/treepicker id字段名称
    parentField: null, // 树组件treepicker pId字段名称
    childrenField: null, // 树组件 treepicker pId字段名称
    isSimpleData: false // 树组件/treepicker 是否启用简单数据格式
  }
  delete obj.textField
  delete obj.valueField
  return obj
}

/**
 * / 树treepicker，其他树组件属性，请去树组件本身查询
 */
export function gridPicker() {
  const obj = objectFunc.clone(combobox)
  obj.attrs = {
    ...obj.attrs,
    type: 'gridPicker',
    prKey: null, // 表格 id字段名称
    headers: null // 表头
  }
  delete obj.textField
  delete obj.valueField
  return obj
}
