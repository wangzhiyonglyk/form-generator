/**
 * 默认的样式配置
 */
export default {
  defaultStyle: {
    position: null,
    left: null,
    right: null,
    top: null,
    bottom: null,
    width: null,
    height: null,
    display: null,
    justifyContent: null,
    flexDirection: null,
    flexWrap: null,
    alignContent: null,
    flexGrow: 0,
    flexShrink: 1,
    alignSelf: null,
    float: null, // 默认为左
    backgroundColor: null,
    color: null,
    borderColor: null,
    borderRadius: null,
    borderStyle: null,
    borderTopColor: null,
    borderTopWidth: null,
    borderTopStyle: null,
    borderLeftColor: null,
    borderLeftWidth: null,
    borderLeftStyle: null,
    borderRightColor: null,
    borderRightWidth: null,
    borderRightStyle: null,
    borderBottomColor: null,
    borderBottomWidth: null,
    borderBottomStyle: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    marginLeft: null,
    marginRight: null,
    marginTop: null,
    marginBottom: null,
    paddingLeft: null,
    paddingRight: null,
    paddingTop: null,
    paddingBottom: null,
    fontSize: null,
    fontColor: null,
    fontWeight: null,
    fontFamily: null,
    textAlign: null,
    opacity: 1,
    zIndex: null,
    overflow: null,
    lineHeight: null
  },
  unit: [
    {
      value: 'px',
      text: 'px'
    },
    {
      value: '%',
      text: '%'
    }
  ],
  position: [
    {
      value: 'static',
      text: '默认',
      title: '按元素顺序自然排列'
    },
    {
      value: 'relative',
      text: '相对',
      title: '相对于父组件的位置'
    },
    {
      value: 'absolute',
      text: '绝对',
      title: '相对第一个非默认定位的祖先节点'
    },
    {
      value: 'fixed',
      text: '固定',
      title: '相对于浏览器窗口'
    },
    {
      value: 'sticky',
      text: '粘性',
      title: '滚动时超出后会固定，要设置left或top'
    }
  ],
  overflow: [
    {
      value: 'visible',
      text: '可见'
    },
    {
      value: 'hidden',
      text: '隐藏'
    },
    {
      value: 'scroll',
      text: '滚动条'
    },
    {
      value: 'auto',
      text: '自动'
    },
    {
      value: 'inherit',
      text: '继承'
    }
  ],
  display: [
    {
      value: null,
      text: '无',
      title: '恢复为系统默认形式'
    },
    {
      value: 'block',
      text: '块级',
      title: '块级元素，此元素前后会带有换行符'
    },
    {
      value: 'inline',
      text: '行内',
      title: '此元素会被显示为内联元素，元素前后没有换行符'
    },
    {
      value: 'flex',
      text: '弹性',
      title: '弹性排版'
    },
    {
      value: 'inline-block',
      text: '行内块级',
      title: '行内块元素,外部行内，里面是块级'
    },
    {
      value: 'none',
      text: '隐藏',
      title: '此元素不会被显示'
    }
  ],
  float: [
    {
      value: 'none',
      text: '不浮动'
    },
    {
      value: 'left',
      text: '左浮动'
    },
    {
      value: 'right',
      text: '右浮动'
    }
  ],
  flexDirection: [
    {
      value: 'row',
      text: '横向'
    },
    {
      value: 'column',
      text: '纵向'
    }
  ],
  justifyContent: [
    {
      value: 'flex-start',
      text: '起点对齐'
    },
    {
      value: 'flex-end',
      text: '终点对齐'
    },
    {
      value: 'center',
      text: '居中对齐'
    },
    {
      value: 'space-between',
      text: '两端对齐'
    },
    {
      value: 'space-around',
      text: '两端平分'
    }
  ],
  alignContent: [
    {
      value: 'flex-start',
      text: '起点对齐'
    },
    {
      value: 'flex-end',
      text: '终点对齐'
    },
    {
      value: 'center',
      text: '居中对齐'
    },
    {
      value: 'baseline',
      text: '基线对齐'
    },
    {
      value: 'stretch',
      text: '拉满'
    }
  ],
  alignSelf: [
    {
      value: 'auto',
      text: '自动'
    },
    {
      value: 'flex-start',
      text: '起点对齐'
    },
    {
      value: 'flex-end',
      text: '终点对齐'
    },
    {
      value: 'center',
      text: '居中对齐'
    },
    {
      value: 'baseline',
      text: '基线对齐'
    },
    {
      value: 'stretch',
      text: '拉满'
    }
  ],
  flexWrap: [
    {
      value: 'nowrap',
      text: '不换行'
    },
    {
      value: 'wrap',
      text: '换行'
    }
  ],
  textAlign: [
    {
      value: 'left',
      text: '左对齐'
    },
    {
      value: 'right',
      text: '右对齐'
    },
    {
      value: 'center',
      text: '居中'
    }
  ],
  fontWeight: [
    {
      value: 'normal',
      text: '正常'
    },
    {
      value: 'bold',
      text: '粗体'
    }
  ],
  fontFamily: [
    {
      value: 'Arial',
      text: 'Arial'
    },
    {
      value: 'Helvetica',
      text: 'Helvetica'
    },
    {
      value: 'serif',
      text: 'serif'
    }
  ],
  borderStyle: [
    {
      value: 'solid',
      text: '实线'
    },
    {
      value: 'dotted',
      text: '虚线'
    },
    {
      value: 'none',
      text: '无'
    }
  ],
  overflowOption: [
    {
      value: 'visible',
      text: '超出内容保留，会呈现在元素框之外(visible)'
    },
    {
      value: 'hidden',
      text: '超出内容隐藏(hidden)'
    },
    {
      value: 'scroll',
      text: '默认出现滚动条(scroll)'
    },
    {
      value: 'hidden auto',
      text: '如内容超出容器，自动出现滚动条(auto)'
    },
    {
      value: 'inherit',
      text: '规定应该从父元素继承 overflow 属性的值(inherit)'
    }
  ]
}
