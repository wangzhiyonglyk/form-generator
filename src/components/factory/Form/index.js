/**
 * 表单组件
 */
import Factory from '../Factory'
import {
  text, textarea, select, picker, datepicker, treePicker, gridPicker, upload
} from './ReactConfig'

import {
  input, elselect, number, password, eltextarea
} from './VueConfig'

const vuefa = {
  'el-input': input,
  'el-select': elselect,
  'el-number': number,
  'el-password': password,
  'el-textarea': eltextarea
}

const reactfa = {
  'lan-gridPicker': gridPicker,
  'lan-treePicker': treePicker,
  'lan-datepicker': datepicker,
  'lan-picker': picker,
  'lan-select': select,
  'lan-textarea': textarea,
  'lan-file': upload,
  'lan-input': text
}

class FormFactory extends Factory {
  constructor(name, tag, groupName, label, icon = '', version = '1.0.0', extend) {
    super(name, tag, groupName, label, icon, version)
    let obj
    if (name.indexOf('el-')) {
      // vue2，vue3表单组件
      obj = vuefa[name]()
    } else {
      // react 表单组件
      obj = reactfa[name](name.replace('lan-', ''))
    }
    Object.keys(obj).forEach(key => {
      this[key] = obj[key]
    })
  }
}

export default FormFactory
