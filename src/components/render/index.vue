<template>
  <div class="lan-widget-container" :data-component-id="config.id" @click="activeComponent">
    <renderView :config="config" />
    <span class="drawing-item-copy" title="复制" @click="copyComponent">
      <i class="el-icon-copy-document" />
    </span>
    <span class="drawing-item-delete" title="删除" @click="deleteComponent">
      <i class="el-icon-delete" />
    </span>
  </div>
</template>
<script>

/**
 * add by 王志勇
 * date:2022-10-18
 * desc 将容器独立出来
 */

import renderView from './renderView'

export default {
  components: {
    renderView
  },
  props: ['config', 'index'],
  inject: ['activeComponent', 'copyComponent', 'deleteComponent'],
  data() {
    return {}
  },

  mounted() {
    console.log('this', this.config)
  },
  methods: {
    /**
     * lan组件的停靠
     * @param {*} componentId 组件id
     * @param {*} tag 组件 标签
     * @param {*} event 事件
     */
    ondrop(componentId, tag, event) {
      console.log('componentId', componentId, tag, event)
    }

  }
}
</script>

<style>
.lan-widget-container {
  display: flex;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
  margin-right: 0px;
}

.lan-widget-containe.active {
  border: 1px solid;
}

.drawing-item-copy,
.drawing-item-delete {
  display: none;
  position: absolute;
  top: -10px;
  width: 22px;
  height: 22px;
  line-height: 22px;
  text-align: center;
  border-radius: 50%;
  font-size: 12px;
  border: 1px solid;
  cursor: pointer;
  z-index: 1;
}

.drawing-item-copy {
  right: 56px;
  border-color: #409EFF;
  color: #409EFF;
  background: #fff;
}

.drawing-item-copy:hover {
  background: #409EFF;
  color: #fff;
}

.drawing-item-delete {
  right: 24px;
  border-color: #F56C6C;
  color: #F56C6C;
  background: #fff;
}

.drawing-item-delete:hover {
  background: #F56C6C;
  color: #fff;
}
</style>
