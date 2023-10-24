/**
 * 这里是用于渲染自定义的style
 */

import config from './config'

/**
 * 取得样式字符串
 * @param {*} style
 * @returns
 */
function styleRender(style) {
  function dasherize(str) {
    return str
      .replace(/([A-Z])/g, '-$1')
      .replace(/[-_\s]+/g, '-')
      .toLowerCase()
  }
  style = style || {}

  let newStyle = ''
  const numregs = /^\s*(-|\+)?(\d+|(\d*(\.\d*)))\s*$/
  // 要自动加单位的
  const pxregs = /left|right|top|bottom|width|height|fontSize|lineHeight/i

  Object.keys(style).forEach(key => {
    // 有几个样式（数字型的）因为样式面板中因为默认值的问题
    // 渲染时如果是渲染值，去掉，减少代码
    const istrue = ((key === 'flexGrow' && style[key] === 0) ||
          (key === 'flexShrink' && style[key] === 1) ||
          (key === 'opacity' && style[key] === 1))
    if (!istrue && (style[key] ?? '') !== '') {
      newStyle += `${dasherize(key)}:${numregs.test(style[key]) && pxregs.test(key) ? `${style[key]}px` : style[key]};`
    }
  })

  return newStyle
}

/**
 * 当组件有两层容器时，将overflow,position,float,margin,height,width，left ,right,top,bottom 当做外层容器属性，其他的则当作内层容器属性
 * 目前只用于上传组件
 * @param {*} style
 */
function subStyleSplit(style) {
  let positionStyle = {} // 外层容器
  let contentStyle = {} // 内层容器
  // 外层属性 分开两个，不然太长 eslint不过
  const positionkey = /^(overflow|position|float|left|right|top|bottom|width|height)$/
  const positionkey1 = /^(marginLeft|marginTop|marginBottom|marginRight|flexGrow|flexShrink|alignSelf)$/

  Object.keys(style).forEach(key => {
    if (key === 'display' && style[key] === 'none') {
      // 如果隐藏则设置容器也隐藏
      positionStyle[key] = style[key]
    }
    if (positionkey.test(key) || positionkey1.test(key)) {
      positionStyle[key] = style[key]
    } else {
      contentStyle[key] = style[key]
    }
  })

  positionStyle = styleRender(positionStyle)
  contentStyle = `width:100%;height:100%;${styleRender(contentStyle)}`

  return {
    positionStyle,
    contentStyle
  }
}
/**
 * 把边线设置独立出来,专门用于el-tabs组件 用于兼容旧版本
 * @param {*} style
 */
function borderStyleSplit(style) {
  let borderStyle = {} // border样式
  let otherStyle = {} // 其他样式
  // 外层属性
  const borderKey = /^border.*$/
  Object.keys(style).forEach(key => {
    if (borderKey.test(key)) {
      borderStyle[key] = style[key]
    } else {
      otherStyle[key] = style[key]
    }
  })

  borderStyle = styleRender(borderStyle)
  otherStyle = styleRender(otherStyle)

  return {
    borderStyle,
    otherStyle
  }
}

/**
 * 取得样式
 * @param {*} style 样式对象
 * @param {*} sub 是否有两层容器，或者需要单独配置某个属性
 * @returns
 */
export default function render(style, sub = false) {
  // 与默认配置对比，如果没有设置则返回空，减少冗余代码
  let isdiff = false

  if (style) {
    // eslint-disable-next-line no-restricted-syntax
    for (const key in config.defaultStyle) {
      if (config.defaultStyle[key] !== style && style[key]) {
        // 有设置
        isdiff = true
        break
      }
    }
  } else {
    return ''
  }

  // 如果没有设置返回空，减少代码量
  if (sub) {
    if (sub === 'border') {
      // 单独设置边框的 el-tabs
      return isdiff
        ? borderStyleSplit(style)
        : {
          borderStyle: '',
          otherStyle: ''
        }
    }
    // 旧组件嵌套了两层容器
    return isdiff
      ? subStyleSplit(style)
      : {
        positionStyle: '',
        contentStyle: ''
      }
  }

  return isdiff ? styleRender(style) : ''
}
