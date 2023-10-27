import FormFactory from './Form'
import Factory from './Factory'
import objectFunc from '@/utils/objectFunc'
/**
 * /**
 * 创建组件属性
 *@param {*} name
 * @param {*} tag
 * @param {*} label
 * @param {*} groupName
 * @param {*} icon
 * @param {*} version
 * @param {*} attrs
 */
export function create(name, tag, label, groupName, icon = '', version = '1.0.0', attrs) {
  let newComponent
  switch (groupName) {
    case '表单':
    // 表单类型的组件
      newComponent = new FormFactory(name, tag, label, groupName, icon = '', version = '1.0.0', attrs)
      break
    default:
      newComponent = new Factory(name, tag, label, groupName, icon = '', version = '1.0.0', attrs)
      break
  }
  return newComponent
}

/**
 * 复制组件 todo
 * @param {*} configClone
 */
export function clone(configClone) {
  return objectFunc(configClone)
}

/**
 * 删除组件 todo
 * @param {*} conTree
 * @param {*} index
 * @returns
 */
export function deleteChild(conTree, index) {
  conTree.splice(index, 1)
  return conTree
}
