import FormFactory from './Form'
import Factory from './Factory'
/**
 * /**
 * 创建组件属性
 * @param {*} tag
 * @param {*} groupName
 * @param {*} znName
 * @param {*} icon
 * @param {*} version
 * @param {*} attrs
 */
export function create(tag, groupName, znName, icon = '', version = '1.0.0', attrs) {
  let newComponent
  switch (groupName) {
    case 'form':
    // 表单类型的组件
      newComponent = new FormFactory(tag, groupName, znName, icon = '', version = '1.0.0', attrs)
      break
    default:
      newComponent = new Factory(tag, groupName, znName, icon = '', version = '1.0.0', attrs)
      break
  }
}

/**
 * 复制组件 todo
 * @param {*} configClone
 */
export function clone(configClone) {
  return JSON.parse(JSON.stringify(configClone))
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
