/**
 * 这里画布中的渲染组件函数
 */
import objectFunc from '@/utils/objectFunc'
import slotsMounted from '../slots'
import { messageBind } from '../events'

import buildData from '../buildData'

export default {
  props: {
    config: {
      type: Object,
      required: true
    }
  },
  render(h) {
    if (this.config && typeof this.config === 'object') {
      const confClone = objectFunc.clone(this.config)
      const children = this.$slots.default || []// 组件默认的插槽
      // 如果slots文件夹存在与当前tag同名的文件，则执行文件中的代码，生成组件其他插件
      slotsMounted.call(this, h, confClone, children)
      // 绑定组件的事件，发送为消息
      messageBind.call(this, confClone)
      // 将json表单配置转化为vue render可以识别的 “数据对象（dataObject）”
      const dataObject = buildData.call(this, this.config)
      return h(this.config.tag, dataObject, children)
    }

    return <div>找不到</div>
  }
}
