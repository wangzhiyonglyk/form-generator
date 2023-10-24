/**
 * 渲染组件的className 样式
 */

import styleRender from './styleRender'

/**
 * 生成组件的自定义className 的样式内容
 * 可以用于画布，也可以用预览
 * @param {*} configClone
 */
export function renderMyClassName(configClone) {
  const style = styleRender(configClone.myClassName)

  return style ? ` ${configClone.id}{
           ${style}
    } ` : ''
}

/**
 * 用于绑定组件的class
 * 可以用于画布，也可以用预览
 * @param {*} configClone
 * @returns
 */
export function getClassName(configClone) {
  return `  ${configClone.id}  ${configClone.className.join(' ')} `
}
