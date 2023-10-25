/**
 * 这里是用于画布中组件绑定事件
 * 主要是用是于发布消息
 * @param {*} configClone
 */

export function messageBind(configClone) {
  ['on', 'nativeOn'].forEach(attr => {
    const eventKeyList = Object.keys(configClone[attr] || {})
    eventKeyList.forEach(key => {
      const event = configClone[attr][key]// 某个事件
      if (typeof event === 'object') {
        // 绑定是一个对象,需要额外的参数
        configClone[attr][key] = $event => { this.$emit(event.name, event.args, $event) }
      }
    })
  })
}

/**
 * 用于预览时绑定事件
 * @param {*} configClone
 */
export function eventsBind(configClone) {
  const events = [];
  ['on', 'nativeOn'].forEach(attr => {
    const eventKeyList = Object.keys(configClone[attr] || {})
    eventKeyList.forEach(key => {
      const event = configClone[attr][key]
      if (typeof event === 'object') {
        events.push(`@${event.name.toLowerCase().replace('on', '')}(${event.bindArgs})`)
      }
    })
  })
}

/**
 * 用于预览时生成方法
 * @param {*} configClone
 */
export function eventMethods(configClone) {
  const methods = [];
  ['on', 'nativeOn'].forEach(attr => {
    const eventKeyList = Object.keys(configClone[attr] || {})
    eventKeyList.forEach(key => {
      const event = configClone[attr][key]
      if (typeof event === 'object') {
        // 绑定是一个对象,需要额外的参数
        const
          {
            name, // 事件名
            label, // 事件中文名
            desc, // 事件描述
            args, // 参数

            code, // 代码
            need // 是否需要

          } = event

        const paramsdes = []
        const argsstr = []
        if (Array.isArray(args)) {
          args.forEach(item => {
            if (need) {
              argsstr.push(item.name)
              paramsdes.push(`* @param {*} ${item.name} ${item.desc ?? ''}`)
            }
          })
        }
        methods.push(` 
        /*
          ${configClone.label}
          ${label === desc ? label : desc}
          ${paramsdes.join('\n')}
        */
        ${configClone.id}_${name}(${argsstr.join(',')}){
            ${code}
        }

        `)
      }
    })
  })
}
