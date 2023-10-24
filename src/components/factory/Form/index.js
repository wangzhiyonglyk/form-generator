/**
 * 表单组件
 */
import Factory from '../Factory'
import {
  text, textarea, select, picker, datepicker, treePicker, gridPicker, upload
} from './ReactConfig'

class FormFactory extends Factory {
  constructor(tag, groupName, znName, icon = '', version = '1.0.0', extend) {
    super(tag, groupName, znName, icon, version)
    let obj
    if (tag.indexOf('el-')) {
      // vue2，vue3表单组件

    } else {
      // react 表单组件
      switch (tag) {
        case 'lan-gridPicker':
          obj = gridPicker()
          break
        case 'lan-treePicker':
          obj = treePicker()
          break
        case 'lan-datepicker':
          obj = datepicker(tag.replace('lan-', ''))
          break
        case 'lan-picker':
          obj = picker()
          break
        case 'lan-select':
          obj = select()
          break
        case 'lan-textarea':
          obj = textarea()
          break
        case 'lan-avatar':// 头像
        case 'lan-file':// 文件
        case 'lan-image':// 图片
        case 'lan-cloud':// 云文件

          obj = upload(tag.replace('lan-', ''))
          break
        default:
          obj = text(tag.replace('lan-', ''))

          break
      }
    }

    this.attrs = obj.attrs
    this.on = obj.on
  }
}

export default FormFactory
